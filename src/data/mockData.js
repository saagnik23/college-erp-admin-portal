// Pre-Loaded Student Seed Data and Campus ERP Master State Data

export const INITIAL_STUDENTS = [
  {
    id: "2501445307",
    regNo: "2501445307",
    name: "Tanishka",
    email: "tanishka.cse@gec.edu.in",
    phone: "+91 98765 43210",
    dept: "B.Tech CSE",
    departmentShort: "CSE",
    semester: 4,
    batch: "2025-2029",
    status: "Active Student",
    cgpa: 8.92,
    sgpa: [8.8, 9.0, 8.9, 9.0],
    attendanceOverall: 91.5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    hostel: "Shakuntala Devi - Room 304",
    fatherName: "Rajesh Kumar",
    dob: "2005-04-12",
    address: "Bhubaneswar, Odisha",
    admissionDate: "2025-08-10",
    feeStatus: "Paid",
    pendingFee: 0,
    attendanceDetails: [
      { code: "CS401", subject: "Data Structures & Algorithms", total: 42, attended: 41, faculty: "Dr. A. K. Nayak" },
      { code: "CS402", subject: "Database Management Systems", total: 38, attended: 37, faculty: "Prof. S. Samal" },
      { code: "CS403", subject: "Artificial Intelligence", total: 36, attended: 35, faculty: "Dr. P. Dash" },
      { code: "CS404", subject: "Microprocessor", total: 40, attended: 39, faculty: "Prof. R. Mohanty" },
      { code: "CS405", subject: "Discrete Mathematics", total: 34, attended: 32, faculty: "Dr. M. Mishra" },
      { code: "CS406", subject: "Advanced Java", total: 20, attended: 20, faculty: "Prof. S. Patnaik" }
    ],
    results: [
      { code: "CS401", subject: "Data Structures & Algorithms", credit: 4, grade: "O", marks: 99 },
      { code: "CS402", subject: "Database Management Systems", credit: 4, grade: "O", marks: 96 },
      { code: "CS403", subject: "Artificial intelligence", credit: 3, grade: "O", marks: 94 },
      { code: "CS404", subject: "Microprocessor", credit: 4, grade: "O", marks: 97 },
      { code: "CS405", subject: "Discrete Mathematics", credit: 3, grade: "O", marks: 95 },
      { code: "CS406", subject: "Advanced Java", credit: 2, grade: "O", marks: 100 }
    ]
  },
  {
    id: "2501445597",
    regNo: "2501445597",
    name: "Rishika Tiwary",
    email: "rishika.aiml@gec.edu.in",
    phone: "+91 98765 43211",
    dept: "B.Tech CSE-AI/ML",
    departmentShort: "CSE-AI/ML",
    semester: 4,
    batch: "2025-2029",
    status: "Active Student",
    cgpa: 9.45,
    sgpa: [9.3, 9.5, 9.4, 9.6],
    attendanceOverall: 94.8,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    hostel: "Shakuntala Devi Hostel - Room 208",
    fatherName: "Sunil Tiwary",
    dob: "2005-07-22",
    address: "Cuttack, Odisha",
    admissionDate: "2025-08-11",
    feeStatus: "Paid",
    pendingFee: 0,
    attendanceDetails: [
      { code: "CS401", subject: "Data Structures & Algorithms", total: 42, attended: 41, faculty: "Dr. A. K. Nayak" },
      { code: "CS402", subject: "Database Management Systems", total: 38, attended: 37, faculty: "Prof. S. Samal" },
      { code: "CS403", subject: "Artificial Intelligence", total: 36, attended: 35, faculty: "Dr. P. Dash" },
      { code: "CS404", subject: "Microprocessor", total: 40, attended: 39, faculty: "Prof. R. Mohanty" },
      { code: "CS405", subject: "Discrete Mathematics", total: 34, attended: 32, faculty: "Dr. M. Mishra" },
      { code: "CS406", subject: "Advanced Java", total: 20, attended: 20, faculty: "Prof. S. Patnaik" }
    ],
    results: [
      { code: "CS401", subject: "Data Structures & Algorithms", credit: 4, grade: "O", marks: 99 },
      { code: "CS402", subject: "Database Management Systems", credit: 4, grade: "O", marks: 96 },
      { code: "CS403", subject: "Artificial intelligence", credit: 3, grade: "O", marks: 94 },
      { code: "CS404", subject: "Microprocessor", credit: 4, grade: "O", marks: 97 },
      { code: "CS405", subject: "Discrete Mathematics", credit: 3, grade: "O", marks: 95 },
      { code: "CS406", subject: "Advanced Java", credit: 2, grade: "O", marks: 100 }
    ]
  },
  {
    id: "2501445457",
    regNo: "2501445457",
    name: "Arpit Mohapatra",
    email: "arpit.aiml@gec.edu.in",
    phone: "+91 98765 43212",
    dept: "B.Tech CSE-AI/ML",
    departmentShort: "CSE-AI/ML",
    semester: 4,
    batch: "2025-2029",
    status: "Active Student",
    cgpa: 8.65,
    sgpa: [8.4, 8.6, 8.7, 8.9],
    attendanceOverall: 84.2,
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80",
    hostel: "Ramanujan Hostel - Room 214",
    fatherName: "Sanjay Kumar Mohapatra",
    dob: "2007-04-20",
    address: "Rourkela, Odisha",
    admissionDate: "2025-08-12",
    feeStatus: "Paid",
    pendingFee: 0,
    attendanceDetails: [
      { code: "CS401", subject: "Data Structures & Algorithms", total: 42, attended: 41, faculty: "Dr. A. K. Nayak" },
      { code: "CS402", subject: "Database Management Systems", total: 38, attended: 37, faculty: "Prof. S. Samal" },
      { code: "CS403", subject: "Artificial Intelligence", total: 36, attended: 35, faculty: "Dr. P. Dash" },
      { code: "CS404", subject: "Microprocessor", total: 40, attended: 39, faculty: "Prof. R. Mohanty" },
      { code: "CS405", subject: "Discrete Mathematics", total: 34, attended: 32, faculty: "Dr. M. Mishra" },
      { code: "CS406", subject: "Advanced Java", total: 20, attended: 20, faculty: "Prof. S. Patnaik" }
    ],
    results: [
      { code: "CS401", subject: "Data Structures & Algorithms", credit: 4, grade: "O", marks: 99 },
      { code: "CS402", subject: "Database Management Systems", credit: 4, grade: "O", marks: 96 },
      { code: "CS403", subject: "Artificial intelligence", credit: 3, grade: "O", marks: 94 },
      { code: "CS404", subject: "Microprocessor", credit: 4, grade: "O", marks: 97 },
      { code: "CS405", subject: "Discrete Mathematics", credit: 3, grade: "O", marks: 95 },
      { code: "CS406", subject: "Advanced Java", credit: 2, grade: "O", marks: 100 }
    ]
  },
  {
    id: "2501445229",
    regNo: "2501445229",
    name: "Satya Sundar Nayak",
    email: "satya.cse@gec.edu.in",
    phone: "+91 98765 43213",
    dept: "B.Tech CSE",
    departmentShort: "CSE",
    semester: 4,
    batch: "2025-2029",
    status: "Active Student",
    cgpa: 9.68,
    sgpa: [9.6, 9.7, 9.6, 9.8],
    attendanceOverall: 96.5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    hostel: "Ramanujan Hostel - Room 314",
    fatherName: "Prabhakar Nayak",
    dob: "2005-11-15",
    address: "Jajapur, Odisha",
    admissionDate: "2025-08-08",
    feeStatus: "Paid",
    pendingFee: 0,
    attendanceDetails: [
      { code: "CS401", subject: "Data Structures & Algorithms", total: 42, attended: 41, faculty: "Dr. A. K. Nayak" },
      { code: "CS402", subject: "Database Management Systems", total: 38, attended: 37, faculty: "Prof. S. Samal" },
      { code: "CS403", subject: "Artificial Intelligence", total: 36, attended: 35, faculty: "Dr. P. Dash" },
      { code: "CS404", subject: "Microprocessor", total: 40, attended: 39, faculty: "Prof. R. Mohanty" },
      { code: "CS405", subject: "Discrete Mathematics", total: 34, attended: 32, faculty: "Dr. M. Mishra" },
      { code: "CS406", subject: "Advanced Java", total: 20, attended: 20, faculty: "Prof. S. Patnaik" }
    ],
    results: [
      { code: "CS401", subject: "Data Structures & Algorithms", credit: 4, grade: "O", marks: 99 },
      { code: "CS402", subject: "Database Management Systems", credit: 4, grade: "O", marks: 96 },
      { code: "CS403", subject: "Artificial intelligence", credit: 3, grade: "O", marks: 94 },
      { code: "CS404", subject: "Microprocessor", credit: 4, grade: "O", marks: 97 },
      { code: "CS405", subject: "Discrete Mathematics", credit: 3, grade: "O", marks: 95 },
      { code: "CS406", subject: "Advanced Java", credit: 2, grade: "O", marks: 100 }
    ]
  },
  {
    id: "2501445506",
    regNo: "2501445506",
    name: "Divyam Prasad",
    email: "divyam.aiml@gec.edu.in",
    phone: "+91 98765 43214",
    dept: "B.Tech CSE-AI/ML",
    departmentShort: "CSE-AI/ML",
    semester: 4,
    batch: "2025-2029",
    status: "Active Student",
    cgpa: 8.85,
    sgpa: [8.7, 8.8, 8.9, 9.0],
    attendanceOverall: 88.0,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    hostel: "APJ Abdul Kalam Hall - Room 310",
    fatherName: "Santosh Prasad",
    dob: "2005-09-05",
    address: "Sambalpur, Odisha",
    admissionDate: "2025-08-14",
    feeStatus: "Paid",
    pendingFee: 0,
    attendanceDetails: [
      { code: "CS401", subject: "Data Structures & Algorithms", total: 42, attended: 41, faculty: "Dr. A. K. Nayak" },
      { code: "CS402", subject: "Database Management Systems", total: 38, attended: 37, faculty: "Prof. S. Samal" },
      { code: "CS403", subject: "Artificial Intelligence", total: 36, attended: 35, faculty: "Dr. P. Dash" },
      { code: "CS404", subject: "Microprocessor", total: 40, attended: 39, faculty: "Prof. R. Mohanty" },
      { code: "CS405", subject: "Discrete Mathematics", total: 34, attended: 32, faculty: "Dr. M. Mishra" },
      { code: "CS406", subject: "Advanced Java", total: 20, attended: 20, faculty: "Prof. S. Patnaik" }
    ],
    results: [
      { code: "CS401", subject: "Data Structures & Algorithms", credit: 4, grade: "O", marks: 99 },
      { code: "CS402", subject: "Database Management Systems", credit: 4, grade: "O", marks: 96 },
      { code: "CS403", subject: "Artificial intelligence", credit: 3, grade: "O", marks: 94 },
      { code: "CS404", subject: "Microprocessor", credit: 4, grade: "O", marks: 97 },
      { code: "CS405", subject: "Discrete Mathematics", credit: 3, grade: "O", marks: 95 },
      { code: "CS406", subject: "Advanced Java", credit: 2, grade: "O", marks: 100 }
    ]
  },
  {
    id: "2501445005",
    regNo: "2501445005",
    name: "Abhinandan Kumar Kushwaha",
    email: "abhinandan.cse@gec.edu.in",
    phone: "+91 98765 43215",
    dept: "B.Tech CSE",
    departmentShort: "CSE",
    semester: 4,
    batch: "2025-2029",
    status: "Active Student",
    cgpa: 9.15,
    sgpa: [9.0, 9.1, 9.2, 9.3],
    attendanceOverall: 92.4,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
    hostel: "CV Raman Hall - Room 202",
    fatherName: "Rameshwar Kushwaha",
    dob: "2005-03-18",
    address: "Brahmapur, Odisha",
    admissionDate: "2025-08-09",
    feeStatus: "Paid",
    pendingFee: 0,
    attendanceDetails: [
      { code: "CS401", subject: "Data Structures & Algorithms", total: 42, attended: 41, faculty: "Dr. A. K. Nayak" },
      { code: "CS402", subject: "Database Management Systems", total: 38, attended: 37, faculty: "Prof. S. Samal" },
      { code: "CS403", subject: "Artificial Intelligence", total: 36, attended: 35, faculty: "Dr. P. Dash" },
      { code: "CS404", subject: "Microprocessor", total: 40, attended: 39, faculty: "Prof. R. Mohanty" },
      { code: "CS405", subject: "Discrete Mathematics", total: 34, attended: 32, faculty: "Dr. M. Mishra" },
      { code: "CS406", subject: "Advanced Java", total: 20, attended: 20, faculty: "Prof. S. Patnaik" }
    ],
    results: [
      { code: "CS401", subject: "Data Structures & Algorithms", credit: 4, grade: "O", marks: 99 },
      { code: "CS402", subject: "Database Management Systems", credit: 4, grade: "O", marks: 96 },
      { code: "CS403", subject: "Artificial intelligence", credit: 3, grade: "O", marks: 94 },
      { code: "CS404", subject: "Microprocessor", credit: 4, grade: "O", marks: 97 },
      { code: "CS405", subject: "Discrete Mathematics", credit: 3, grade: "O", marks: 95 },
      { code: "CS406", subject: "Advanced Java", credit: 2, grade: "O", marks: 100 }
    ]
  }
];

