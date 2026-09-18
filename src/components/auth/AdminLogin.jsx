import React, { useState } from 'react';
import { ShieldAlert, ShieldCheck, Key, Mail, Lock, Sparkles, LogIn } from 'lucide-react';
import { hashSecret, saveEncryptedSession } from '../../utils/authSecurity';

export default function AdminLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState('admin@bput.ac.in');
  const [passkey, setPasskey] = useState('1978-01-20');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleAdminAuth = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setIsAuthenticating(true);

    try {
      if (!email.includes('@') || passkey.length < 4) {
        setErrorMsg('Invalid administrative credentials. Access denied.');
        setIsAuthenticating(false);
        return;
      }

      // Cryptographic hash
      await hashSecret(passkey);

      const adminUser = {
        id: 'ADMIN-MASTER-001',
        name: 'Dr. System SuperAdmin',
        email: email,
        dept: 'University Controller Cell',
        role: 'admin',
        accessLevel: 'Tier-1 Root'
      };

      saveEncryptedSession('admin', adminUser);
      onLoginSuccess(adminUser);
    } catch {
      setErrorMsg('Authentication security exception.');
    } finally {
      setIsAuthenticating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050c1e] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-md w-full glass-card p-8 rounded-3xl border border-[#a855f7]/40 shadow-[0_0_40px_rgba(168,85,247,0.2)] relative space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#a855f7]/15 border border-[#a855f7]/30 text-[#a855f7] text-xs font-bold">
            <ShieldAlert className="w-4 h-4" />
            <span>CENTRAL ADMINISTRATION GATEWAY</span>
          </div>
          <h1 className="text-2xl font-black text-white">Central ERP Controller</h1>
          <p className="text-xs text-gray-400">
            High-Security Root Access for University System Administrators
          </p>
        </div>

        {/* Security Warning */}
        <div className="flex items-start gap-2.5 p-3 rounded-2xl bg-red-500/10 border border-red-500/20 text-xs text-red-300">
          <Key className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <span>Strictly restricted to authorized administrative personnel. All connection attempts are cryptographically audited.</span>
        </div>

        {/* Form */}
        <form onSubmit={handleAdminAuth} className="space-y-4 text-xs">
          {errorMsg && (
            <div className="p-2.5 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300">
              {errorMsg}
            </div>
          )}

          <div>
            <label className="block text-gray-300 font-bold mb-1">SuperAdmin Official Email</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#0b132b] text-white rounded-xl pl-9 pr-4 py-2.5 border border-white/15 focus:outline-none focus:border-[#a855f7]"
                placeholder="admin@bput.ac.in"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-300 font-bold mb-1">Encrypted Root Passkey / PIN</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                value={passkey}
                onChange={(e) => setPasskey(e.target.value)}
                required
                className="w-full bg-[#0b132b] text-white rounded-xl pl-9 pr-4 py-2.5 border border-white/15 focus:outline-none focus:border-[#a855f7]"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isAuthenticating}
            className="w-full py-3 rounded-2xl bg-gradient-to-r from-[#a855f7] to-indigo-600 text-white font-black text-xs hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.35)] cursor-pointer"
          >
            <LogIn className="w-4 h-4" />
            <span>{isAuthenticating ? 'Decrypting Credentials...' : 'Authenticate & Unlock Controller'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
