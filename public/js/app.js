const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const motionIsAllowed = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (motionIsAllowed) {
  const hero = document.querySelector('.hero');
  const heroArt = document.querySelector('.hero-art');

  hero?.addEventListener('pointermove', event => {
    const bounds = hero.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    heroArt?.style.setProperty('--robot-x', `${x * 18}px`);
    heroArt?.style.setProperty('--robot-y', `${y * 12}px`);
    heroArt?.style.setProperty('--glow-x', `${x * 34}px`);
    heroArt?.style.setProperty('--glow-y', `${y * 26}px`);
  });

  hero?.addEventListener('pointerleave', () => {
    heroArt?.style.setProperty('--robot-x', '0px');
    heroArt?.style.setProperty('--robot-y', '0px');
    heroArt?.style.setProperty('--glow-x', '0px');
    heroArt?.style.setProperty('--glow-y', '0px');
  });

  document.querySelectorAll('.class-card, .sponsor-card').forEach(card => {
    card.addEventListener('pointermove', event => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - .5;
      const y = (event.clientY - bounds.top) / bounds.height - .5;
      card.style.setProperty('--tilt-x', `${y * -3}deg`);
      card.style.setProperty('--tilt-y', `${x * 4}deg`);
      card.style.setProperty('--light-x', `${(x + .5) * 100}%`);
      card.style.setProperty('--light-y', `${(y + .5) * 100}%`);
    });
    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
    });
  });
}
