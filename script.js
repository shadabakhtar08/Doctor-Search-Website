// Function to search for doctors
function searchDoctors() {
    const selectedLocation = document.getElementById('locationSelect').value.toLowerCase();
    const selectedSpecialization = document.getElementById('specializationSelect').value.toLowerCase();

    const filteredDoctors = doctors.filter(doctor => {
        const matchesLocation = selectedLocation === '' || doctor.location.toLowerCase() === selectedLocation;
        const matchesSpecialization = selectedSpecialization === '' || doctor.specialty.toLowerCase() === selectedSpecialization;
        return matchesLocation && matchesSpecialization;
    });
    displayDoctors(filteredDoctors);
}

const doctors = [
    { name: "Dr. Siddharth Kapoor", specialty: "Cardiologist", location: "Main Building" },
    { name: "Dr. Ananya Singh", specialty: "Dermatologist", location: "Main Building" },
    { name: "Dr. Rohan Patel", specialty: "Pediatrician", location: "North Wing" },
    { name: "Dr. Neha Sharma", specialty: "Psychiatrist", location: "North Wing" },
    { name: "Dr. Kartik Gupta", specialty: "Cardiologist", location: "South Wing" },
    { name: "Dr. Tanisha Patel", specialty: "Dermatologist", location: "South Wing" },
    { name: "Dr. Arjun Sharma", specialty: "Pediatrician", location: "Emergency Department" },
    { name: "Dr. Riya Kapoor", specialty: "Psychiatrist", location: "Emergency Department" },
    { name: "Dr. Yuvraj Patel", specialty: "Cardiologist", location: "Main Building" },
    { name: "Dr. Pooja Singh", specialty: "Dermatologist", location: "Main Building" }
];

// Function to create list items for doctors
function createDoctorListItem(doctor) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `/doctor_profile/${encodeURIComponent(doctor.name)}.html`;
    link.textContent = `${doctor.name} - ${doctor.specialty} - ${doctor.location}`;
    link.style.textDecoration = 'none'; // Remove underline decoration
    listItem.appendChild(link);
    return listItem;
}

// Function to display doctors
function displayDoctors(filteredDoctors) {
    const doctorList = document.getElementById('doctorList');
    doctorList.innerHTML = ''; // Clear previous list items
    filteredDoctors.forEach(doctor => {
        const listItem = createDoctorListItem(doctor);
        doctorList.appendChild(listItem);
    });
}