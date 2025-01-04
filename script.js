document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === 'Zelda' && password === 'Link') {
        alert('GG');
    } else {
        // Efface les champs si les informations sont incorrectes
        usernameInput.value = '';
        passwordInput.value = '';
    }
});