export const INITIAL_FACULTY = [
  {
    id: "FAC-101",
    name: "Dr. Anshuman Pattnaik",
    dept: "Computer Science & Engineering",
    designation: "Professor & Head of Department",
    email: "anshuman.pattnaik@prof.gec.edu.in",
    coursesAssigned: ["Advanced Java", "Advanced Java Lab"],

  },
  {
    id: "FAC-102",
    name: "Dr. Himanshu Bhusan Mohapatra",
    dept: "Electronics and communication Engineer(ECE)",
    designation: "Senior Professor",
    email: "himanshu.mohapatra@prof.gec.edu.in",
    coursesAssigned: ["Artificial Intelligence",],

  },
  {
    id: "FAC-103",
    name: "Prof. Durgashankar Baggam",
    dept: "Computer Science & Engineering",
    designation: "Senior Professor",
    email: "durgashankar.baggam@prof.gec.edu.in",
    coursesAssigned: ["Design and analysis of algorithm", "DAA Lab"],

  },
  {
    id: "FAC-104",
    name: "Prof. Raj Kothiyal",
    dept: "B.Tech CSE-AI/ML",
    designation: "Senior Professor",
    email: "raj.kothiyal@prof.gec.edu.in",
    coursesAssigned: ["Database and MAnagement System", "DBMS Lab"],
  },
  {
    id: "FAC-105",
    name: "Prof. Sashi bhusan Das",
    dept: "B.Tech CSE-AI/ML",
    designation: "Professor",
    email: "sashi.das@prof.gec.edu.in",
    coursesAssigned: ["Discrete Maths"],


  },
  {
    id: "FAC-106",
    name: "Prof. Jyotirajan Sahoo",
    dept: "B.Tech CSE-AI/ML",
    designation: "Senior Professor",
    email: "jyotirajan.sahoo@prof.gec.edu.in",
    coursesAssigned: ["Microprocessor", "Microprocessor Lab"]

  }

];

