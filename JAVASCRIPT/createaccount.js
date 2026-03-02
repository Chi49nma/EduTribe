document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const passwordInput = document.getElementById('password');
    const passwordToggle = document.getElementById('passwordToggle');
    
    // Toggle password visibility
    passwordToggle.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            passwordToggle.innerHTML = '<i class="bi bi-eye-slash"></i>';
        } else {
            passwordInput.type = 'password';
            passwordToggle.innerHTML = '<i class="bi bi-eye"></i>';
        }
    });
    
    // Form validation
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let isValid = true;
        
        // Validate first name
        const firstName = document.getElementById('firstName');
        if (!firstName.value.trim()) {
            firstName.classList.add('is-invalid');
            isValid = false;
        } else {
            firstName.classList.remove('is-invalid');
        }
        
        // Validate last name
        const lastName = document.getElementById('lastName');
        if (!lastName.value.trim()) {
            lastName.classList.add('is-invalid');
            isValid = false;
        } else {
            lastName.classList.remove('is-invalid');
        }
        
        // Validate email
        const email = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailRegex.test(email.value)) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.remove('is-invalid');
        }
        
        // Validate password
        if (passwordInput.value.length < 8) {
            passwordInput.classList.add('is-invalid');
            isValid = false;
        } else {
            passwordInput.classList.remove('is-invalid');
        }
        
        // Validate terms
        const terms = document.getElementById('terms');
        if (!terms.checked) {
            terms.classList.add('is-invalid');
            isValid = false;
        } else {
            terms.classList.remove('is-invalid');
        }
        
        // If form is valid, you can submit it
        if (isValid) {
            // Here you would typically send the data to your server
            alert('Account created successfully! Redirecting to The Main Page...');
            form.reset();
            window.location.href = 'main.html'; // Redirect to login page
        }
    });
    
    // Remove validation on input
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            this.classList.remove('is-invalid');
        });
    });
});