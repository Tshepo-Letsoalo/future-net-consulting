const quickForm = document.getElementById('quick-form');
const successMsg = document.getElementById('form-success-msg');

if (quickForm) {
    quickForm.addEventListener('submit', (e) => {
        // If testing locally without Formspree, uncomment preventDefault and success message display:
        // e.preventDefault();
        // quickForm.reset();
        // if (successMsg) {
        //     successMsg.style.display = 'block';
        // }
    });
}