export const INITIAL_EVENTS = [
  {
    id: "EVT-106",
    title: "BPUT HACKATHON 2K26",
    category: "HACKATHON",
    date: "2026-10-12",
    time: "10:00 AM - 05:00 PM",
    venue: "Central Library Exhibition Hall",
    organizer: "BPUT ROURKELA",
    clubDepartment: "Dean Academics",
    registrationDeadline: "2026-10-25",
    status: "Published",
    featured: false,
    banner: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    description: "Exhibition of student patents, research papers published in IEEE/Springer, and prototype hardware demos funded by Govt of Odisha.",
    externalLink: "",
    participants: ["2501445597", "2501445229"]
  },
  {
    id: "EVT-101",
    title: "SIH 2026 - SMART INDIA HACKATHON",
    category: "Hackathons",
    date: "2026-10-15",
    time: "09:00 AM - 06:00 PM",
    venue: "Main Campus Auditorium",
    organizer: "",
    clubDepartment: "B.Tech CSE-AI/ML Department",
    registrationDeadline: "2026-10-10",
    status: "Published",
    featured: true,
    banner: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    description: "48-hour continuous national hackathon focused on building generative AI solutions for healthcare, smart campus automation, and sustainable energy.",
    externalLink: "https://technovate2026.bput.ac.in",
    participants: ["2501445307", "2501445597", "2501445229"]
  },
  {
    id: "EVT-102",
    title: "SRIJANA 2026 - Grand Annual Cultural Festival",
    category: "Cultural Events",
    date: "2026-11-02",
    time: "05:00 PM - 10:30 PM",
    venue: "Open Air Amphitheatre",
    organizer: "Student Activity Center (SAC)",
    clubDepartment: "Cultural Board",
    registrationDeadline: "2026-10-28",
    status: "Published",
    featured: true,
    banner: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    description: "The flagship annual cultural extravaganza featuring live celebrity musical performances, battle of the bands, fashion show, and classical dance competitions.",
    externalLink: "",
    participants: ["2501445457", "2501445506", "2501445005", "2501445307"]
  },
  {
    id: "EVT-103",
    title: "ANNUAL SPORTS MEET",
    category: "Sports",
    date: "2026-11-12",
    time: "07:00 AM - 05:00 PM",
    venue: "University Sports Complex",
    organizer: "Department of Physical Education",
    clubDepartment: "Sports Council",
    registrationDeadline: "2026-10-24",
    status: "Published",
    featured: true,
    banner: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
    description: "Cricket, Football, Basketball, Volleyball, Track & Field events across all engineering departments. Trophy ceremony presided by Hon'ble Vice Chancellor.",
    externalLink: "",
    participants: ["2501445229", "2501445005"]
  },
  {
    id: "EVT-104",
    title: "Hands-on Workshop: Enterprise Cloud & Kubernetes",
    category: "Workshops",
    date: "2026-10-05",
    time: "10:00 AM - 04:00 PM",
    venue: "Seminar Hall 2 & Cloud Computing Lab",
    organizer: "ACM Student Chapter",
    clubDepartment: "Department of Computer Science",
    registrationDeadline: "2026-10-02",
    status: "Published",
    featured: false,
    banner: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    description: "Industry experts from AWS & RedHat demonstrate containerized microservice deployments, CI/CD pipelines, and Kubernetes pod auto-scaling.",
    externalLink: "",
    participants: ["2501445307", "2501445597", "2501445457", "2501445506"]
  },
  {
    id: "EVT-105",
    title: "Global Tech Placement Drive & Leadership Seminar",
    category: "Placement Events",
    date: "2026-10-20",
    time: "09:30 AM - 03:30 PM",
    venue: "University Convention Center",
    organizer: "Training & Placement Cell (T&P)",
    clubDepartment: "Career Development Cell",
    registrationDeadline: "2026-10-18",
    status: "Published",
    featured: false,
    banner: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    description: "Keynote talks from Google, Microsoft, and TCS Tech Leaders followed by resume screening and mock interview drill for 3rd and 4th year B.Tech students.",
    externalLink: "",
    participants: ["2501445307", "2501445597", "2501445457", "2501445229", "2501445506", "2501445005"]
  },
  {
    id: "EVT-106",
    title: "BPUT Autumn Research & Innovation Expo 2026",
    category: "Seminars",
    date: "2026-11-12",
    time: "10:00 AM - 05:00 PM",
    venue: "Central Library Exhibition Hall",
    organizer: "Research & Development Cell",
    clubDepartment: "Dean Academics",
    registrationDeadline: "2026-11-08",
    status: "Published",
    featured: false,
    banner: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    description: "Exhibition of student patents, research papers published in IEEE/Springer, and prototype hardware demos funded by Govt of Odisha.",
    externalLink: "",
    participants: ["2501445597", "2501445229"]
  }
];

