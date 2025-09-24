// Compose the page using our custom elements
import './components/app-header.js';
import './components/user-card.js';
import './components/app-details.js';
import './components/app-footer.js';

const app = document.getElementById('app');

app.innerHTML = `
  <app-header title="Lab 01 • Web Components">
    <button slot="actions" class="pill">Docs</button>
    <button slot="actions" class="pill">Settings</button>
  </app-header>

  <main class="layout">
    <section class="section left">
      <h2 style="margin:4px 0 8px;">Team</h2>
      <p class="muted" style="margin:0 0 12px;">Cards demonstrate attributes + slots (Open/Closed Principle).</p>

      <user-card name="Alice" role="Designer" img-src="https://randomuser.me/api/portraits/women/44.jpg"></user-card>

      <user-card name="Ben" role="Engineer" img-src="https://randomuser.me/api/portraits/men/46.jpg">
        <button slot="actions" class="pill">Message</button>
      </user-card>

      <user-card name="Chandra" role="PM" img-src="https://randomuser.me/api/portraits/men/47.jpg">
        <span slot="extra" class="muted" >Timezone: CST</span>
      </user-card>
    </section>

    <section class="section right">
      <app-details title="Details">
        <p>This right panel shows a second column using CSS Grid.</p>
        <ul>
          <li><strong>Cohesion:</strong> Each component does one job.</li>
          <li><strong>Low Coupling:</strong> Components communicate via attributes/slots.</li>
          <li><strong>Open/Closed:</strong> Extend via attributes/slots; no source edits needed.</li>
          <li><strong>Usability:</strong> Clear spacing, focus outlines, semantic HTML.</li>
        </ul>
        <div style="margin-top:12px;">
          <button class="pill">Primary</button>
          <button class="pill" aria-label="Secondary action">Secondary</button>
        </div>
      </app-details>
    </section>
  </main>

  <app-footer contact="support@example.com"></app-footer>
`;

// simple shared style for buttons (outside shadow roots)
const style = document.createElement('style');
style.textContent = `
  .pill {
    appearance: none;
    border: 1px solid rgba(255,255,255,0.15);
    background: rgba(255,255,255,0.06);
    color: #e6edf7;
    padding: 8px 12px;
    border-radius: 999px;
    cursor: pointer;
  }
  .pill:focus { outline: 2px solid #4f8cff; outline-offset: 2px; }
`;
document.head.appendChild(style);
