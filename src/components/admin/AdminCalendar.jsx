import React, { useState } from 'react';
import { Calendar, Plus, Trash2, Edit2, Download, CheckCircle2, FileText } from 'lucide-react';

export default function AdminCalendar({ calendarEvents, onAddCalendarEvent, onDeleteCalendarEvent }) {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState('2026-10-30');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Academic');
  const [description, setDescription] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    const newEntry = {
      id: `CAL-${Date.now().toString().slice(-4)}`,
      date,
      title,
      category,
      description
    };
    onAddCalendarEvent(newEntry);
    setShowModal(false);
    setTitle('');
    setDescription('');
    alert("New Academic Calendar Event published!");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
            <Calendar className="w-4 h-4" />
            <span>ADMIN MODULE 2: ACADEMIC CALENDAR EDITOR</span>
          </div>
          <h2 className="text-2xl font-black text-white">Academic Calendar Schedule Manager</h2>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => alert("Uploading official GEC Academic Calendar PDF...")}
            className="neon-btn-secondary text-xs px-4 py-2 rounded-xl flex items-center gap-2"
          >
            <FileText className="w-4 h-4 text-[#ccff00]" />
            <span>Upload Calendar PDF</span>
          </button>

          <button
            onClick={() => setShowModal(true)}
            className="neon-btn text-xs px-4 py-2 rounded-xl flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add Calendar Milestone</span>
          </button>
        </div>
      </div>

      {/* Calendar Items Table */}
      <div className="glass-card overflow-x-auto border border-white/10">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#0b132b] text-gray-400 text-[11px] uppercase tracking-wider border-b border-white/10">
              <th className="p-3.5 font-bold">Date</th>
              <th className="p-3.5 font-bold">Category Badge</th>
              <th className="p-3.5 font-bold">Milestone Title & Details</th>
              <th className="p-3.5 font-bold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-xs">
            {calendarEvents.map((item) => (
              <tr key={item.id} className="hover:bg-white/5 transition-colors">
                <td className="p-3.5 font-bold text-[#ccff00] font-mono">{item.date}</td>
                <td className="p-3.5">
                  <span className="badge-neon">{item.category}</span>
                </td>
                <td className="p-3.5">
                  <div className="font-bold text-white">{item.title}</div>
                  <div className="text-[11px] text-gray-400">{item.description}</div>
                </td>
                <td className="p-3.5">
                  <button
                    onClick={() => onDeleteCalendarEvent(item.id)}
                    className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-card max-w-md w-full p-6 border border-[#ccff00]/40 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#ccff00]" /> Add Academic Calendar Milestone
            </h3>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-300 font-bold mb-1">Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#0b132b] text-white p-2.5 rounded-xl border border-white/15"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 font-bold mb-1">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-[#0b132b] text-white p-2.5 rounded-xl border border-white/15"
                >
                  <option value="Academic">Academic</option>
                  <option value="Exams">Exams</option>
                  <option value="Holiday">Holiday</option>
                  <option value="Deadline">Deadline</option>
                  <option value="Event">Event</option>
                  <option value="Vacation">Vacation</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-300 font-bold mb-1">Milestone Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-[#0b132b] text-white p-2.5 rounded-xl border border-white/15"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 font-bold mb-1">Short Description</label>
                <textarea
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-[#0b132b] text-white p-2.5 rounded-xl border border-white/15"
                  required
                ></textarea>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button type="submit" className="neon-btn text-xs px-5 py-2.5">
                  Publish Milestone
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
