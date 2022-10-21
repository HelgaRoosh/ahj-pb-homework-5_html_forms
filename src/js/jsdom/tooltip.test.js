/**
 * @jest-environment jsdom
*/

import Tooltip from '../tooltip';

test('event click', () => {
  const container = document.querySelector('.container');
  const widget = new Tooltip(container);
  widget.bindToDOM();
  const button = document.querySelector('.container_button');
  const tooltip = document.querySelector('.container_popover');
  button.click();
  expect(tooltip.classList.contains('active')).toBeTruthy();
});

test('event double-click', () => {
  const container = document.querySelector('.container');
  const widget = new Tooltip(container);
  widget.bindToDOM();
  const button = document.querySelector('.container_button');
  const tooltip = document.querySelector('.container_popover');
  button.click();
  button.click();
  expect(tooltip.classList.contains('active')).toBeFalsy();
});
