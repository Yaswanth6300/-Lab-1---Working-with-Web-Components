class AppHeader extends HTMLElement {
    static get observedAttributes() { return ['title']; }
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
    connectedCallback() { this.render(); }
    attributeChangedCallback() { this.render(); }
  
    render() {
      const title = this.getAttribute('title') || 'App Header';
      this.shadowRoot.innerHTML = `
        <style>
          header {
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;
            background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
            border: 1px solid rgba(255,255,255,0.12);
            border-radius: 16px;
            position: sticky; top: 0; z-index: 10;
            backdrop-filter: blur(8px);
          }
          h1 { margin: 0; font-size: 18px; letter-spacing: 0.3px; }
          .right { display: inline-flex; gap: 8px; }
          ::slotted(*) { font-size: 14px; }
        </style>
        <header>
          <h1>${title}</h1>
          <div class="right">
            <slot name="actions"></slot>
          </div>
        </header>
      `;
    }
  }
  customElements.define('app-header', AppHeader);
  