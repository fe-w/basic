export class BClass extends HTMLElement {
  connectedCallback() {
    this.setAttribute("id", "component-b")
    this.innerHTML = `
      <p>B content</p>
    `;
  }
}