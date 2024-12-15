function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('mobile');
    nav.classList.toggle('show');
}
function sendNotification(event) {
    event.preventDefault(); // Prevent the form from actually submitting
    alert("Message Sent!");
}
