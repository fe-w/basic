function createCustomElement(text) {
  const element = document.createElement('p');
  const shadow = element.attachShadow({ mode: 'open' });
  const textNode = document.createTextNode(text);

  shadow.appendChild(textNode);

  return element;
}

function updateMainContent(text) {
  const mainContent = document.getElementById('main-content');
  mainContent.innerHTML = '';
  mainContent.appendChild(createCustomElement(text));
}

document.getElementById('add-a').addEventListener('click', function() {
  updateMainContent(`A content`);
});

document.getElementById('add-b').addEventListener('click', function() {
  updateMainContent(`B content`);
});
