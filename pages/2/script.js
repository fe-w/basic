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
const changeContent = (newContent) => {
  const contentDiv = document.getElementById('main-content');
  contentDiv.innerHTML = newContent;
  console.log('click');
};

document.getElementById('btn1').addEventListener('click', () => changeContent(
  /*html*/`
    <p>A content</p>
  `
));
document.getElementById('btn2').addEventListener('click', () => changeContent(
  /*html*/`
    <p>B content</p>
  `
));
