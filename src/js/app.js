import Tooltip from './tooltip';

const container = document.querySelector('.container');
const widget = new Tooltip(container);
widget.bindToDOM();
