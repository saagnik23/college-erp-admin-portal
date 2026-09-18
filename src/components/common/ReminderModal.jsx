import React, { useState } from 'react';
import { Bell, CheckCircle2, X } from 'lucide-react';

export default function ReminderModal({ item, onClose }) {
  const [reminderType, setReminderType] = useState('24h');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [saved, setSaved] = useState(false);

  const handleSet = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => {
      onClose();
      alert(`Automated reminder set for "${item?.title || 'Event'}" via SMS/Email!`);
    }, 1200);
  };

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="glass-card max-w-md w-full p-6 border border-[#ccff00]/40 space-y-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Bell className="w-5 h-5 text-[#ccff00]" /> Set Automated Event Reminder
        </h3>

        <div className="p-3 bg-[#0b132b] rounded-xl border border-white/10 text-xs">
          <div className="font-bold text-white">{item.title}</div>
          <div className="text-[11px] text-[#ccff00] mt-0.5">Date: {item.date}</div>
        </div>

        <form onSubmit={handleSave} className="space-y-4 text-xs">
          <div>
            <label className="block text-gray-300 font-bold mb-1">Reminder Notification Timing</label>
            <select
              value={reminderType}
              onChange={(e) => setReminderType(e.target.value)}
              className="w-full bg-[#0b132b] text-white p-2.5 rounded-xl border border-white/15 focus:outline-none focus:border-[#ccff00]"
            >
              <option value="1h">1 Hour Before Event</option>
              <option value="24h">24 Hours Before Event</option>
              <option value="48h">2 Days Before Registration Deadline</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 font-bold mb-1">SMS Alert Mobile Number</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-[#0b132b] text-white p-2.5 rounded-xl border border-white/15 font-mono"
              required
            />
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-400 hover:text-white"
            >
              Cancel
            </button>
            <button type="submit" disabled={saved} className="neon-btn text-xs px-5 py-2.5">
              {saved ? 'Setting Reminder...' : 'Confirm Automated Reminder'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
