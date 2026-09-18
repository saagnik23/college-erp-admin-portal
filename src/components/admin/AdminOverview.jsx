import React from 'react';
import { Shield, Users, Calendar, AlertTriangle, Sparkles, TrendingUp, CheckCircle2, Clock } from 'lucide-react';

export default function AdminOverview({ studentsCount, eventsCount, complaintsList, onNavigateTab }) {
  const pendingComplaints = complaintsList.filter((c) => c.status === 'Pending').length;
  const inProgressComplaints = complaintsList.filter((c) => c.status === 'In-Progress').length;
  const resolvedComplaints = complaintsList.filter((c) => c.status === 'Resolved').length;

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="glass-card p-6 border border-purple-500/30 bg-gradient-to-r from-[#111d3d] via-[#0b132b] to-purple-950/30 relative">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-extrabold text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20 mb-2">
              <Shield className="w-4 h-4" />
              <span>SUPERADMIN CONTROL CENTER</span>
            </div>
            <h1 className="text-3xl font-black text-white">Campus ERP Master Administration</h1>
            <p className="text-xs text-gray-300 mt-1">
              GEC Autonomous College Bhubaneswar Multi-Tenant Administration Panel.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigateTab('events_management')}
              className="neon-btn text-xs px-4 py-2.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Manage Events CRUD</span>
            </button>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="glass-panel p-5 border border-white/10">
          <div className="text-xs font-bold text-gray-400 uppercase">Pre-Loaded Active Students</div>
          <div className="text-3xl font-black text-[#ccff00] mt-1">{studentsCount}</div>
          <div className="text-[10px] text-gray-400 mt-1">Seed Database Active</div>
        </div>

        <div className="glass-panel p-5 border border-white/10">
          <div className="text-xs font-bold text-gray-400 uppercase">Published Events</div>
          <div className="text-3xl font-black text-blue-400 mt-1">{eventsCount}</div>
          <div className="text-[10px] text-gray-400 mt-1">Multi-Role Visible</div>
        </div>

        <div className="glass-panel p-5 border border-white/10">
          <div className="text-xs font-bold text-gray-400 uppercase">Total Grievances Logged</div>
          <div className="text-3xl font-black text-amber-400 mt-1">{complaintsList.length}</div>
          <div className="text-[10px] text-gray-400 mt-1">{pendingComplaints} Pending Review</div>
        </div>

        <div className="glass-panel p-5 border border-white/10">
          <div className="text-xs font-bold text-gray-400 uppercase">Grievance Resolution Rate</div>
          <div className="text-3xl font-black text-emerald-400 mt-1">
            {Math.round((resolvedComplaints / (complaintsList.length || 1)) * 100)}%
          </div>
          <div className="text-[10px] text-emerald-400 font-bold mt-1">{resolvedComplaints} Resolved</div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6 border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center justify-between">
            <span>Recent Grievance Analytics</span>
            <button
              onClick={() => onNavigateTab('requests_complaints')}
              className="text-xs font-bold text-[#ccff00] hover:underline"
            >
              Open Complaints Console &rarr;
            </button>
          </h3>

          <div className="space-y-3">
            {complaintsList.slice(0, 3).map((item) => (
              <div key={item.id} className="p-3.5 rounded-xl bg-[#0b132b] border border-white/10 text-xs flex items-center justify-between">
                <div>
                  <span className="font-bold text-white">{item.title}</span>
                  <div className="text-[10px] text-gray-400 mt-0.5">{item.studentName} ({item.category})</div>
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                  item.status === 'Resolved' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                }`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center justify-between">
            <span>Quick Admin Module Shortcuts</span>
            <span className="text-xs text-purple-400 font-bold">10 Active Modules</span>
          </h3>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <button
              onClick={() => onNavigateTab('events_management')}
              className="p-3 rounded-xl bg-[#0b132b] hover:bg-white/5 border border-white/10 text-left font-bold text-white hover:text-[#ccff00] transition-colors"
            >
              ⚡ Events Management CRUD
            </button>
            <button
              onClick={() => onNavigateTab('requests_complaints')}
              className="p-3 rounded-xl bg-[#0b132b] hover:bg-white/5 border border-white/10 text-left font-bold text-white hover:text-[#ccff00] transition-colors"
            >
              📝 Complaints & Form Config
            </button>
            <button
              onClick={() => onNavigateTab('timetable_calendar')}
              className="p-3 rounded-xl bg-[#0b132b] hover:bg-white/5 border border-white/10 text-left font-bold text-white hover:text-[#ccff00] transition-colors"
            >
              📅 Academic Calendar Editor
            </button>
            <button
              onClick={() => onNavigateTab('students_faculty')}
              className="p-3 rounded-xl bg-[#0b132b] hover:bg-white/5 border border-white/10 text-left font-bold text-white hover:text-[#ccff00] transition-colors"
            >
              👥 Manage Seed Students
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
