export default class Tooltip {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  bindToDOM() {
    const button = this.parentEl.querySelector('.container_button');
    button.addEventListener('click', (e) => this.onButton(e));
  }

  onButton(e) {
    e.preventDefault();
    const popover = this.parentEl.querySelector('.container_popover');
    if (popover.classList.contains('active')) {
      popover.classList.remove('active');
    } else {
      popover.classList.add('active');
    }
  }
}
