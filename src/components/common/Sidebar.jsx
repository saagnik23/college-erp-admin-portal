import React from 'react';
import {
  LayoutDashboard,
  Users,
  Building,
  Calendar,
  GraduationCap,
  Sparkles,
  AlertTriangle,
  Settings,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export const ADMIN_NAV_TREE = [
  { id: 'overview', label: 'Master Overview', icon: LayoutDashboard },
  { id: 'students_faculty', label: 'Student Management', icon: Users },
  { id: 'departments_attendance', label: 'Departments & Attendance', icon: Building },
  { id: 'timetable_calendar', label: 'Academic Calendar', icon: Calendar },
  { id: 'exams_results', label: 'Exams & Grade Records', icon: GraduationCap },
  { id: 'events_management', label: 'Campus Events', icon: Sparkles },
  { id: 'requests_complaints', label: 'Grievances & Complaints', icon: AlertTriangle },
  { id: 'settings', label: 'System Settings', icon: Settings },
];

export default function Sidebar({ activeTab, setActiveTab, currentUser, onLogout }) {
  return (
    <aside className="w-64 bg-[#0b132b] border-r border-white/10 flex flex-col h-screen sticky top-0 z-30 select-none">
      {/* Brand Header */}
      <div className="p-4 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#a855f7] text-[#0b132b] font-black text-sm flex items-center justify-center shadow-[0_0_12px_rgba(168,85,247,0.4)]">
            GEC
          </div>
          <div>
            <h1 className="text-xs font-black text-white tracking-wider uppercase">
              GEC AUTONOMOUS
            </h1>
            <span className="text-[9px] text-[#a855f7] font-bold uppercase tracking-widest block">
              CENTRAL ADMIN
            </span>
          </div>
        </div>
      </div>

      {/* Admin Profile Summary Card */}
      <div className="p-3 mx-3 my-3 bg-[#111d3d] border border-white/10 rounded-xl flex items-center gap-3">
        <div className="w-9 h-9 rounded-lg bg-[#a855f7]/20 border border-[#a855f7]/40 flex items-center justify-center text-xs font-black text-[#a855f7]">
          SA
        </div>
        <div className="overflow-hidden">
          <p className="text-xs font-bold text-white truncate">{currentUser?.name || "System SuperAdmin"}</p>
          <p className="text-[10px] text-gray-400 truncate">University Controller Cell</p>
        </div>
      </div>

      {/* Nav Menu Items */}
      <div className="flex-1 px-3 py-2 overflow-y-auto space-y-1">
        <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-3 mb-2">
          ADMINISTRATION MODULES
        </div>

        {ADMIN_NAV_TREE.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all text-left ${
                isActive
                  ? 'bg-[#a855f7] text-white font-bold shadow-[0_0_12px_rgba(168,85,247,0.35)]'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                <span>{item.label}</span>
              </div>
              {isActive && <ChevronRight className="w-4 h-4 text-white" />}
            </button>
          );
        })}
      </div>

      {/* Footer Info */}
      <div className="p-3 border-t border-white/10 text-[10px] text-gray-400 text-center font-mono flex items-center justify-center gap-1.5">
        <ShieldCheck className="w-3.5 h-3.5 text-[#a855f7]" />
        <span>Root Controller Access</span>
      </div>
    </aside>
  );
}
