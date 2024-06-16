document.getElementById('contactForm').addEventListener('submit', function(event) {
    let isValid = true;

    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function(errorMessage) {
        errorMessage.remove();
    });


    const name = document.getElementById('name');
    if (name.value.trim() === '') {
        isValid = false;
        name.classList.add('error');
        showError(name, 'Name is required');
    } else {
        name.classList.remove('error');
    }


    const email = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value.trim())) {
        isValid = false;
        email.classList.add('error');
        showError(email, 'Valid email is required');
    } else {
        email.classList.remove('error');
    }

    const subject = document.getElementById('subject');
    if (subject.value.trim() === '') {
        isValid = false;
        subject.classList.add('error');
        showError(subject, 'Subject is required');
    } else {
        subject.classList.remove('error');
    }

    const message = document.getElementById('message');
    if (message.value.trim() === '') {
        isValid = false;
        message.classList.add('error');
        showError(message, 'Message is required');
    } else {
        message.classList.remove('error');
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function showError(element, message) {
    const errorMessage = document.createElement('div');
    errorMessage.classList.add('error-message');
    errorMessage.innerText = message;
    element.parentElement.appendChild(errorMessage);
}
