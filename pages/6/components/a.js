export class AClass extends HTMLElement {
  connectedCallback() {
    this.setAttribute("id", "component-a");
    this.innerHTML = `
      <p>A content</p>
    `;
  }
}