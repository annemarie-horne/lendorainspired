const tooltip = document.getElementById('tooltip');

let tooltipTimer = null;
let activeElement = null;

document.querySelectorAll('.tooltip-trigger').forEach(function (element) {

  element.addEventListener('mouseenter', function () {

    activeElement = element;

    tooltipTimer = setTimeout(function () {

      const text = element.getAttribute('data-tooltip');

      if (!text) return;

      tooltip.textContent = text;
      tooltip.hidden = false;

      positionTooltip(element);

      requestAnimationFrame(function () {
        tooltip.classList.add('is-visible');
      });

    }, 1200); // 1.2 second delay

  });

  element.addEventListener('mouseleave', function () {

    clearTimeout(tooltipTimer);

    tooltip.classList.remove('is-visible');

    tooltip.hidden = true;

    activeElement = null;

  });

});


window.addEventListener('resize', function () {
  if (activeElement && !tooltip.hidden) {
    positionTooltip(activeElement);
  }
});

window.addEventListener('scroll', function () {
  if (activeElement && !tooltip.hidden) {
    positionTooltip(activeElement);
  }
}, true);


function positionTooltip(element) {

  const rect = element.getBoundingClientRect();

  const tooltipWidth = tooltip.offsetWidth;
  const tooltipHeight = tooltip.offsetHeight;

  const spacing = 12;

  let top = rect.top - tooltipHeight - spacing;
  let left = rect.left + (rect.width / 2) - (tooltipWidth / 2);

  /* EDGE DETECTION */

  if (left < 8) {
    left = 8;
  }

  if (left + tooltipWidth > window.innerWidth - 8) {
    left = window.innerWidth - tooltipWidth - 8;
  }

  /* IF NOT ENOUGH SPACE ABOVE, SHOW BELOW */

  if (top < 8) {
    top = rect.bottom + spacing;

    tooltip.style.transformOrigin = 'top center';

    tooltip.classList.add('tooltip--bottom');
  } else {
    tooltip.style.transformOrigin = 'bottom center';

    tooltip.classList.remove('tooltip--bottom');
  }

  tooltip.style.top = `${top}px`;
  tooltip.style.left = `${left}px`;
}