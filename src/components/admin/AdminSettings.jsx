import React, { useState } from 'react';
import { Settings, Save, CheckCircle2, Shield, Lock, Globe } from 'lucide-react';

export default function AdminSettings({ googleFormUrl, onSaveGoogleFormUrl }) {
  const [formUrl, setFormUrl] = useState(googleFormUrl);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveGoogleFormUrl(formUrl);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div className="pb-4 border-b border-white/10">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
          <Settings className="w-4 h-4" />
          <span>SYSTEM CONFIGURATION & GOOGLE FORM SETTINGS</span>
        </div>
        <h2 className="text-2xl font-black text-white">Admin Portal Global Settings</h2>
      </div>

      <form onSubmit={handleSubmit} className="glass-card p-6 border border-white/15 space-y-6">
        <div className="space-y-3 pb-4 border-b border-white/10">
          <label className="block text-sm font-extrabold text-white">
            1. Complaint / Grievance Google Form URL Setting
          </label>
          <p className="text-xs text-gray-400">
            Field Name: <code className="text-[#ccff00]">GOOGLE_FORM_URL</code>. If configured, embeds in responsive iframe with a new-tab fallback button on student portal. If left empty, student portal displays placeholder: <em>"Complaint form will be available soon."</em>
          </p>
          <input
            type="text"
            value={formUrl}
            onChange={(e) => setFormUrl(e.target.value)}
            placeholder="PASTE_GOOGLE_FORM_URL_HERE"
            className="w-full bg-[#0b132b] text-xs font-mono text-white p-3 rounded-xl border border-white/15 focus:outline-none focus:border-[#ccff00]"
          />
        </div>

        <div className="space-y-3 pb-4 border-b border-white/10">
          <label className="block text-sm font-extrabold text-white">
            2. Campus ERP Theme & Branding
          </label>
          <div className="p-3 bg-[#0b132b] rounded-xl border border-white/10 text-xs text-gray-300 space-y-1">
            <div>Theme Accent: <strong className="text-[#ccff00]">Dark Navy (#0B132B) & Neon Lime Green (#CCFF00)</strong></div>
            <div>Institution: <strong>GEC AUTONOMOUS COLLEGE BHUBANESWAR ERP Platform</strong></div>
          </div>
        </div>

        {savedSuccess && (
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            <span>Settings saved successfully!</span>
          </div>
        )}

        <div className="text-right">
          <button type="submit" className="neon-btn text-xs px-6 py-3">
            <Save className="w-4 h-4" />
            <span>Save Global Configuration</span>
          </button>
        </div>
      </form>
    </div>
  );
}
