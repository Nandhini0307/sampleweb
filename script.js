document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('click');
    const message = document.getElementById('message');

    button.addEventListener('click', () => {
        message.textContent = 'Button clicked!';
    });
});
