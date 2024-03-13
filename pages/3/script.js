import { btn1 } from './components/a.js';
import { btn2 } from './components/b.js';

const actionMapping = {
  attributeProperty1: btn1,
  attributeProperty2: btn2,
};

document.querySelectorAll('button[data-action]').forEach(button => {
  button.addEventListener('click', function() {
    const action = this.getAttribute('data-action');
    const contentUpdateFunction = actionMapping[action];
    if (contentUpdateFunction) {
      const newContent = contentUpdateFunction();
      document.getElementById('main-content').innerHTML = newContent;
    }
  });
});
