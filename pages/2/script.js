// 1
// document.getElementById("btn1").addEventListener("click", function() {
//   document.getElementById("main-content").innerHTML = `
//     <p>A contents</p>
//   `;
// });

// document.getElementById("btn2").addEventListener("click", function() {
//   document.getElementById("main-content").innerHTML = `
//     <p>B contents</p>
//   `;
// });


// 2
const a = 'A';
const b = 'B';
const changeContent = (newContent) => {
  const contentDiv = document.getElementById('main-content');
  contentDiv.innerHTML = newContent;
  console.log('click');
};

document.getElementById('btn1').addEventListener('click', () => changeContent(
  /*html*/`
    <p>${a} content</p>
  `
));
document.getElementById('btn2').addEventListener('click', () => changeContent(
  /*html*/`
    <p>${b} content</p>
  `
));
