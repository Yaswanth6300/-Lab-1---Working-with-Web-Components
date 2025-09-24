class AppDetails extends HTMLElement {
    static get observedAttributes() { return ['title']; }
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
    connectedCallback() { this.render(); }
    attributeChangedCallback() { this.render(); }
    render() {
      const title = this.getAttribute('title') || 'Details';
      this.shadowRoot.innerHTML = `
        <style>
          section { display: block; }
          h2 { margin: 0 0 8px; font-size: 18px; }
          ::slotted(*) { line-height: 1.6; }
          :host { display: block; }
        </style>
        <section aria-labelledby="details-title">
          <h2 id="details-title">${title}</h2>
          <slot></slot>
        </section>
      `;
    }
  }
  customElements.define('app-details', AppDetails);
  