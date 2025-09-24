class AppFooter extends HTMLElement {
    static get observedAttributes() { return ['contact']; }
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
    connectedCallback() { this.render(); }
    attributeChangedCallback() { this.render(); }
  
    render() {
      const year = new Date().getFullYear();
      const contact = this.getAttribute('contact') || 'hello@example.com';
      this.shadowRoot.innerHTML = `
        <style>
          footer {
            margin-top: 16px;
            padding: 12px 16px;
            border-radius: 16px;
            border: 1px solid rgba(255,255,255,0.12);
            background: rgba(255,255,255,0.04);
            display: flex; align-items: center; justify-content: space-between;
            font-size: 14px;
          }
          a { color: #4f8cff; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
        <footer>
          <span>&copy; ${year} Lab 01 • Web Components</span>
          <a href="mailto:${contact}">${contact}</a>
        </footer>
      `;
    }
  }
  customElements.define('app-footer', AppFooter);
  