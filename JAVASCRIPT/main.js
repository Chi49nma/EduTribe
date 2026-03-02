// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const mainContent = document.getElementById('mainContent');
const techCoursesPage = document.getElementById('techCoursesPage');
const nonTechCoursesPage = document.getElementById('nonTechCoursesPage');
const registrationModal = document.getElementById('registrationModal');
const dashboard = document.getElementById('dashboard');
const closeModal = document.getElementById('closeModal');
const courseForm = document.getElementById('courseForm');
const selectedCourseInput = document.getElementById('selectedCourse');
const backToHome = document.getElementById('backToHome');
const backFromTech = document.getElementById('backFromTech');
const backFromNonTech = document.getElementById('backFromNonTech');
const viewCoursesBtns = document.querySelectorAll('.view-courses-btn');
const registerBtns = document.querySelectorAll('.register-btn');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// View Courses Buttons
viewCoursesBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const courseType = e.target.getAttribute('data-course-type');
        
        if (courseType === 'tech') {
            mainContent.style.display = 'none';
            techCoursesPage.style.display = 'block';
            nonTechCoursesPage.style.display = 'none';
            window.scrollTo(0, 0);
        } else if (courseType === 'non-tech') {
            mainContent.style.display = 'none';
            techCoursesPage.style.display = 'none';
            nonTechCoursesPage.style.display = 'block';
            window.scrollTo(0, 0);
        }
    });
});

// Back Buttons
backFromTech.addEventListener('click', (e) => {
    e.preventDefault();
    mainContent.style.display = 'block';
    techCoursesPage.style.display = 'none';
    window.scrollTo(0, 0);
});

backFromNonTech.addEventListener('click', (e) => {
    e.preventDefault();
    mainContent.style.display = 'block';
    nonTechCoursesPage.style.display = 'none';
    window.scrollTo(0, 0);
});

backToHome.addEventListener('click', (e) => {
    e.preventDefault();
    dashboard.style.display = 'none';
    mainContent.style.display = 'block';
    window.scrollTo(0, 0);
});

// Register Buttons
registerBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const courseName = e.target.getAttribute('data-course');
        selectedCourseInput.value = courseName;
        registrationModal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    });
});

// Close Modal
closeModal.addEventListener('click', () => {
    registrationModal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === registrationModal) {
        registrationModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Form Validation and Submission
courseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let isValid = true;
    
    // Validate Full Name
    const fullName = document.getElementById('fullName');
    if (!fullName.value.trim()) {
        showError(fullName, 'Please enter your full name');
        isValid = false;
    } else {
        clearError(fullName);
    }
    
    // Validate Email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        showError(email, 'Please enter a valid email address');
        isValid = false;
    } else {
        clearError(email);
    }
    
    // Validate Phone
    const phone = document.getElementById('phone');
    if (!phone.value.trim()) {
        showError(phone, 'Please enter your phone number');
        isValid = false;
    } else {
        clearError(phone);
    }
    
    if (isValid) {
        // In a real application, you would send the form data to a server here
        // For this example, we'll just show the success dashboard
        
        registrationModal.style.display = 'none';
        mainContent.style.display = 'none';
        techCoursesPage.style.display = 'none';
        nonTechCoursesPage.style.display = 'none';
        dashboard.style.display = 'block';
        document.body.style.overflow = 'auto';
        
        // Reset form
        courseForm.reset();
    }
});

// Tutors carousel functionality
const carousel = document.querySelector('.tutors-carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const tutorCards = document.querySelectorAll('.tutor-card');
const cardWidth = tutorCards[0].offsetWidth + 30; // width + gap

let currentPosition = 0;

nextBtn.addEventListener('click', () => {
    if (currentPosition > -(cardWidth * (tutorCards.length - 3))) {
        currentPosition -= cardWidth;
        carousel.scrollTo({
            left: -currentPosition,
            behavior: 'smooth'
        });
    }
});

prevBtn.addEventListener('click', () => {
    if (currentPosition < 0) {
        currentPosition += cardWidth;
        carousel.scrollTo({
            left: -currentPosition,
            behavior: 'smooth'
        });
    }
});

// Auto-scroll carousel
let autoScrollInterval = setInterval(() => {
    if (currentPosition > -(cardWidth * (tutorCards.length - 3))) {
        currentPosition -= cardWidth;
        carousel.scrollTo({
            left: -currentPosition,
            behavior: 'smooth'
        });
    } else {
        currentPosition = 0;
        carousel.scrollTo({
            left: 0,
            behavior: 'smooth'
        });
    }
}, 5000);

// Helper functions for form validation
function showError(input, message) {
    const formGroup = input.parentElement;
    const errorDiv = formGroup.querySelector('.invalid-feedback');
    input.classList.add('is-invalid');
    errorDiv.textContent = message;
    errorDiv.style.display = 'block';
}

function clearError(input) {
    const formGroup = input.parentElement;
    const errorDiv = formGroup.querySelector('.invalid-feedback');
    input.classList.remove('is-invalid');
    errorDiv.style.display = 'none';
}

{
// Simple tutors carousel functionality
const tutorCards = document.querySelectorAll('.tutor-card');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentTutorIndex = 0;
}

// Initially show only the first tutor
function showTutor(index) {
    tutorCards.forEach((card, i) => {
        card.style.display = i === index ? 'block' : 'none';
    });
}

// Initialize carousel
showTutor(currentTutorIndex);

// Carousel navigation
prevBtn.addEventListener('click', () => {
    currentTutorIndex = (currentTutorIndex - 1 + tutorCards.length) % tutorCards.length;
    showTutor(currentTutorIndex);
});

nextBtn.addEventListener('click', () => {
    currentTutorIndex = (currentTutorIndex + 1) % tutorCards.length;
    showTutor(currentTutorIndex);
});