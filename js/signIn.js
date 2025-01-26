const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = form.querySelector('#username').value;
    const password = form.querySelector('#password').value;

    if (username && password) {
        alert('Sign in successful');
        // Add your sign in logic here
    } else {
        alert('Please fill in all fields');
    }
});

window.onload = () => {
    setTimeout(() => {
        alert('Welcome to your friendly To-Do');
        form.classList.add('loaded');
    }, 100);
};