import { updateLinkHref, highlightActiveLink } from './path.js';

class Menu extends HTMLElement {
  constructor() {
    super();
    this.originalHrefs = [];
  }

  connectedCallback() {
    const parent = this.parentElement;
    const newContent = this.buildContent();
    parent.replaceChild(newContent, this);
    this.initializeLinks(newContent);
    this.addEventListeners(newContent);
  }

  buildContent() {
    const newContent = document.createElement('nav');
    newContent.innerHTML = `
      <div>
        <h1>Dynamic Browser Development with HTML and JavaScript</h1>
        <p>HTML과 JavaScript를 사용하여 동적 브라우저 기능 구현</p>
      </div>
      <ul class="main-card">
        <li><a href="../index.html">Description</a></li>
        <li><a href="../pages/1/index.html">link page</a></li>
        <li><a href="../pages/2/index.html">button_id<br/>addEventListener</a></li>
        <li><a href="../pages/3/index.html">custom_data_attributes<br/>function_mapping</a></li>
        <li><a href="../pages/4/index.html">button_onclick<br/>arrow_function</a></li>
        <li><a href="../pages/5/index.html">button_onclick<br/>module_property</a></li>
        <li><a href="../pages/6/index.html">button_onclick<br/>customElements_property</a></li>
        <li><a href="../pages/7/index.html">template</a></li>
        <li><a href="../pages/8/index.html">shadowDOM</a></li>
      </ul>
    `;
    return newContent;
  }

  initializeLinks(newContent) {
    const links = newContent.querySelectorAll('a');
    links.forEach((link, index) => {
      this.originalHrefs[index] = link.getAttribute('href');
      updateLinkHref(link, this.originalHrefs[index], globalThis.location);
    });
    highlightActiveLink(links, globalThis.location.pathname);
  }

  addEventListeners(newContent) {
    document.addEventListener("DOMContentLoaded", () => {
      const items = newContent.querySelectorAll('.main-card li');
      items.forEach((item, index) => {
        if (index !== 0) {
          const indexText = index;
          item.style.setProperty('--index', `"${indexText}"`);
        }
      });
    });
    globalThis.addEventListener('popstate', () => {
      highlightActiveLink(newContent.querySelectorAll('a'), globalThis.location.pathname);
    });
  }
}

customElements.define("component-menu", Menu);
