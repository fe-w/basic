// arrow function (anonymous function) assignment variable
const btn1 = () => {
  const content = /*html */`
    <p>A content</p>
  `;
  updateContent(content);
}

const btn2 = () => {
  const content = /*html */`
    <p>B content</p>
  `;
  updateContent(content);
}

function updateContent(content) {
  document.getElementById('main-content').innerHTML = content;
}
