const GITHUB_REPOSITORY = '/basic';
class Menu extends HTMLElement {
  constructor() {
    super();
    this.originalHrefs = [];
  }
  connectedCallback() {
    const parent = this.parentElement;
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

    // 링크의 원본 href를 저장하고, 현재 위치에 맞게 업데이트
    const links = newContent.querySelectorAll('a');
    links.forEach((link, index) => {
      this.originalHrefs[index] = link.getAttribute('href');
      this.updateLinkHref(link, index);
    });

    parent.replaceChild(newContent, this);
    this.highlightActiveLink(newContent);

    document.addEventListener("DOMContentLoaded", () => {
      const items = document.querySelectorAll('.main-card li');
      items.forEach(function(item, index) {
        if (index !== 0) {
          const indexText = index;
          item.style.setProperty('--index', `"${indexText}"`);
        }
      });
    });
    globalThis.addEventListener('popstate', () => this.highlightActiveLink(newContent));
  }

  updateLinkHref(link, index) {
    const repoName = GITHUB_REPOSITORY;
    let basePath = '';

    if (globalThis.location.href.includes(repoName)) {
      basePath = repoName;
    }

    const absoluteHref = new URL(basePath + this.originalHrefs[index].substring(2), globalThis.location.origin).href;
    link.href = absoluteHref;
  }
  
  
  calculateBasePath() {
    const pathParts = globalThis.location.pathname.split('/');
    return globalThis.location.origin + pathParts.slice(0, pathParts.length - 1).join('/') + '';
  }


  highlightActiveLink(newContent) {
    const links = newContent.querySelectorAll('a');
    const currentPath = globalThis.location.pathname;

    links.forEach(link => {
      const linkPath = new URL(link.href, globalThis.location.origin).pathname;
      if (linkPath === currentPath) {
        link.classList.add('active-link');
      } else {
        link.classList.remove('active-link');
      }
    });
  }
}

customElements.define("component-menu", Menu);
