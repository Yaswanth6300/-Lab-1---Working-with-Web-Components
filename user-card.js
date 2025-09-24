const avatarSVG = encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='#4f8cff'/>
        <stop offset='100%' stop-color='#9b8cff'/>
      </linearGradient>
    </defs>
    <rect width='100%' height='100%' fill='url(#g)' rx='12'/>
    <circle cx='40' cy='32' r='16' fill='rgba(255,255,255,0.85)'/>
    <rect x='18' y='54' width='44' height='12' rx='6' fill='rgba(255,255,255,0.65)'/>
  </svg>`);
  
  class UserCard extends HTMLElement {
    static get observedAttributes() { return ['name','role','img-src']; }
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
    connectedCallback() { this.render(); }
    attributeChangedCallback() { this.render(); }
  
    render() {
      const name = this.getAttribute('name') || 'Unnamed';
      const role = this.getAttribute('role') || 'Contributor';
      const img = this.getAttribute('img-src') || `data:image/svg+xml;utf8,${avatarSVG}`;
  
      this.shadowRoot.innerHTML = `
        <style>
          article {
            display: grid;
            grid-template-columns: 80px 1fr auto;
            align-items: center;
            gap: 12px;
            padding: 12px;
            border-radius: 14px;
            border: 1px solid rgba(255,255,255,0.12);
            background: rgba(255,255,255,0.04);
          }
          img { width: 80px; height: 80px; object-fit: cover; border-radius: 12px;
                border: 1px solid rgba(255,255,255,0.2); }
          h3 { margin: 0 0 4px; font-size: 16px; }
          p { margin: 0; color: #9fb0cf; font-size: 14px; }
          .actions { display: inline-flex; gap: 8px; }
          ::slotted([slot="actions"]) { font-size: 13px; }
          ::slotted([slot="extra"]) { display: block; margin-top: 6px; font-size: 12px; color: #9fb0cf; }
        </style>
        <article>
          <img src="${img}" alt="Avatar for ${name}" />
          <div>
            <h3>${name}</h3>
            <p>${role}</p>
            <slot name="extra"></slot>
          </div>
          <div class="actions">
            <slot name="actions"></slot>
          </div>
        </article>
      `;
    }
  }
  customElements.define('user-card', UserCard);
  