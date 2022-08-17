const faqs = document.querySelectorAll('.faqs');

for (let faq of faqs) {
    showHideAnswer(faq);
}

function showHideAnswer(faq) {
    faq.addEventListener('click', function() {
        const question = this.querySelector('.question');
        const answer = this.querySelector('.answer');
        const arrow = this.querySelector('.arrow');
        if (answer.style.display == '' || answer.style.display == 'none') {
            answer.style.display = 'block'
            question.style.fontWeight = 'bold'
            arrow.style.transform = 'rotate(180deg)'
        }
        else {
            answer.style.display = 'none'
            question.style.fontWeight = 'lighter'
            arrow.style.transform = 'rotate(0)'
        }
    })
}