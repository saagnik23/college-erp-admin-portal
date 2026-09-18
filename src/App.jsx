import React, { useState, useEffect } from 'react';
import Sidebar from './components/common/Sidebar';
import Header from './components/common/Header';
import ReminderModal from './components/common/ReminderModal';
import AdminLogin from './components/auth/AdminLogin';

// Admin Portal Components
import AdminOverview from './components/admin/AdminOverview';
import AdminStudents from './components/admin/AdminStudents';
import AdminEvents from './components/admin/AdminEvents';
import AdminCalendar from './components/admin/AdminCalendar';
import AdminComplaints from './components/admin/AdminComplaints';
import AdminSettings from './components/admin/AdminSettings';

// Embedded Modules
import FacultyDashboard from './components/faculty/FacultyDashboard';
import FacultyGrades from './components/faculty/FacultyGrades';

// Data & Services
import {
  INITIAL_STUDENTS,
  INITIAL_EVENTS,
  INITIAL_ACADEMIC_CALENDAR,
  INITIAL_COMPLAINTS
} from './data/mockData';
import { fetchStudents, createStudentApi } from './services/studentService';
import { getVerifiedSession, clearSession } from './utils/authSecurity';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  // Master Data State
  const [studentsList, setStudentsList] = useState(INITIAL_STUDENTS);
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [calendarEvents, setCalendarEvents] = useState(INITIAL_ACADEMIC_CALENDAR);
  const [complaints, setComplaints] = useState(INITIAL_COMPLAINTS);
  const [googleFormUrl, setGoogleFormUrl] = useState('');
  const [reminderModalItem, setReminderModalItem] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Restore encrypted session
  useEffect(() => {
    const verified = getVerifiedSession('admin');
    if (verified) {
      setCurrentUser(verified);
    }
  }, []);

  // Fetch live students from Supabase
  useEffect(() => {
    let isMounted = true;
    async function loadStudents() {
      try {
        const res = await fetchStudents();
        if (isMounted && res && res.data && res.data.length > 0) {
          setStudentsList(res.data);
        }
      } catch (err) {
        console.warn('Admin portal: failed to load students from database:', err);
      }
    }
    loadStudents();
    return () => { isMounted = false; };
  }, []);

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleLogout = () => {
    clearSession('admin');
    setCurrentUser(null);
  };

  const handleAddStudent = async (newStudent) => {
    setStudentsList((prev) => {
      const exists = prev.some((s) => s.regNo === newStudent.regNo || s.id === newStudent.id);
      return exists ? prev : [newStudent, ...prev];
    });
    try {
      await createStudentApi(newStudent);
    } catch (err) {
      console.error('Error persisting new student to database:', err);
    }
  };

  const handleAddEvent = (newEvent) => {
    setEvents((prev) => [newEvent, ...prev]);
  };

  const handleUpdateEvent = (updatedEvent) => {
    setEvents((prev) => prev.map((e) => (e.id === updatedEvent.id ? updatedEvent : e)));
  };

  const handleDeleteEvent = (eventId) => {
    setEvents((prev) => prev.filter((e) => e.id !== eventId));
  };

  const handleAddCalendarEvent = (newEvent) => {
    setCalendarEvents((prev) => [...prev, newEvent]);
  };

  const handleDeleteCalendarEvent = (eventId) => {
    setCalendarEvents((prev) => prev.filter((e) => e.id !== eventId));
  };

  const handleUpdateComplaintStatus = (ticketId, statusVal) => {
    setComplaints((prev) =>
      prev.map((c) => (c.id === ticketId ? { ...c, status: statusVal, updatedDate: new Date().toISOString().split('T')[0] } : c))
    );
  };

  // If not authenticated, show Admin Login Gateway
  if (!currentUser) {
    return <AdminLogin onLoginSuccess={(adminUser) => setCurrentUser(adminUser)} />;
  }

  return (
    <div className="min-h-screen bg-[#050c1e] text-white flex overflow-hidden font-sans antialiased">
      {/* 1. ADMIN SIDEBAR */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* 2. MAIN WORKSPACE */}
      <div className="flex-1 flex flex-col overflow-y-auto bg-[#050c1e]">
        <Header
          currentUser={currentUser}
          onLogout={handleLogout}
          theme={theme}
          onToggleTheme={handleToggleTheme}
        />

        <main className="p-4 lg:p-8 flex-1 max-w-7xl mx-auto w-full">
          {activeTab === 'overview' && (
            <AdminOverview
              studentsCount={studentsList.length}
              eventsCount={events.length}
              complaintsList={complaints}
              onNavigateTab={setActiveTab}
            />
          )}

          {activeTab === 'students_faculty' && (
            <AdminStudents
              studentsList={studentsList}
              onAddStudent={handleAddStudent}
            />
          )}

          {activeTab === 'departments_attendance' && (
            <FacultyDashboard studentsList={studentsList} />
          )}

          {activeTab === 'timetable_calendar' && (
            <AdminCalendar
              calendarEvents={calendarEvents}
              onAddCalendarEvent={handleAddCalendarEvent}
              onDeleteCalendarEvent={handleDeleteCalendarEvent}
            />
          )}

          {activeTab === 'exams_results' && (
            <FacultyGrades studentsList={studentsList} />
          )}

          {activeTab === 'events_management' && (
            <AdminEvents
              events={events}
              onAddEvent={handleAddEvent}
              onUpdateEvent={handleUpdateEvent}
              onDeleteEvent={handleDeleteEvent}
              studentsList={studentsList}
            />
          )}

          {activeTab === 'requests_complaints' && (
            <AdminComplaints
              complaintsList={complaints}
              onUpdateStatus={handleUpdateComplaintStatus}
            />
          )}

          {activeTab === 'settings' && (
            <AdminSettings
              googleFormUrl={googleFormUrl}
              onSaveGoogleFormUrl={(url) => setGoogleFormUrl(url)}
            />
          )}
        </main>
      </div>

      {reminderModalItem && (
        <ReminderModal
          item={reminderModalItem}
          onClose={() => setReminderModalItem(null)}
        />
      )}
    </div>
  );
}
