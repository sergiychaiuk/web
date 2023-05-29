function togglePasswordVisibility(inputId, icon) {
    const input = document.getElementById(inputId);
    const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
    input.setAttribute('type', type);
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
}

function validatePasswords(event) {
    event.preventDefault();

    const passwordInput = document.getElementById('password-input');
    const confirmPasswordInput = document.getElementById('confirm-password-input');
    const errorMessage = document.getElementById('error-message');

    if (passwordInput.value === confirmPasswordInput.value && passwordInput.value.trim() !== "" && confirmPasswordInput.value.trim() !== "") {
        alert('You are welcome');

        if (errorMessage) errorMessage.remove();
    } else {
        if (errorMessage) {
            errorMessage.textContent = 'Потрібно ввести однакові значення';
            return;
        }

        const newErrorMessage = document.createElement('p');

        newErrorMessage.id = 'error-message';
        newErrorMessage.style.color = 'red';
        newErrorMessage.textContent = 'Потрібно ввести однакові значення';

        confirmPasswordInput.parentNode.appendChild(newErrorMessage);
    }
}