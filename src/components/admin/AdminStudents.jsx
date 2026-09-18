import React, { useState } from 'react';
import { Users, Plus, Edit2 } from 'lucide-react';

export default function AdminStudents({ studentsList, onAddStudent }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [name, setName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [dept, setDept] = useState('B.Tech CSE');

  const handleCreateStudent = (e) => {
    e.preventDefault();
    const newStu = {
      id: regNo,
      regNo,
      name,
      email: `${name.toLowerCase().replace(/\s+/g, '')}@gec.ac.in`,
      phone: '+91 98765 99999',
      dept,
      departmentShort: dept.includes('AI/ML') ? 'CSE-AI/ML' : 'CSE',
      semester: 4,
      batch: '2025-2029',
      status: 'Active Student',
      cgpa: 8.50,
      sgpa: [8.5, 8.5, 8.5, 8.5],
      attendanceOverall: 88.5,
      avatar: null,
      hostel: 'CV Raman Hall - Room 101',
      fatherName: 'Parent Name',
      dob: '2005-01-01',
      address: 'Bhubaneswar, Odisha',
      admissionDate: '2025-08-10',
      feeStatus: 'Paid',
      pendingFee: 0,
      attendanceDetails: [
        { code: 'CS401', subject: 'Data Structures & Algorithms', total: 40, attended: 35, faculty: 'Dr. A. K. Nayak' }
      ],
      results: [
        { code: 'CS401', subject: 'Data Structures & Algorithms', credit: 4, grade: 'E', marks: 85 }
      ]
    };

    onAddStudent(newStu);
    setShowAddModal(false);
    setName('');
    setRegNo('');
    alert(`New Student ${name} registered successfully!`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#ccff00] uppercase tracking-wider mb-1">
            <Users className="w-4 h-4" />
            <span>ADMIN STUDENT DATABASE MANAGEMENT</span>
          </div>
          <h2 className="text-2xl font-black text-white">Student Enrolment Roster ({studentsList.length})</h2>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="neon-btn text-xs px-5 py-2.5 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add New Student Record</span>
        </button>
      </div>

      {/* Pre-Loaded 6 Students Table */}
      <div className="glass-card overflow-x-auto border border-white/10">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#0b132b] text-gray-400 text-[11px] uppercase tracking-wider border-b border-white/10">
              <th className="p-3.5 font-bold">Registration No</th>
              <th className="p-3.5 font-bold">Student Name</th>
              <th className="p-3.5 font-bold">Department / Branch</th>
              <th className="p-3.5 font-bold">Semester</th>
              <th className="p-3.5 font-bold">CGPA</th>
              <th className="p-3.5 font-bold">Attendance</th>
              <th className="p-3.5 font-bold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-xs">
            {studentsList.map((stu) => (
              <tr key={stu.id} className="hover:bg-white/5 transition-colors">
                <td className="p-3.5 font-mono font-bold text-[#ccff00]">{stu.regNo}</td>
                <td className="p-3.5 font-bold text-white">
                  <div className="w-8 h-8 rounded-lg bg-[#ccff00]/20 border border-[#ccff00]/40 flex items-center justify-center text-xs font-black text-[#ccff00]">{stu.name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase()}</div>
                  <span>{stu.name}</span>
                </td>
                <td className="p-3.5 text-gray-300 font-semibold">{stu.dept}</td>
                <td className="p-3.5 font-bold text-white">Semester {stu.semester}</td>
                <td className="p-3.5 font-bold text-[#ccff00]">{stu.cgpa}</td>
                <td className="p-3.5 font-bold text-blue-400">{stu.attendanceOverall}%</td>
                <td className="p-3.5">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    {stu.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-card max-w-md w-full p-6 border border-[#ccff00]/40 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Plus className="w-5 h-5 text-[#ccff00]" /> Add New Student Record
            </h3>

            <form onSubmit={handleCreateStudent} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-300 font-bold mb-1">Registration Number</label>
                <input
                  type="text"
                  value={regNo}
                  onChange={(e) => setRegNo(e.target.value)}
                  placeholder="e.g. 2501445999"
                  className="w-full bg-[#0b132b] text-white p-2.5 rounded-xl border border-white/15 font-mono"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 font-bold mb-1">Student Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Student Full Name"
                  className="w-full bg-[#0b132b] text-white p-2.5 rounded-xl border border-white/15"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-300 font-bold mb-1">Department / Branch</label>
                <select
                  value={dept}
                  onChange={(e) => setDept(e.target.value)}
                  className="w-full bg-[#0b132b] text-white p-2.5 rounded-xl border border-white/15"
                >
                  <option value="B.Tech CSE">B.Tech CSE</option>
                  <option value="B.Tech CSE-AI/ML">B.Tech CSE-AI/ML</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button type="submit" className="neon-btn text-xs px-5 py-2.5">
                  Save Student
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
