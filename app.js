
    
    document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');

    // Show input error message
    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.className = 'form-control error';
        const small = formControl.querySelector('small');
        small.innerText = message;
    }

    function showSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    // Email validation
    function isEmailValid(email) {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(String(email).toLowerCase());
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (username.value.trim() === '') {
            showError(username, 'Username is required');
        } else {
            showSuccess(username);
        }

        if (email.value.trim() === '') {
            showError(email, 'Email is required');
        } else if (!isEmailValid(email.value)) {
            showError(email, 'Email is not valid');
        } else {
            showSuccess(email);
        }

        if (password.value.trim() === '') {
            showError(password, 'Password is required');
        } else {
            showSuccess(password);
        }

        if (password2.value.trim() === '') {
            showError(password2, 'Confirm password is required');
        } else {
            showSuccess(password2);
        }
    });
});
