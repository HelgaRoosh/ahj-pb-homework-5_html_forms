/**
 * @jest-environment jsdom
*/

import Tooltip from '../tooltip';

document.documentElement.innerHTML = `
  <div class="container">
        <button class="container_button">
            Click to toggle popover
          </button>
          <div class="container_popover">
            <div class="popover_title">Popover title</div>
            <div class="popover_text">And here's some amazing content. It's very engaging. Right?</div>
          </div>
    </div>`;

test('event click', () => {
  const container = document.querySelector('.container');
  const widget = new Tooltip(container);
  widget.bindToDOM();
  const button = document.querySelector('.container_button');
  const tooltip = document.querySelector('.container_popover');
  button.click();
  expect(tooltip.classList.contains('active')).toBeTruthy();

  button.click();
  expect(tooltip.classList.contains('active')).toBeFalsy();
});
