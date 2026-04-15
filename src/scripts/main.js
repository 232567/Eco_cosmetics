'use strict';

const tabs = document.querySelectorAll('.shop__tab');
const items = document.querySelectorAll('.shop__item');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active de todos
    tabs.forEach(t => t.classList.remove('shop__tab--active'));

    // Adiciona active no clicado
    tab.classList.add('shop__tab--active');

    const category = tab.dataset.tab;

    items.forEach(item => {
      if (category === 'all' || item.dataset.category === category) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});


const track = document.querySelector('.shop__track');
const prev = document.querySelector('.shop__arrow--prev');
const next = document.querySelector('.shop__arrow--next');

if (track && prev && next) {
  let offset = 0;
  const step = 300;

  next.addEventListener('click', () => {
    offset -= step;
    track.style.transform = `translateX(${offset}px)`;
  });

  prev.addEventListener('click', () => {
    offset += step;
    track.style.transform = `translateX(${offset}px)`;
  });
}


const form = document.getElementById('contact-form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    alert('Message sent successfully!');
    form.reset();
  });
}