export const INITIAL_ACADEMIC_CALENDAR = [
  { id: "CAL-101", date: "2026-09-01", title: "Commencement of Autumn Semester Classes", category: "Academic", description: "Classes begin for 3rd, 5th, 7th Semesters." },
  { id: "CAL-102", date: "2026-09-15", title: "Registration Deadline for Specialization Electives", category: "Deadline", description: "Last day to submit elective preference forms." },
  { id: "CAL-103", date: "2026-09-28", title: "Inter-Department Sports Meet Day 1", category: "Event", description: "Annual sports activities." },
  { id: "CAL-104", date: "2026-10-02", title: "Gandhi Jayanti & Shastri Jayanti Holiday", category: "Holiday", description: "Official National Holiday." },
  { id: "CAL-105", date: "2026-10-12", title: "Mid-Semester Examinations Commence", category: "Exams", description: "Theory exam slot 10:00 AM to 01:00 PM." },
  { id: "CAL-106", date: "2026-10-18", title: "Mid-Semester Examinations Conclude", category: "Exams", description: "All mid-term papers finished." },
  { id: "CAL-107", date: "2026-10-24", title: "Durga Puja & Vijayadashami Vacation", category: "Vacation", description: "Autumn Break for students & faculty." },
  { id: "CAL-108", date: "2026-11-02", title: "Spandan 2026 Cultural Fest", category: "Event", description: "Annual fest event." },
  { id: "CAL-109", date: "2026-11-15", title: "Mid-Semester Result Publication & Parent-Teacher Meeting", category: "Academic", description: "Marks uploaded to ERP portal." },
  { id: "CAL-110", date: "2026-12-01", title: "End-Semester Practical & Viva Examinations", category: "Exams", description: "Internal and External lab evaluations." },
  { id: "CAL-111", date: "2026-12-15", title: "End-Semester BPUT Theory Examinations", category: "Exams", description: "University level theory paper evaluation." },
  { id: "CAL-112", date: "2026-12-25", title: "Christmas & Winter Vacation", category: "Vacation", description: "Winter Break until January 04, 2027." }
];

