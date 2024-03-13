// templates
async function loadTemplates() {
  const response = await fetch('templates.html');
  const text = await response.text();
  document.body.insertAdjacentHTML('beforeend', text);
}

loadTemplates();

// button event
function addContent(templateId, containerId) {
  const mainContent = document.getElementById('main-content');

  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }

  const template = document.getElementById(templateId);
  const clone = template.content.cloneNode(true);

  const container = document.createElement('p');
  container.id = containerId;
  container.appendChild(clone);
  mainContent.appendChild(container);
}

document.getElementById('add-a').addEventListener('click', function() {
  addContent('a-template', 'a-content');
});

document.getElementById('add-b').addEventListener('click', function() {
  addContent('b-template', 'b-content');
});
