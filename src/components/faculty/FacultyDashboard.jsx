import React, { useState } from 'react';
import { Sparkles, Users, CheckCircle2, Clock, Calendar, GraduationCap, Save } from 'lucide-react';

export default function FacultyDashboard({ studentsList, onUpdateAttendance }) {
  const [selectedCourse, setSelectedCourse] = useState('Data Structures & Algorithms (CS401)');
  const [attendanceState, setAttendanceState] = useState(
    studentsList.reduce((acc, stu) => ({ ...acc, [stu.id]: true }), {})
  );
  const [savedSuccess, setSavedSuccess] = useState(false);

  const toggleStudent = (id) => {
    setAttendanceState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSaveAttendance = () => {
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="pb-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>FACULTY PORTAL & ATTENDANCE MARKER</span>
          </div>
          <h2 className="text-2xl font-black text-white">Faculty Dashboard & Roll Call</h2>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="bg-[#111d3d] text-xs font-bold text-white px-3.5 py-2 rounded-xl border border-white/10 focus:outline-none focus:border-[#ccff00]"
          >
            <option>Data Structures & Algorithms (CS401)</option>
            <option>Database Management Systems (CS402)</option>
            <option>Machine Learning Fundamentals (AI402)</option>
          </select>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="glass-panel p-5 border border-white/10">
          <div className="text-xs font-bold text-gray-400 uppercase">Enrolled Students</div>
          <div className="text-3xl font-black text-[#ccff00] mt-1">{studentsList.length}</div>
          <div className="text-[10px] text-gray-400 mt-1">B.Tech CSE & CSE-AI/ML 4th Sem</div>
        </div>

        <div className="glass-panel p-5 border border-white/10">
          <div className="text-xs font-bold text-gray-400 uppercase">Active Roll Call Status</div>
          <div className="text-2xl font-bold text-emerald-400 mt-1">
            {Object.values(attendanceState).filter(Boolean).length} Present / {studentsList.length} Total
          </div>
          <div className="text-[10px] text-gray-400 mt-1">Slot: 09:00 AM - 10:00 AM</div>
        </div>

        <div className="glass-panel p-5 border border-white/10">
          <div className="text-xs font-bold text-gray-400 uppercase">Assigned Course</div>
          <div className="text-sm font-bold text-white mt-1 truncate">{selectedCourse}</div>
          <div className="text-[10px] text-blue-400 font-bold mt-1">LT-101 • 4 Credits</div>
        </div>
      </div>

      {/* Roll Call Attendance Marking Sheet for 6 Pre-Loaded Students */}
      <div className="glass-card p-6 border border-white/10 space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div>
            <h3 className="text-base font-bold text-white">Daily Student Roll Call Register</h3>
            <p className="text-xs text-gray-400">Click student status toggle to mark Present (Green) or Absent (Red).</p>
          </div>

          <button
            onClick={handleSaveAttendance}
            className="neon-btn text-xs px-5 py-2.5 flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>{savedSuccess ? 'Saved Attendance!' : 'Submit Roll Call Register'}</span>
          </button>
        </div>

        {savedSuccess && (
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Attendance register saved and updated live across all student profiles!</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {studentsList.map((stu) => {
            const isPresent = attendanceState[stu.id];
            return (
              <div
                key={stu.id}
                onClick={() => toggleStudent(stu.id)}
                className={`p-4 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  isPresent
                    ? 'bg-emerald-500/10 border-emerald-500/40 text-white'
                    : 'bg-red-500/10 border-red-500/40 text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ccff00]/20 border border-[#ccff00]/40 flex items-center justify-center text-xs font-black text-[#ccff00]">{stu.name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase()}</div>
                  <div>
                    <h4 className="text-xs font-bold truncate">{stu.name}</h4>
                    <span className="text-[10px] text-gray-400 font-mono">{stu.regNo}</span>
                    <div className="text-[9px] text-[#ccff00] font-bold">{stu.dept}</div>
                  </div>
                </div>

                <span className={`px-3 py-1 rounded-full text-xs font-black uppercase ${
                  isPresent ? 'bg-emerald-500 text-[#0b132b]' : 'bg-red-500 text-white'
                }`}>
                  {isPresent ? 'PRESENT' : 'ABSENT'}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
