import { AClass } from './components/a.js';
import { BClass } from './components/b.js';

customElements.define("component-a", AClass);
customElements.define("component-b", BClass);

function handleClick(componentName) {
  document.querySelectorAll('.content, component-a, component-b').forEach(function(el) {
    el.style.display = 'none';
  });

  let selectedComponent = document.querySelector(componentName);
  if (selectedComponent) {
    selectedComponent.style.display = 'block';
  }
}

globalThis.handleClick = handleClick;