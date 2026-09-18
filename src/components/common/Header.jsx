import React, { useState } from 'react';
import { Bell, Search, LogOut, ChevronDown, ShieldAlert, Calendar, Sun, Moon } from 'lucide-react';

export default function Header({ currentUser, onLogout, theme, onToggleTheme }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const notifications = [
    { id: 1, title: 'Hostel mess maintenance complaint logged', time: '12m ago', unread: true },
    { id: 2, title: 'Supabase database synchronized successfully', time: '35m ago', unread: false },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0b132b]/90 backdrop-blur-md border-b border-white/10 px-4 lg:px-8 py-3 flex items-center justify-between">
      {/* Search & Academic Term info */}
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2 bg-[#111d3d] border border-white/10 rounded-xl px-3 py-1.5 text-xs text-gray-300">
          <Calendar className="w-3.5 h-3.5 text-[#a855f7]" />
          <span>Central Controller: <strong className="text-white">Autumn 2026</strong></span>
        </div>

        <div className="relative hidden md:block">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search master records, complaints, faculty..."
            className="w-72 bg-[#111d3d] text-xs text-white placeholder-gray-400 rounded-xl pl-9 pr-4 py-2 border border-white/10 focus:outline-none focus:border-[#a855f7] transition-colors"
          />
        </div>
      </div>

      {/* User Actions & Profile */}
      <div className="flex items-center gap-3">
        {/* Light Mode / Dark Mode Toggle */}
        <button
          onClick={onToggleTheme}
          className="p-2 rounded-xl bg-[#111d3d] hover:bg-white/10 border border-white/10 text-gray-300 hover:text-[#a855f7] transition-colors flex items-center gap-1.5 text-xs font-bold"
          title="Toggle Theme"
        >
          {theme === 'dark' ? (
            <>
              <Sun className="w-4 h-4 text-[#a855f7]" />
              <span className="hidden sm:inline text-[11px]">Light Mode</span>
            </>
          ) : (
            <>
              <Moon className="w-4 h-4 text-amber-500" />
              <span className="hidden sm:inline text-[11px]">Dark Mode</span>
            </>
          )}
        </button>

        {/* SuperAdmin Badge */}
        <span className="px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 bg-purple-500/15 text-purple-400 border border-purple-500/30">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>SUPER ADMIN</span>
        </span>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-xl bg-[#111d3d] hover:bg-white/10 border border-white/10 text-gray-300 hover:text-[#a855f7] transition-colors relative"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#a855f7] rounded-full animate-pulse"></span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-72 bg-[#0b132b] border border-white/10 rounded-2xl shadow-2xl p-4 z-50 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-xs font-bold text-white">Administrative Alerts</span>
                <span className="text-[10px] text-[#a855f7] font-mono">1 New</span>
              </div>
              {notifications.map((n) => (
                <div key={n.id} className="p-2.5 rounded-xl bg-[#111d3d] text-xs space-y-1">
                  <p className="text-gray-200 font-medium">{n.title}</p>
                  <span className="text-[10px] text-gray-400">{n.time}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Profile Details & Logout */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center gap-3 p-1.5 pr-3 rounded-2xl bg-[#111d3d] hover:bg-white/10 border border-white/10 transition-colors"
          >
            <div className="w-8 h-8 rounded-xl bg-[#a855f7] text-white flex items-center justify-center text-xs font-black">
              SA
            </div>
            <div className="text-left hidden md:block">
              <div className="text-xs font-bold text-white truncate max-w-[140px]">
                {currentUser?.name || "System SuperAdmin"}
              </div>
              <div className="text-[10px] text-gray-400">
                Central Controller
              </div>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </button>

          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-64 bg-[#0b132b] border border-white/10 rounded-2xl shadow-2xl p-3 z-50 space-y-2">
              <div className="p-2 border-b border-white/10">
                <p className="text-xs font-bold text-white">{currentUser?.name || "System SuperAdmin"}</p>
                <p className="text-[10px] text-gray-400">{currentUser?.email || 'admin@bput.ac.in'}</p>
                <p className="text-[10px] text-[#a855f7] font-mono mt-1">Role: Master Administrator</p>
              </div>

              <button
                onClick={() => {
                  setShowProfileMenu(false);
                  onLogout();
                }}
                className="w-full mt-2 p-2 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-red-400 text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Log Out of Admin Portal</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
