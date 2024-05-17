window.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    document.getElementById('name').innerText = urlParams.get('name');
    document.getElementById('email').innerText = urlParams.get('email');
    document.getElementById('phone').innerText = urlParams.get('phone');
    document.getElementById('gender').innerText = urlParams.get('gender');
    document.getElementById('country').innerText = urlParams.get('country');
    document.getElementById('message').innerText = urlParams.get('message');
});
