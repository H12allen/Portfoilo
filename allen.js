/* ==========================
   MOBILE MENU
========================== */

const menuBtn = document.querySelector('.menu-toggle');

const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

/* ==========================
   CLOSE MENU ON LINK CLICK
========================== */

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

/* ==========================
   HEADER SCROLL EFFECT
========================== */

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.style.background = 'rgba(5,5,5,.85)';

    header.style.backdropFilter = 'blur(12px)';
  } else {
    header.style.background = 'transparent';
  }
});

/* ==========================
   SCROLL REVEAL
========================== */

const reveals = document.querySelectorAll(
  '.section, .project-card, .skill-card',
);

const revealOnScroll = () => {
  reveals.forEach(item => {
    const top = item.getBoundingClientRect().top;

    const windowHeight = window.innerHeight;

    if (top < windowHeight - 120) {
      item.style.opacity = '1';

      item.style.transform = 'translateY(0)';
    }
  });
};

reveals.forEach(item => {
  item.style.opacity = '0';

  item.style.transform = 'translateY(40px)';

  item.style.transition = '.8s ease';
});

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();

/* ==========================
   CUSTOM CURSOR
========================== */

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';

  cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .project-card').forEach(item => {
  item.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor-grow');
  });

  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-grow');
  });
});

/* ==========================
   PARALLAX GLOW
========================== */

const glow = document.querySelector('.bg-glow');

document.addEventListener('mousemove', e => {
  const x = e.clientX / window.innerWidth;

  const y = e.clientY / window.innerHeight;

  glow.style.transform = `translate(${x * 40}px,
               ${y * 40}px)`;
});

/* ==========================
   ACTIVE NAVIGATION
========================== */

const sections = document.querySelectorAll('section');

const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';

  sections.forEach(section => {
    const top = section.offsetTop - 200;

    if (scrollY >= top) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach(link => {
    link.classList.remove('active');

    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});
