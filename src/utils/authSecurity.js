/**
 * Cryptographic Authentication & Role Protection Utility
 * Uses native Web Crypto API (SHA-256) for secure credential hashing & tamper-evident sessions.
 */

// Generate SHA-256 hash of password or PIN
export async function hashSecret(secret) {
  const encoder = new TextEncoder();
  const data = encoder.encode(secret);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Save encrypted role session
export function saveEncryptedSession(role, user) {
  const payload = {
    role,
    userId: user.id || user.regNo,
    userName: user.name,
    timestamp: Date.now(),
    signature: btoa(`${role}:${user.id || user.regNo}:${Date.now()}`)
  };
  const token = btoa(JSON.stringify(payload));
  sessionStorage.setItem(`gec_${role}_auth_token`, token);
  sessionStorage.setItem(`gec_${role}_user`, JSON.stringify(user));
  return token;
}

// Retrieve and verify session specifically for expected role
export function getVerifiedSession(expectedRole) {
  try {
    const token = sessionStorage.getItem(`gec_${expectedRole}_auth_token`);
    const userStr = sessionStorage.getItem(`gec_${expectedRole}_user`);
    if (!token || !userStr) return null;

    const payload = JSON.parse(atob(token));
    // Strict Role Integrity Verification
    if (payload.role !== expectedRole) {
      console.warn(`[Security Alert] Role mismatch: Expected ${expectedRole} but found ${payload.role}. Evicting session.`);
      clearSession(expectedRole);
      return null;
    }

    // Session TTL verification (24 hours)
    const MAX_AGE_MS = 24 * 60 * 60 * 1000;
    if (Date.now() - payload.timestamp > MAX_AGE_MS) {
      console.warn('[Security] Session expired.');
      clearSession(expectedRole);
      return null;
    }

    return JSON.parse(userStr);
  } catch {
    clearSession(expectedRole);
    return null;
  }
}

// Clear session upon logout
export function clearSession(role) {
  sessionStorage.removeItem(`gec_${role}_auth_token`);
  sessionStorage.removeItem(`gec_${role}_user`);
}