export const INITIAL_COMPLAINTS = [
  {
    id: "GRV-1001",
    ticketNo: "GRV-2026-0881",
    studentRegNo: "2501445307",
    studentName: "Tanishka",
    category: "Internet",
    title: "High latency and frequent disconnection in Kalpana Chawla Hall WiFi",
    description: "The WiFi access point on 3rd floor Block B drops connection every 15 minutes during peak evening hours (8 PM - 11 PM).",
    priority: "High",
    status: "In-Progress",
    date: "2026-09-10",
    updatedDate: "2026-09-12",
    assignedTo: "Network Infrastructure Cell",
    resolutionNotes: "Router replacement scheduled by Campus IT team on Sept 16."
  },
  {
    id: "GRV-1002",
    ticketNo: "GRV-2026-0882",
    studentRegNo: "2501445597",
    studentName: "Rishika Tiwary",
    category: "Academic",
    title: "Lab 4 Workstation GPU Driver Update Required for PyTorch",
    description: "System workstations in AI Lab 4 are running outdated CUDA drivers, causing errors during deep learning model execution.",
    priority: "Medium",
    status: "Resolved",
    date: "2026-09-08",
    updatedDate: "2026-09-09",
    assignedTo: "CSE Lab Assistant",
    resolutionNotes: "NVIDIA CUDA 12.4 drivers installed on all 40 systems in Lab 4."
  },
  {
    id: "GRV-1003",
    ticketNo: "GRV-2026-0883",
    studentRegNo: "2501445457",
    studentName: "Arpit Mohapatra",
    category: "Mess",
    title: "Improvement of Dinner menu quality & drinking water dispenser filter",
    description: "Water purifier filter status indicator on APJ Hall Ground Floor Mess is displaying red warning light.",
    priority: "High",
    status: "Pending",
    date: "2026-09-14",
    updatedDate: "2026-09-14",
    assignedTo: "Hostel & Mess Committee",
    resolutionNotes: "Pending inspection."
  },
  {
    id: "GRV-1004",
    ticketNo: "GRV-2026-0884",
    studentRegNo: "2501445229",
    studentName: "Satya Sundar Nayak",
    category: "Examination",
    title: "Correction in Sem 3 Marksheet Subject Name spelling",
    description: "Subject code CS304 name reads 'Operatng Systems' instead of 'Operating Systems' in digital marksheet.",
    priority: "Low",
    status: "Resolved",
    date: "2026-09-02",
    updatedDate: "2026-09-05",
    assignedTo: "Controller of Examinations",
    resolutionNotes: "Database spelling updated and re-issued revised transcript."
  }
];

