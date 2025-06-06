
  const planetAxes = document.querySelectorAll('[class$="-axis"]');

  planetAxes.forEach(axis => {
    const duration = getComputedStyle(axis).animationDuration;
    axis.style.animation = `rotate ${duration} ease-in 1`;
    axis.addEventListener('animationend', () => {
      axis.style.animation = `rotate ${duration} linear infinite`;
    });
  });
const starsContainer = document.querySelector('.stars-container');
const numberOfStars = 200;

for (let i = 0; i < numberOfStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  star.style.top = `${Math.random() * 200}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.opacity = Math.random();
  starsContainer.appendChild(star);
}