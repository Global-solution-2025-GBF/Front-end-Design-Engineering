const questions = document.querySelectorAll('.faq-question');

questions.forEach(btn => {
    btn.addEventListener('click', () => {
        const isExpanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', !isExpanded);

        const answer = btn.nextElementSibling;
        if (answer) {
            answer.classList.toggle('active');
            }
        });
    });
const feedbackButtons = document.querySelectorAll('.btn-feedback');

feedbackButtons.forEach(button => {
    button.addEventListener('click', () => {
        const feedback = button.textContent.trim();
        alert(`A equipe BYSW agradece pelo seu feedback!`);
    });
});
