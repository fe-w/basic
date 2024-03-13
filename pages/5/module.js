// [1] ES6 의 module : 최신 브라우저 및 최신 Node.js 환경에서 지원
export function AbtnModule() {
  const content = /*html*/`
    <p>
      A content
    </p>
  `;
  return content;
}

export function BbtnModule() {
  const content = /*html*/`
    <p>
      B content
    </p>
  `;
  return content;
}


// [2] Commonjs의 module : Nodejs 환경에서 사용 -> JS 번들링 도구 필요
// function AbtnModule() {
//   const content = `
//     <p>
//       A content
//     </p>
//   `;
//   return content;
// }

// function BbtnModule() {
//   const content = `
//     <p>
//       B content
//     </p>
//   `;
//   return content;
// }

// module.exports = {
//   AbtnModule,
//   BbtnModule
// }
