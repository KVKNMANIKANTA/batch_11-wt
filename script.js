// Handle Sign-Up
function signup(event) {
    event.preventDefault();

    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    // Store user details in localStorage (or use a database in real applications)
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Sign-up successful! You can now log in.");
    toggleSignup();
}

// Handle Login
function login(event) {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Retrieve stored user details from localStorage
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    // Check if the email and password match
    if (email === storedEmail && password === storedPassword) {
        alert("Login successful!");
        showTimetableSection();
    } else {
        alert("Invalid login credentials. Please try again.");
    }
}

// Toggle between login and signup forms
function toggleSignup() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (signupForm.style.display === "none") {
        signupForm.style.display = "block";
        loginForm.style.display = "none";
    } else {
        signupForm.style.display = "none";
        loginForm.style.display = "block";
    }
}

// Show Timetable Section after successful login
function showTimetableSection() {
    document.getElementById("authFormContainer").style.display = "none";
    document.getElementById("authNav").style.display = "block";
    document.getElementById("timetableSection").style.display = "block";
}

// Logout Function
function logout() {
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userPassword");

    document.getElementById("authNav").style.display = "none";
    document.getElementById("timetableSection").style.display = "none";
    document.getElementById("authFormContainer").style.display = "flex";
}

// Timetable Data (Real Data Example)
const timetableData = {
    sections: {
        "Section A": generateTimetable("Math", "Room 1", "Teacher 1"),
        "Section B": generateTimetable("Science", "Room 2", "Teacher 2"),
        "Section C": generateTimetable("English", "Room 3", "Teacher 3"),
        "Section D": generateTimetable("History", "Room 4", "Teacher 4"),
        "Section E": generateTimetable("Geography", "Room 5", "Teacher 5"),
        "Section F": generateTimetable("Biology", "Room 6", "Teacher 6")
    },
    teachers: {
        "Teacher 1": generateTeacherTimetable("Teacher 1", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"]),
        "Teacher 2": generateTeacherTimetable("Teacher 2", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"]),
        "Teacher 3": generateTeacherTimetable("Teacher 3", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"]),
        "Teacher 4": generateTeacherTimetable("Teacher 4", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"]),
        "Teacher 5": generateTeacherTimetable("Teacher 5", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"]),
        "Teacher 6": generateTeacherTimetable("Teacher 6", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"])
    },
    rooms: {
        "Room 1": generateRoomTimetable("Room 1", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"]),
        "Room 2": generateRoomTimetable("Room 2", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"]),
        "Room 3": generateRoomTimetable("Room 3", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"]),
        "Room 4": generateRoomTimetable("Room 4", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"]),
        "Room 5": generateRoomTimetable("Room 5", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"]),
        "Room 6": generateRoomTimetable("Room 6", ["Section A", "Section B", "Section C", "Section D", "Section E", "Section F"])
    }
};

// Function to generate timetable for sections, teachers, or rooms
function generateTimetable(subject, room, teacher) {
    return [
        ["Monday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Tuesday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Wednesday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Thursday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Friday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Saturday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`]
    ];
}

// Function to generate teacher timetable based on sections
function generateTeacherTimetable(teacher, sections) {
    const subject = "Section"; 
    return [
        ["Monday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Tuesday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Wednesday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Thursday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Friday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`],
        ["Saturday", `${subject} (${teacher})`, `${subject} (${teacher})`, "BREAK", `${subject} (${teacher})`, `${subject} (${teacher})`, `${subject} (${teacher})`, "LUNCH", `${subject} (${teacher})`, `${subject} (${teacher})`]
    ];
}

// Function to generate room timetable
function generateRoomTimetable(room, sections) {
    return [
        ["Monday", `Section ${sections[0]}`, `Section ${sections[1]}`, "BREAK", `Section ${sections[2]}`, `Section ${sections[3]}`, `Section ${sections[4]}`, "LUNCH", `Section ${sections[5]}`, `Section ${sections[0]}`],
        ["Tuesday", `Section ${sections[1]}`, `Section ${sections[2]}`, "BREAK", `Section ${sections[3]}`, `Section ${sections[4]}`, `Section ${sections[5]}`, "LUNCH", `Section ${sections[0]}`, `Section ${sections[1]}`],
        ["Wednesday", `Section ${sections[2]}`, `Section ${sections[3]}`, "BREAK", `Section ${sections[4]}`, `Section ${sections[5]}`, `Section ${sections[0]}`, "LUNCH", `Section ${sections[1]}`, `Section ${sections[2]}`],
        ["Thursday", `Section ${sections[3]}`, `Section ${sections[4]}`, "BREAK", `Section ${sections[5]}`, `Section ${sections[0]}`, `Section ${sections[1]}`, "LUNCH", `Section ${sections[2]}`, `Section ${sections[3]}`],
        ["Friday", `Section ${sections[4]}`, `Section ${sections[5]}`, "BREAK", `Section ${sections[0]}`, `Section ${sections[1]}`, `Section ${sections[2]}`, "LUNCH", `Section ${sections[3]}`, `Section ${sections[4]}`],
        ["Saturday", `Section ${sections[5]}`, `Section ${sections[0]}`, "BREAK", `Section ${sections[1]}`, `Section ${sections[2]}`, `Section ${sections[3]}`, "LUNCH", `Section ${sections[4]}`, `Section ${sections[5]}`]
    ];
}

// Function to populate the timetable table for sections
function populateTimetable(sectionName) {
    const timetable = timetableData.sections[sectionName];
    const tableBody = document.getElementById("timetableTableBody");
    tableBody.innerHTML = "";

    timetable.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(cell => {
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}
