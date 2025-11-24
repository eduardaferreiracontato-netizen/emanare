// Smooth scroll for in-page links
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const targetId = anchor.getAttribute('href');
    if (targetId.length > 1) {
      const el = document.querySelector(targetId);
      if (el) {
        event.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// FAQ toggle
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');
  if (question) {
    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  }
});
