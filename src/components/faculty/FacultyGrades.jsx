import React, { useState } from 'react';
import { GraduationCap, Save, CheckCircle2, Award } from 'lucide-react';

export default function FacultyGrades({ studentsList, onUpdateGrade }) {
  const [gradesData, setGradesData] = useState(
    studentsList.reduce((acc, stu) => ({
      ...acc,
      [stu.id]: { marks: stu.results[0]?.marks || 88, grade: stu.results[0]?.grade || 'E' }
    }), {})
  );

  const [savedMsg, setSavedMsg] = useState(false);

  const handleMarksChange = (id, marksVal) => {
    const marks = Number(marksVal);
    let grade = 'O';
    if (marks < 50) grade = 'F';
    else if (marks < 60) grade = 'C';
    else if (marks < 70) grade = 'B';
    else if (marks < 80) grade = 'A';
    else if (marks < 90) grade = 'E';
    else grade = 'O';

    setGradesData((prev) => ({
      ...prev,
      [id]: { marks, grade }
    }));
  };

  const handleSaveGrades = () => {
    setSavedMsg(true);
    setTimeout(() => setSavedMsg(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between pb-4 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
            <GraduationCap className="w-4 h-4" />
            <span>EXAM EVALUATION & GRADE ENTRY</span>
          </div>
          <h2 className="text-2xl font-black text-white">Semester Marksheet Grade Entry</h2>
        </div>

        <button
          onClick={handleSaveGrades}
          className="neon-btn text-xs px-5 py-2.5 flex items-center gap-2"
        >
          <Save className="w-4 h-4" />
          <span>Publish & Update Grades</span>
        </button>
      </div>

      {savedMsg && (
        <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>Semester examination marks published to GEC central evaluation server!</span>
        </div>
      )}

      {/* Grade Entry Table */}
      <div className="glass-card overflow-x-auto border border-white/10">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#0b132b] text-gray-400 text-[11px] uppercase tracking-wider border-b border-white/10">
              <th className="p-3.5 font-bold">Student Name & Reg No</th>
              <th className="p-3.5 font-bold">Department</th>
              <th className="p-3.5 font-bold">Subject Code</th>
              <th className="p-3.5 font-bold">Internal / End-Sem Marks (100)</th>
              <th className="p-3.5 font-bold">Calculated Grade</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-xs">
            {studentsList.map((stu) => {
              const currentG = gradesData[stu.id] || { marks: 85, grade: 'E' };
              return (
                <tr key={stu.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-3.5 font-bold text-white flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#ccff00]/20 border border-[#ccff00]/40 flex items-center justify-center text-xs font-black text-[#ccff00]">{stu.name.split(' ').map(n => n[0]).join('').slice(0,2).toUpperCase()}</div>
                    <div>
                      <div>{stu.name}</div>
                      <span className="text-[10px] text-[#ccff00] font-mono">{stu.regNo}</span>
                    </div>
                  </td>
                  <td className="p-3.5 text-gray-300">{stu.dept}</td>
                  <td className="p-3.5 font-mono text-gray-400">CS401 / AI401</td>
                  <td className="p-3.5">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={currentG.marks}
                      onChange={(e) => handleMarksChange(stu.id, e.target.value)}
                      className="w-24 bg-[#0b132b] text-white font-bold p-2 rounded-xl border border-white/15 focus:outline-none focus:border-[#ccff00]"
                    />
                  </td>
                  <td className="p-3.5">
                    <span className="px-3 py-1 rounded-xl text-xs font-black bg-[#ccff00]/15 text-[#ccff00] border border-[#ccff00]/30">
                      {currentG.grade}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
