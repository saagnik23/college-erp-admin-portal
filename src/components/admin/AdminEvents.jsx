import React, { useState } from 'react';
import { Sparkles, Plus, Edit2, Trash2, Eye, EyeOff, Users } from 'lucide-react';

export default function AdminEvents({
  events,
  onAddEvent,
  onUpdateEvent,
  onDeleteEvent,
  studentsList
}) {
  const [showModal, setShowModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('All');
  const [viewParticipantsModal, setViewParticipantsModal] = useState(null);

  // Form State
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Technical Events');
  const [date, setDate] = useState('2026-10-25');
  const [time, setTime] = useState('10:00 AM - 04:00 PM');
  const [venue, setVenue] = useState('Seminar Hall 1');
  const [organizer, setOrganizer] = useState('Department of CSE');
  const [clubDepartment, _setClubDepartment] = useState('Computer Society');
  const [registrationDeadline, setRegistrationDeadline] = useState('2026-10-22');
  const [description, setDescription] = useState('');
  const [banner, setBanner] = useState('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80');
  const [externalLink, setExternalLink] = useState('');
  const [status, setStatus] = useState('Published');

  const categories = [
    'All',
    'Technical Events',
    'Cultural Events',
    'Sports',
    'Workshops',
    'Seminars',
    'Hackathons',
    'Festivals',
    'Club Activities',
    'Examination Events',
    'Placement Events',
    'Other College Events'
  ];

  const handleOpenAdd = () => {
    setEditingEvent(null);
    setTitle('');
    setDescription('');
    setShowModal(true);
  };

  const handleOpenEdit = (evt) => {
    setEditingEvent(evt);
    setTitle(evt.title);
    setCategory(evt.category);
    setDate(evt.date);
    setTime(evt.time);
    setVenue(evt.venue);
    setOrganizer(evt.organizer);
    setRegistrationDeadline(evt.registrationDeadline);
    setDescription(evt.description);
    setBanner(evt.banner);
    setExternalLink(evt.externalLink || '');
    setStatus(evt.status || 'Published');
    setShowModal(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editingEvent) {
      const updated = {
        ...editingEvent,
        title,
        category,
        date,
        time,
        venue,
        organizer,
        registrationDeadline,
        description,
        banner,
        externalLink,
        status
      };
      onUpdateEvent(updated);
    } else {
      const newEvt = {
        id: `EVT-${Date.now().toString().slice(-4)}`,
        title,
        category,
        date,
        time,
        venue,
        organizer,
        clubDepartment,
        registrationDeadline,
        description,
        banner,
        externalLink,
        status,
        participants: []
      };
      onAddEvent(newEvt);
    }
    setShowModal(false);
  };

  const togglePublish = (evt) => {
    const updated = {
      ...evt,
      status: evt.status === 'Published' ? 'Unpublished' : 'Published'
    };
    onUpdateEvent(updated);
  };

  const filteredEvents = events.filter(
    (e) => activeCategoryFilter === 'All' || e.category === activeCategoryFilter
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#ccff00] uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>ADMIN MODULE 1: EVENTS MANAGEMENT</span>
          </div>
          <h2 className="text-2xl font-black text-white">Events CRUD & Participant List</h2>
        </div>

        <button
          onClick={handleOpenAdd}
          className="neon-btn text-xs px-5 py-2.5 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Create New Event</span>
        </button>
      </div>

      {/* Category Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategoryFilter(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeCategoryFilter === cat
                ? 'bg-[#ccff00] text-[#0b132b]'
                : 'bg-[#111d3d] text-gray-300 hover:bg-white/10 border border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Events Table / Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((evt) => (
          <div key={evt.id} className="glass-card overflow-hidden flex flex-col justify-between border border-white/10 space-y-3">
            <div className="relative h-44">
              <img src={evt.banner} alt={evt.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3">
                <span className="badge-neon">{evt.category}</span>
              </div>
              <div className="absolute top-3 right-3">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                  evt.status === 'Published' ? 'bg-emerald-500 text-[#0b132b]' : 'bg-gray-600 text-white'
                }`}>
                  {evt.status}
                </span>
              </div>
            </div>

            <div className="p-4 space-y-3 flex-1 flex flex-col justify-between text-xs">
              <div>
                <h3 className="font-bold text-white text-sm">{evt.title}</h3>
                <p className="text-gray-400 mt-1 line-clamp-2">{evt.description}</p>
              </div>

              <div className="space-y-1 text-gray-300 pt-2 border-t border-white/5">
                <div>📅 Date: <strong>{evt.date}</strong></div>
                <div>📍 Venue: <strong>{evt.venue}</strong></div>
                <div>👥 Registered Participants: <strong className="text-[#ccff00]">{evt.participants?.length || 0} Students</strong></div>
              </div>

              {/* Admin Action Buttons */}
              <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                <button
                  onClick={() => setViewParticipantsModal(evt)}
                  className="flex-1 py-1.5 rounded-lg bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 font-bold text-[11px] flex items-center justify-center gap-1"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Participants ({evt.participants?.length || 0})</span>
                </button>

                <button
                  onClick={() => togglePublish(evt)}
                  title="Toggle Publish Status"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300"
                >
                  {evt.status === 'Published' ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5 text-[#ccff00]" />}
                </button>

                <button
                  onClick={() => handleOpenEdit(evt)}
                  title="Edit Event"
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white"
                >
                  <Edit2 className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onDeleteEvent(evt.id)}
                  title="Delete Event"
                  className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Event Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-card max-w-xl w-full p-6 border border-[#ccff00]/40 space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-bold text-white">
              {editingEvent ? 'Edit Event Details' : 'Create New Campus Event'}
            </h3>

            <form onSubmit={handleSave} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-300 font-bold mb-1">Event Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-[#0b132b] text-white p-2.5 rounded-xl border border-white/15"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-bold mb-1">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full bg-[#0b132b] text-white p-2.5 rounded-xl border border-white/15"
                  >
                    {categories.filter((c) => c !== 'All').map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

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
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-bold mb-1">Venue Tag</label>
                  <input
                    type="text"
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    className="w-full bg-[#0b132b] text-white p-2.5 rounded-xl border border-white/15"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-bold mb-1">Organizer Club / Dept</label>
                  <input
                    type="text"
                    value={organizer}
                    onChange={(e) => setOrganizer(e.target.value)}
                    className="w-full bg-[#0b132b] text-white p-2.5 rounded-xl border border-white/15"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-bold mb-1">Banner Image URL</label>
                <input
                  type="text"
                  value={banner}
                  onChange={(e) => setBanner(e.target.value)}
                  className="w-full bg-[#0b132b] text-white p-2.5 rounded-xl border border-white/15 font-mono text-[11px]"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 font-bold mb-1">Detailed Description</label>
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
                  Save & Publish Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Participant List Modal */}
      {viewParticipantsModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-card max-w-md w-full p-6 border border-[#ccff00]/40 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-[#ccff00]" /> Participant List for {viewParticipantsModal.title}
            </h3>

            <div className="space-y-2 max-h-60 overflow-y-auto">
              {(viewParticipantsModal.participants || []).length === 0 ? (
                <p className="text-xs text-gray-400 text-center py-4">No registered participants yet.</p>
              ) : (
                viewParticipantsModal.participants.map((regNo) => {
                  const stu = studentsList.find((s) => s.regNo === regNo);
                  return (
                    <div key={regNo} className="p-2.5 rounded-xl bg-[#0b132b] border border-white/10 text-xs flex items-center justify-between">
                      <div>
                        <div className="font-bold text-white">{stu?.name || 'Registered Student'}</div>
                        <div className="text-[10px] text-[#ccff00] font-mono">{regNo}</div>
                      </div>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full font-bold">Confirmed</span>
                    </div>
                  );
                })
              )}
            </div>

            <div className="text-right pt-2">
              <button
                onClick={() => setViewParticipantsModal(null)}
                className="neon-btn text-xs px-4 py-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