export const INITIAL_GATE_PASSES = [
  {
    id: "GP-901",
    studentRegNo: "2501445307",
    studentName: "Tanishka",
    passType: "Day Out-Pass",
    reason: "Book collection from Central Market & Doctor Appointment",
    outTime: "2026-09-16 04:00 PM",
    inTime: "2026-09-16 08:30 PM",
    status: "Approved",
    approvedBy: "Chief Hostel Warden",
    qrCode: "GP-TANISHKA-2501445307-APPROVED"
  },
  {
    id: "GP-902",
    studentRegNo: "2501445457",
    studentName: "Arpit Mohapatra",
    passType: "Weekend Leave Pass",
    reason: "Visiting hometown Rourkela for family function",
    outTime: "2026-09-19 09:00 AM",
    inTime: "2026-09-21 07:00 PM",
    status: "Pending",
    approvedBy: "Warden Office",
    qrCode: "GP-ARPIT-2501445457-PENDING"
  }
];

export const TIMETABLE_SLOTS = [
  {
    day: "Monday", slots: [
      { time: "09:00 - 10:00 AM", subject: "Data Structures & Algorithms", code: "CS401", room: "LT-101", faculty: "Dr. A. K. Nayak" },
      { time: "10:00 - 11:00 AM", subject: "Database Management Systems", code: "CS402", room: "LT-101", faculty: "Prof. S. Samal" },
      { time: "11:15 - 12:15 PM", subject: "Computer Organization & Arch", code: "CS403", room: "LT-102", faculty: "Dr. P. Dash" },
      { time: "01:15 - 03:15 PM", subject: "Software Engineering Lab", code: "CS406", room: "Lab-2", faculty: "Prof. S. Patnaik" }
    ]
  },
  {
    day: "Tuesday", slots: [
      { time: "09:00 - 10:00 AM", subject: "Operating Systems", code: "CS404", room: "LT-101", faculty: "Prof. R. Mohanty" },
      { time: "10:00 - 11:00 AM", subject: "Discrete Mathematics", code: "CS405", room: "LT-103", faculty: "Dr. M. Mishra" },
      { time: "11:15 - 12:15 PM", subject: "Intro to Artificial Intelligence", code: "AI401", room: "LT-201", faculty: "Dr. S. K. Swain" },
      { time: "01:15 - 04:15 PM", subject: "Python Data Science Lab / OS Lab", code: "AI403", room: "Lab-4", faculty: "Prof. T. Sahoo" }
    ]
  },
  {
    day: "Wednesday", slots: [
      { time: "09:00 - 10:00 AM", subject: "Machine Learning Fundamentals", code: "AI402", room: "LT-201", faculty: "Dr. B. P. Panda" },
      { time: "10:00 - 11:00 AM", subject: "Data Structures & Algorithms", code: "CS401", room: "LT-101", faculty: "Dr. A. K. Nayak" },
      { time: "11:15 - 12:15 PM", subject: "Operating Systems", code: "CS404", room: "LT-101", faculty: "Prof. R. Mohanty" },
      { time: "02:00 - 04:00 PM", subject: "Library & Self Research", code: "LIB40", room: "Central Lib", faculty: "Library Staff" }
    ]
  },
  {
    day: "Thursday", slots: [
      { time: "09:00 - 10:00 AM", subject: "Database Management Systems", code: "CS402", room: "LT-101", faculty: "Prof. S. Samal" },
      { time: "10:00 - 11:00 AM", subject: "Discrete Mathematics", code: "CS405", room: "LT-103", faculty: "Dr. M. Mishra" },
      { time: "11:15 - 12:15 PM", subject: "Machine Learning Fundamentals", code: "AI402", room: "LT-201", faculty: "Dr. B. P. Panda" },
      { time: "01:15 - 03:15 PM", subject: "DBMS SQL Lab", code: "CS407", room: "Lab-1", faculty: "Prof. S. Samal" }
    ]
  },
  {
    day: "Friday", slots: [
      { time: "09:00 - 10:00 AM", subject: "Computer Organization & Arch", code: "CS403", room: "LT-102", faculty: "Dr. P. Dash" },
      { time: "10:00 - 11:00 AM", subject: "Intro to Artificial Intelligence", code: "AI401", room: "LT-201", faculty: "Dr. S. K. Swain" },
      { time: "11:15 - 12:15 PM", subject: "Probability & Statistics", code: "MA401", room: "LT-104", faculty: "Dr. N. Tripathy" },
      { time: "02:00 - 04:00 PM", subject: "Club Activities & Mentorship", code: "ACT40", room: "Auditorium", faculty: "Mentors" }
    ]
  }
];

export const NOTICE_ITEMS = [
  { id: "N-1", date: "2026-09-14", title: "Submission of Autumn 2026 Exam Registration Form", category: "Exams", urgent: true },
  { id: "N-2", date: "2026-09-12", title: "Fee Clearance Clearance Notice for 4th Semester Students", category: "Fees", urgent: false },
  { id: "N-3", date: "2026-09-10", title: "Hostel Room Cleaning & Inspection Schedule", category: "Hostel", urgent: false },
  { id: "N-4", date: "2026-09-08", title: "Call for Papers: BPUT National Tech Symposium", category: "Events", urgent: false }
];
