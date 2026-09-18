import React, { useState } from 'react';
import { Users, Search, GraduationCap, Phone, Mail, Award, Clock } from 'lucide-react';

export default function FacultyStudentsDirectory({ studentsList }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [deptFilter, setDeptFilter] = useState('All');

  const filtered = studentsList.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.regNo.includes(searchTerm);
    const matchesDept = deptFilter === 'All' || s.dept.includes(deptFilter);
    return matchesSearch && matchesDept;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
            <Users className="w-4 h-4" />
            <span>PRE-LOADED STUDENT DIRECTORY</span>
          </div>
          <h2 className="text-2xl font-black text-white">Student Roster & Academic Directory</h2>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={deptFilter}
            onChange={(e) => setDeptFilter(e.target.value)}
            className="bg-[#111d3d] text-xs font-bold text-white px-3 py-2 rounded-xl border border-white/10"
          >
            <option value="All">All Departments</option>
            <option value="CSE">B.Tech CSE</option>
            <option value="AI/ML">B.Tech CSE-AI/ML</option>
          </select>

          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name or registration no..."
              className="bg-[#111d3d] text-xs text-white placeholder-gray-400 pl-9 pr-3 py-2 rounded-xl border border-white/10 focus:outline-none focus:border-[#ccff00]"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((stu) => (
          <div key={stu.id} className="glass-card p-5 border border-white/10 space-y-4 hover:border-[#ccff00]/40 transition-all">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#ccff00]/20 border border-[#ccff00] flex items-center justify-center text-xl font-black text-[#ccff00]">{stu.name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase()}</div>
              <div>
                <h3 className="text-base font-extrabold text-white">{stu.name}</h3>
                <div className="text-xs text-[#ccff00] font-mono">{stu.regNo}</div>
                <span className="badge-neon mt-1 inline-block">{stu.dept}</span>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-gray-300 pt-2 border-t border-white/5">
              <div className="flex justify-between">
                <span className="text-gray-400">CGPA:</span>
                <span className="font-bold text-[#ccff00]">{stu.cgpa}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Attendance:</span>
                <span className="font-bold text-blue-400">{stu.attendanceOverall}%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Hostel Room:</span>
                <span className="font-bold text-white truncate max-w-[150px]">{stu.hostel}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
