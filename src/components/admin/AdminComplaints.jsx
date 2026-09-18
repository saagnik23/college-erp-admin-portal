import React, { useState } from 'react';
import { AlertTriangle, Settings, Save, CheckCircle2, PieChart, Clock, ExternalLink, ShieldCheck } from 'lucide-react';

export default function AdminComplaints({
  complaints,
  googleFormUrl,
  onSaveGoogleFormUrl,
  onUpdateComplaintStatus
}) {
  const [urlInput, setUrlInput] = useState(googleFormUrl);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const categories = [
    'Academic',
    'Hostel',
    'Mess',
    'Infrastructure',
    'Electricity',
    'Water',
    'Internet',
    'Transport',
    'Cleanliness',
    'Faculty related',
    'Examination',
    'Fees',
    'Other'
  ];

  // Metrics
  const total = complaints.length;
  const pending = complaints.filter((c) => c.status === 'Pending').length;
  const inProgress = complaints.filter((c) => c.status === 'In-Progress').length;
  const resolved = complaints.filter((c) => c.status === 'Resolved').length;

  // Category Distribution map
  const categoryCounts = categories.reduce((acc, cat) => {
    acc[cat] = complaints.filter((c) => c.category === cat).length;
    return acc;
  }, {});

  const handleSaveConfig = (e) => {
    e.preventDefault();
    onSaveGoogleFormUrl(urlInput);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="pb-4 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
            <AlertTriangle className="w-4 h-4" />
            <span>ADMIN MODULE 3: COMPLAINTS & GRIEVANCE ANALYTICS</span>
          </div>
          <h2 className="text-2xl font-black text-white">Grievance Analytics & Google Form Settings</h2>
        </div>
      </div>

      {/* Admin Google Form Setting Field */}
      <div className="glass-card p-6 border border-[#ccff00]/30 bg-gradient-to-r from-[#111d3d] to-[#070d1e]">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-extrabold text-white flex items-center gap-2">
              <Settings className="w-5 h-5 text-[#ccff00]" />
              <span>Institutional Google Form Integration Setting</span>
            </h3>
            <span className="text-xs text-[#ccff00] font-mono">Setting Key: GOOGLE_FORM_URL</span>
          </div>

          <form onSubmit={handleSaveConfig} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder='PASTE_GOOGLE_FORM_URL_HERE'
              className="flex-1 bg-[#0b132b] text-xs font-mono text-white p-3 rounded-xl border border-white/15 focus:outline-none focus:border-[#ccff00]"
            />
            <button type="submit" className="neon-btn text-xs px-5 py-3 flex items-center justify-center gap-2">
              <Save className="w-4 h-4" />
              <span>Save Setting Field</span>
            </button>
          </form>

          {savedSuccess && (
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>GOOGLE_FORM_URL setting updated! Student portal iframe will reflect changes instantly.</span>
            </div>
          )}

          <p className="text-[11px] text-gray-400">
            Current Status: {urlInput && urlInput.trim() !== '' && urlInput !== 'PASTE_GOOGLE_FORM_URL_HERE'
              ? '✅ Form URL Configured & Active in Student Portal Iframe'
              : '⚠️ Unconfigured - Student portal displays fallback: "Complaint form will be available soon."'}
          </p>
        </div>
      </div>

      {/* Analytics KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="glass-panel p-5 border border-white/10">
          <div className="text-xs font-bold text-gray-400 uppercase">Total Tickets</div>
          <div className="text-3xl font-black text-white mt-1">{total}</div>
          <div className="text-[10px] text-gray-400 mt-1">Logged Complaints</div>
        </div>

        <div className="glass-panel p-5 border border-white/10">
          <div className="text-xs font-bold text-gray-400 uppercase">Pending Action</div>
          <div className="text-3xl font-black text-amber-400 mt-1">{pending}</div>
          <div className="text-[10px] text-amber-400 font-bold mt-1">Awaiting Inspection</div>
        </div>

        <div className="glass-panel p-5 border border-white/10">
          <div className="text-xs font-bold text-gray-400 uppercase">In-Progress</div>
          <div className="text-3xl font-black text-blue-400 mt-1">{inProgress}</div>
          <div className="text-[10px] text-blue-400 font-bold mt-1">Workorder Assigned</div>
        </div>

        <div className="glass-panel p-5 border border-white/10">
          <div className="text-xs font-bold text-gray-400 uppercase">Resolved Complaints</div>
          <div className="text-3xl font-black text-emerald-400 mt-1">{resolved}</div>
          <div className="text-[10px] text-emerald-400 font-bold mt-1">Avg Resolution: 24h</div>
        </div>
      </div>

      {/* Category Breakdown & Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass-card p-5 border border-white/10 lg:col-span-1 space-y-4">
          <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
            <PieChart className="w-4 h-4 text-[#ccff00]" />
            <span>Complaint Category Distribution</span>
          </h3>

          <div className="space-y-2 max-h-72 overflow-y-auto pr-1">
            {categories.map((cat) => {
              const cnt = categoryCounts[cat] || 0;
              const pct = total > 0 ? Math.round((cnt / total) * 100) : 0;
              return (
                <div key={cat} className="p-2 rounded-lg bg-[#0b132b] text-xs space-y-1">
                  <div className="flex justify-between font-bold text-gray-300">
                    <span>{cat}</span>
                    <span className="text-[#ccff00]">{cnt} ({pct}%)</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-[#ccff00]" style={{ width: `${pct}%` }}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Complaints List & Resolution Updater */}
        <div className="glass-card p-5 border border-white/10 lg:col-span-2 space-y-4">
          <h3 className="text-sm font-extrabold text-white">Student Ticket Resolution Center</h3>

          <div className="space-y-3">
            {complaints.map((ticket) => (
              <div key={ticket.id} className="glass-panel p-4 border border-white/10 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono text-[#ccff00] font-bold">{ticket.ticketNo}</span>
                    <span className="badge-neon ml-2">{ticket.category}</span>
                    <h4 className="text-sm font-bold text-white mt-1">{ticket.title}</h4>
                    <div className="text-[11px] text-gray-400 mt-0.5">By: {ticket.studentName} ({ticket.studentRegNo})</div>
                  </div>

                  {/* Status Updater */}
                  <div className="flex items-center gap-2">
                    <select
                      value={ticket.status}
                      onChange={(e) => onUpdateComplaintStatus(ticket.id, e.target.value)}
                      className="bg-[#0b132b] text-xs font-bold text-white px-3 py-1.5 rounded-xl border border-white/15 focus:outline-none focus:border-[#ccff00]"
                    >
                      <option value="Pending">Pending</option>
                      <option value="In-Progress">In-Progress</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </div>
                </div>

                <p className="text-xs text-gray-300">{ticket.description}</p>
                <div className="text-[11px] text-emerald-400 italic">Resolution Notes: {ticket.resolutionNotes}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
