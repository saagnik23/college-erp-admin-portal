import { INITIAL_STUDENTS } from '../data/mockData';

const API_BASE = import.meta.env.VITE_API_URL || '/api';

/**
 * Fetch all students from Supabase backend.
 * Gracefully falls back to INITIAL_STUDENTS if backend or database is offline.
 */
export async function fetchStudents() {
  try {
    const res = await fetch(`${API_BASE}/students`, {
      headers: { 'Accept': 'application/json' }
    });

    if (!res.ok) {
      console.warn(`[StudentService] Backend returned status ${res.status}. Using fallback.`);
      return { success: false, data: INITIAL_STUDENTS, source: 'fallback' };
    }

    const json = await res.json();
    if (json.data && Array.isArray(json.data) && json.data.length > 0) {
      return { success: true, data: json.data, source: json.source || 'supabase' };
    }

    return { success: true, data: INITIAL_STUDENTS, source: 'fallback' };
  } catch (err) {
    console.warn('[StudentService] Cannot connect to backend server. Using local state fallback.', err.message);
    return { success: false, data: INITIAL_STUDENTS, source: 'offline-fallback' };
  }
}

/**
 * Fetch a single student by id or registration number
 */
export async function fetchStudentById(idOrRegNo) {
  try {
    const res = await fetch(`${API_BASE}/students/${encodeURIComponent(idOrRegNo)}`);
    if (!res.ok) return null;
    const json = await res.json();
    return json.data || null;
  } catch (err) {
    console.warn('[StudentService] Failed to fetch student by ID:', err.message);
    return null;
  }
}

/**
 * Create/register a new student record in Supabase
 */
export async function createStudentApi(studentData) {
  try {
    const res = await fetch(`${API_BASE}/students`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(studentData)
    });

    const json = await res.json();
    if (!res.ok) {
      console.warn('[StudentService] Failed to persist student:', json.message);
      return { success: false, message: json.message, data: studentData };
    }

    return { success: true, data: json.data || studentData };
  } catch (err) {
    console.warn('[StudentService] Network error saving student to backend:', err.message);
    return { success: false, message: err.message, data: studentData };
  }
}

/**
 * Update an existing student record in Supabase
 */
export async function updateStudentApi(idOrRegNo, updatedData) {
  try {
    const res = await fetch(`${API_BASE}/students/${encodeURIComponent(idOrRegNo)}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(updatedData)
    });

    const json = await res.json();
    return json;
  } catch (err) {
    console.warn('[StudentService] Network error updating student:', err.message);
    return { success: false, message: err.message };
  }
}

/**
 * Delete a student record from Supabase
 */
export async function deleteStudentApi(idOrRegNo) {
  try {
    const res = await fetch(`${API_BASE}/students/${encodeURIComponent(idOrRegNo)}`, {
      method: 'DELETE'
    });
    return await res.json();
  } catch (err) {
    console.warn('[StudentService] Network error deleting student:', err.message);
    return { success: false, message: err.message };
  }
}

/**
 * Check backend health & Supabase status
 */
export async function checkBackendHealth() {
  try {
    const res = await fetch(`${API_BASE}/health`);
    if (!res.ok) return { status: 'offline', supabase: 'unknown' };
    return await res.json();
  } catch {
    return { status: 'offline', supabase: 'disconnected' };
  }
}
