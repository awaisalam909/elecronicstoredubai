

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
});


function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', () => {
    const togglers = document.querySelectorAll('[data-toggle]');
    
      togglers.forEach((btn) => {
        btn.addEventListener('click', (e) => {
           const selector = e.currentTarget.dataset.toggle
           const block = document.querySelector(`${selector}`);
          if (e.currentTarget.classList.contains('active')) {
            block.style.maxHeight = '';
          } else {
            block.style.maxHeight = block.scrollHeight + 'px';
          }
            
           e.currentTarget.classList.toggle('active')
        })
      })
      })
