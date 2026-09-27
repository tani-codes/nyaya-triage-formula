/**
 * NYAYA-TRIAGE Formula Compendium — Application Logic
 * Professional White/Gold Theme · No audio · Pure simulation
 */

// ─── VIEW SWITCHING ───────────────────────────────────────────
let svgsInjected = false;

function switchView(name) {
  document.querySelectorAll('.view').forEach(v => { v.classList.remove('active'); v.style.display = 'none'; });
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.toggle('active', t.dataset.view === name));
  const el = document.getElementById(name + '-view');
  if (!el) return;
  el.style.display = 'block';
  el.classList.add('active');

  if (name === 'uml') {
    if (!svgsInjected) insertCustomSVGs();
  }

  if (window.renderMathInElement) {
    try { window.renderMathInElement(el, { delimiters: KATEX_DEL, throwOnError: false }); } catch(e) {}
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── MERMAID DIAGRAMS ─────────────────────────────────────────
function cacheMermaidSources() {
  document.querySelectorAll('.mermaid').forEach(el => {
    if (!el.getAttribute('data-raw')) {
      el.setAttribute('data-raw', el.textContent.trim());
    }
  });
}

// ─── CUSTOM SVG DIAGRAM INJECTION ────────────────────────────
function insertCustomSVGs() {
  const boxes = document.querySelectorAll('.uml-diagram-box');
  if (boxes[0]) boxes[0].insertAdjacentHTML('afterbegin', _svg1());
  if (boxes[1]) boxes[1].insertAdjacentHTML('afterbegin', _svg2());
  if (boxes[2]) boxes[2].insertAdjacentHTML('afterbegin', _svg3());
  svgsInjected = true;
}

// Alias for the Re-render button
function renderAllMermaid() { if (!svgsInjected) insertCustomSVGs(); }

/* ── SVG 1: High-Level Component Architecture ─────────────── */
function _svg1() {
return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1060 595" width="100%" style="display:block;font-family:Inter,system-ui,sans-serif">
<defs><marker id="a1" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#8b5e14"/></marker></defs>
<!-- LAYER 1: CLIENT -->
<rect x="6" y="6" width="1048" height="148" rx="6" fill="#fffcf5" stroke="#d4af6a" stroke-width="1.5"/>
<text x="530" y="23" font-size="9" font-weight="800" fill="#8b5e14" letter-spacing="1" text-anchor="middle">CLIENT PRESENTATION LAYER — React 19 · Vite 8 · Tailwind 4 · Supabase Auth (ES256 JWKS)</text>
<rect x="16" y="30" width="151" height="40" rx="3" fill="white" stroke="#d4af6a" stroke-width="1.2"/>
<text x="91" y="48" font-size="10" font-weight="700" fill="#111110" text-anchor="middle">Citizen / Litigant</text>
<text x="91" y="62" font-size="8" fill="#6b6860" text-anchor="middle">Public Legal Portal</text>
<rect x="177" y="30" width="151" height="40" rx="3" fill="white" stroke="#d4af6a" stroke-width="1.2"/>
<text x="253" y="48" font-size="10" font-weight="700" fill="#111110" text-anchor="middle">Police &amp; IO</text>
<text x="253" y="62" font-size="8" fill="#6b6860" text-anchor="middle">Station Core</text>
<rect x="338" y="30" width="151" height="40" rx="3" fill="white" stroke="#d4af6a" stroke-width="1.2"/>
<text x="414" y="48" font-size="10" font-weight="700" fill="#111110" text-anchor="middle">Advocate</text>
<text x="414" y="62" font-size="8" fill="#6b6860" text-anchor="middle">Legal Researcher</text>
<rect x="499" y="30" width="151" height="40" rx="3" fill="white" stroke="#d4af6a" stroke-width="1.2"/>
<text x="575" y="48" font-size="10" font-weight="700" fill="#111110" text-anchor="middle">Judicial Officer</text>
<text x="575" y="62" font-size="8" fill="#6b6860" text-anchor="middle">Magistrate</text>
<rect x="660" y="30" width="151" height="40" rx="3" fill="white" stroke="#d4af6a" stroke-width="1.2"/>
<text x="736" y="48" font-size="10" font-weight="700" fill="#111110" text-anchor="middle">National Admin</text>
<text x="736" y="62" font-size="8" fill="#6b6860" text-anchor="middle">System Operator</text>
<rect x="821" y="30" width="233" height="40" rx="3" fill="#fdf6e3" stroke="#b8842a" stroke-width="1.5"/>
<text x="937" y="47" font-size="10" font-weight="700" fill="#5c3d0a" text-anchor="middle">Supabase Auth + AppContext</text>
<text x="937" y="62" font-size="8" fill="#6b6860" text-anchor="middle">ES256 JWKS · Role RBAC · Token Cache</text>
<rect x="16" y="80" width="1038" height="64" rx="3" fill="white" stroke="#e0ddd6" stroke-width="1"/>
<text x="530" y="98" font-size="10" font-weight="700" fill="#37352f" text-anchor="middle">Application Views &amp; Tooling (7 UI Modules)</text>
<text x="530" y="114" font-size="8.5" fill="#6b6860" text-anchor="middle">LandingPage (3D Lady Justice) · IPC↔BNS Mapper (/ipc-bns) · Search Precedents (/search) · Grounded AI Chat (/chat) · Plain Summarizer (/plain-summarizer)</text>
<text x="530" y="130" font-size="8.5" fill="#6b6860" text-anchor="middle">Judicial Bench + Docket Matrix (/dashboard) · Malkhana BSA §63 Ledger · Pitch Teleprompter (520×340 OBS) · Cross-Window Bridge (window.__nyayaPitchBridge)</text>
<line x1="270" y1="154" x2="270" y2="172" stroke="#8b5e14" stroke-width="1.5" marker-end="url(#a1)"/>
<line x1="530" y1="154" x2="530" y2="172" stroke="#8b5e14" stroke-width="1.5" marker-end="url(#a1)"/>
<line x1="790" y1="154" x2="790" y2="172" stroke="#8b5e14" stroke-width="1.5" marker-end="url(#a1)"/>
<!-- LAYER 2: API GATEWAY -->
<rect x="6" y="174" width="1048" height="132" rx="6" fill="#f4f3ef" stroke="#b8842a" stroke-width="1.5"/>
<text x="530" y="192" font-size="9" font-weight="800" fill="#5c3d0a" letter-spacing="1" text-anchor="middle">ZERO-TRUST FASTAPI GATEWAY — Uvicorn · Dual-Stack IPv4/IPv6 :8000</text>
<rect x="16" y="199" width="136" height="32" rx="3" fill="white" stroke="#d4af6a" stroke-width="1"/>
<text x="84" y="213" font-size="8.5" font-weight="700" fill="#111110" text-anchor="middle">/api/auth/*</text>
<text x="84" y="226" font-size="7.5" fill="#8b5e14" text-anchor="middle">OTP · JWKS · Verify</text>
<rect x="162" y="199" width="136" height="32" rx="3" fill="white" stroke="#d4af6a" stroke-width="1"/>
<text x="230" y="213" font-size="8.5" font-weight="700" fill="#111110" text-anchor="middle">/api/ipc-bns*</text>
<text x="230" y="226" font-size="7.5" fill="#8b5e14" text-anchor="middle">580 Sections</text>
<rect x="308" y="199" width="136" height="32" rx="3" fill="white" stroke="#d4af6a" stroke-width="1"/>
<text x="376" y="213" font-size="8.5" font-weight="700" fill="#111110" text-anchor="middle">/api/cases/*</text>
<text x="376" y="226" font-size="7.5" fill="#8b5e14" text-anchor="middle">680 Precedents</text>
<rect x="454" y="199" width="152" height="32" rx="3" fill="white" stroke="#d4af6a" stroke-width="1"/>
<text x="530" y="213" font-size="8.5" font-weight="700" fill="#111110" text-anchor="middle">/api/reason + /chat</text>
<text x="530" y="226" font-size="7.5" fill="#8b5e14" text-anchor="middle">Legal Reasoning</text>
<rect x="616" y="199" width="136" height="32" rx="3" fill="white" stroke="#d4af6a" stroke-width="1"/>
<text x="684" y="213" font-size="8.5" font-weight="700" fill="#111110" text-anchor="middle">/api/judge/*</text>
<text x="684" y="226" font-size="7.5" fill="#8b5e14" text-anchor="middle">Docket · BNSS §479</text>
<rect x="762" y="199" width="136" height="32" rx="3" fill="white" stroke="#d4af6a" stroke-width="1"/>
<text x="830" y="213" font-size="8.5" font-weight="700" fill="#111110" text-anchor="middle">/api/police/*</text>
<text x="830" y="226" font-size="7.5" fill="#8b5e14" text-anchor="middle">Malkhana · BSA §63</text>
<rect x="908" y="199" width="146" height="32" rx="3" fill="white" stroke="#d4af6a" stroke-width="1"/>
<text x="981" y="213" font-size="8.5" font-weight="700" fill="#111110" text-anchor="middle">/api/vault* + /crypto*</text>
<text x="981" y="226" font-size="7.5" fill="#8b5e14" text-anchor="middle">PSI · Redaction</text>
<rect x="16" y="241" width="330" height="55" rx="3" fill="#fdf6e3" stroke="#b8842a" stroke-width="1.2"/>
<text x="181" y="261" font-size="10" font-weight="700" fill="#5c3d0a" text-anchor="middle">ABAC Role + CIS Guard</text>
<text x="181" y="276" font-size="8.5" fill="#37352f" text-anchor="middle">Attribute-Based Access Control</text>
<text x="181" y="290" font-size="8" fill="#6b6860" text-anchor="middle">ES256 Token Verification per request</text>
<rect x="356" y="241" width="348" height="55" rx="3" fill="#fdf6e3" stroke="#b8842a" stroke-width="1.2"/>
<text x="530" y="261" font-size="10" font-weight="700" fill="#5c3d0a" text-anchor="middle">Haversine Geofence Validator</text>
<text x="530" y="276" font-size="8.5" fill="#37352f" text-anchor="middle">Spherical distance d ≤ 1500 m</text>
<text x="530" y="290" font-size="8" fill="#6b6860" text-anchor="middle">Validates against authorised station precinct coordinates</text>
<rect x="714" y="241" width="340" height="55" rx="3" fill="#fdf6e3" stroke="#b8842a" stroke-width="1.2"/>
<text x="884" y="261" font-size="10" font-weight="700" fill="#5c3d0a" text-anchor="middle">Dual-Stack CORS Validator</text>
<text x="884" y="276" font-size="8.5" fill="#37352f" text-anchor="middle">IPv4/IPv6 Origin Validation</text>
<text x="884" y="290" font-size="8" fill="#6b6860" text-anchor="middle">Rate-Limiting · Request Signing</text>
<line x1="270" y1="306" x2="270" y2="324" stroke="#8b5e14" stroke-width="1.5" marker-end="url(#a1)"/>
<line x1="530" y1="306" x2="530" y2="324" stroke="#8b5e14" stroke-width="1.5" marker-end="url(#a1)"/>
<line x1="790" y1="306" x2="790" y2="324" stroke="#8b5e14" stroke-width="1.5" marker-end="url(#a1)"/>
<!-- LAYER 3: DOMAIN SERVICES -->
<rect x="6" y="326" width="1048" height="135" rx="6" fill="#f4f3ef" stroke="#d4af6a" stroke-width="1.5"/>
<text x="530" y="344" font-size="9" font-weight="800" fill="#5c3d0a" letter-spacing="1" text-anchor="middle">DOMAIN SERVICES &amp; ALGORITHMIC ENGINES</text>
<rect x="16" y="350" width="196" height="103" rx="3" fill="white" stroke="#d4af6a" stroke-width="1.2"/>
<line x1="16" y1="373" x2="212" y2="373" stroke="#e0ddd6"/>
<text x="114" y="367" font-size="9.5" font-weight="800" fill="#5c3d0a" text-anchor="middle">ipc_bns_mapper.py</text>
<text x="114" y="388" font-size="8.5" fill="#37352f" text-anchor="middle">IPC → BNS Mapper</text>
<text x="114" y="402" font-size="8" fill="#6b6860" text-anchor="middle">580 Sections · 89.5% Coverage</text>
<text x="114" y="416" font-size="8" fill="#6b6860" text-anchor="middle">Statutory Transition Engine</text>
<text x="114" y="444" font-size="7.5" fill="#8b5e14" text-anchor="middle">→ MongoDB</text>
<rect x="222" y="350" width="196" height="103" rx="3" fill="white" stroke="#d4af6a" stroke-width="1.2"/>
<line x1="222" y1="373" x2="418" y2="373" stroke="#e0ddd6"/>
<text x="320" y="367" font-size="9.5" font-weight="800" fill="#5c3d0a" text-anchor="middle">search_service.py</text>
<text x="320" y="388" font-size="8.5" fill="#37352f" text-anchor="middle">BM25 + RRF(k=60) + Qdrant</text>
<text x="320" y="402" font-size="8" fill="#6b6860" text-anchor="middle">Legal Stopword Preserver</text>
<text x="320" y="416" font-size="8" fill="#6b6860" text-anchor="middle">384-dim SentenceTransformers</text>
<text x="320" y="444" font-size="7.5" fill="#8b5e14" text-anchor="middle">→ MongoDB + Qdrant Cloud</text>
<rect x="428" y="350" width="204" height="103" rx="3" fill="white" stroke="#d4af6a" stroke-width="1.2"/>
<line x1="428" y1="373" x2="632" y2="373" stroke="#e0ddd6"/>
<text x="530" y="367" font-size="9.5" font-weight="800" fill="#5c3d0a" text-anchor="middle">gemini_service.py</text>
<text x="530" y="388" font-size="8.5" fill="#37352f" text-anchor="middle">Gemini 3.5 Flash Reasoning</text>
<text x="530" y="402" font-size="8" fill="#6b6860" text-anchor="middle">C = clamp(0.5·Sim + 0.5·Claims)</text>
<text x="530" y="416" font-size="8" fill="#6b6860" text-anchor="middle">Deterministic Fallback Mode</text>
<text x="530" y="444" font-size="7.5" fill="#8b5e14" text-anchor="middle">→ SQLite + IndianKanoon</text>
<rect x="642" y="350" width="196" height="103" rx="3" fill="white" stroke="#d4af6a" stroke-width="1.2"/>
<line x1="642" y1="373" x2="838" y2="373" stroke="#e0ddd6"/>
<text x="740" y="367" font-size="9.5" font-weight="800" fill="#5c3d0a" text-anchor="middle">judicial_copilot.py</text>
<text x="740" y="388" font-size="8.5" fill="#37352f" text-anchor="middle">Docket Priority 0–100</text>
<text x="740" y="402" font-size="8" fill="#6b6860" text-anchor="middle">BNSS §479 Undertrial Advisor</text>
<text x="740" y="416" font-size="8" fill="#6b6860" text-anchor="middle">Bachan Singh Sentencing</text>
<text x="740" y="444" font-size="7.5" fill="#8b5e14" text-anchor="middle">→ MongoDB</text>
<rect x="848" y="350" width="206" height="103" rx="3" fill="white" stroke="#d4af6a" stroke-width="1.2"/>
<line x1="848" y1="373" x2="1054" y2="373" stroke="#e0ddd6"/>
<text x="951" y="367" font-size="9.5" font-weight="800" fill="#5c3d0a" text-anchor="middle">crypto_service.py</text>
<text x="951" y="388" font-size="8.5" fill="#37352f" text-anchor="middle">DH Blind PSI + SHA-256 Chain</text>
<text x="951" y="402" font-size="8" fill="#6b6860" text-anchor="middle">Sequential Hash Audit Ledger</text>
<text x="951" y="416" font-size="8" fill="#6b6860" text-anchor="middle">BSA §63(4) Admissibility Signer</text>
<text x="951" y="444" font-size="7.5" fill="#8b5e14" text-anchor="middle">→ MongoDB (Immutable Ledger)</text>
<line x1="114" y1="453" x2="114" y2="477" stroke="#8b5e14" stroke-width="1.5" marker-end="url(#a1)"/>
<line x1="320" y1="453" x2="320" y2="477" stroke="#8b5e14" stroke-width="1.5" marker-end="url(#a1)"/>
<line x1="530" y1="453" x2="530" y2="477" stroke="#8b5e14" stroke-width="1.5" marker-end="url(#a1)"/>
<line x1="740" y1="453" x2="740" y2="477" stroke="#8b5e14" stroke-width="1.5" marker-end="url(#a1)"/>
<line x1="951" y1="453" x2="951" y2="477" stroke="#8b5e14" stroke-width="1.5" marker-end="url(#a1)"/>
<!-- LAYER 4: DATA -->
<rect x="6" y="479" width="1048" height="110" rx="6" fill="#fafaf8" stroke="#e0ddd6" stroke-width="1.5"/>
<text x="530" y="497" font-size="9" font-weight="800" fill="#37352f" letter-spacing="1" text-anchor="middle">DATA &amp; PERSISTENCE LAYER</text>
<rect x="16" y="505" width="250" height="76" rx="3" fill="white" stroke="#d4af6a" stroke-width="1.2"/>
<text x="141" y="523" font-size="9.5" font-weight="700" fill="#111110" text-anchor="middle">MongoDB (nyaya_triage)</text>
<text x="141" y="538" font-size="8" fill="#6b6860" text-anchor="middle">680 Precedents · 580 Mappings</text>
<text x="141" y="552" font-size="8" fill="#6b6860" text-anchor="middle">Malkhana Evidence · BSA §63 Certs</text>
<text x="141" y="572" font-size="7.5" fill="#8b5e14" text-anchor="middle">Primary Document Store</text>
<rect x="278" y="505" width="250" height="76" rx="3" fill="white" stroke="#d4af6a" stroke-width="1.2"/>
<text x="403" y="523" font-size="9.5" font-weight="700" fill="#111110" text-anchor="middle">Qdrant Cloud Vector DB</text>
<text x="403" y="538" font-size="8" fill="#6b6860" text-anchor="middle">india_code(150) · constitution(500)</text>
<text x="403" y="552" font-size="8" fill="#6b6860" text-anchor="middle">precedents(78 vec) · Cosine Metric</text>
<text x="403" y="572" font-size="7.5" fill="#8b5e14" text-anchor="middle">384-dim Semantic Index</text>
<rect x="540" y="505" width="250" height="76" rx="3" fill="white" stroke="#d4af6a" stroke-width="1.2"/>
<text x="665" y="523" font-size="9.5" font-weight="700" fill="#111110" text-anchor="middle">Local SQLite Database</text>
<text x="665" y="538" font-size="8" fill="#6b6860" text-anchor="middle">User Query Audit Log</text>
<text x="665" y="552" font-size="8" fill="#6b6860" text-anchor="middle">Session History · Judicial Orders</text>
<text x="665" y="572" font-size="7.5" fill="#8b5e14" text-anchor="middle">Local Persistent Cache</text>
<rect x="802" y="505" width="252" height="76" rx="3" fill="white" stroke="#d4af6a" stroke-width="1.2"/>
<text x="928" y="523" font-size="9.5" font-weight="700" fill="#111110" text-anchor="middle">External Judicial Corpus</text>
<text x="928" y="538" font-size="8" fill="#6b6860" text-anchor="middle">IndianKanoon.org (Trust: 0.85)</text>
<text x="928" y="552" font-size="8" fill="#6b6860" text-anchor="middle">Supreme Court Gazette (Live)</text>
<text x="928" y="572" font-size="7.5" fill="#b8842a" text-anchor="middle">Web Fallback Citations</text>
</svg>`;
}

/* ── SVG 2: Sequence Diagram ──────────────────────────────── */
function _svg2() {
return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1060 520" width="100%" style="display:block;font-family:Inter,system-ui,sans-serif">
<defs>
  <marker id="a2f" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#8b5e14"/></marker>
  <marker id="a2r" markerWidth="7" markerHeight="5" refX="6" refY="2.5" orient="auto"><polygon points="0 0,7 2.5,0 5" fill="#b8842a"/></marker>
</defs>
<!-- Actors: W=106 H=44, centers at 58,176,294,412,530,648,766,884,1002 -->
<rect x="5" y="8" width="106" height="44" rx="4" fill="#fdf6e3" stroke="#b8842a" stroke-width="1.5"/>
<text x="58" y="28" font-size="9.5" font-weight="800" fill="#5c3d0a" text-anchor="middle">Advocate</text>
<text x="58" y="43" font-size="8" fill="#8b5e14" text-anchor="middle">/ Judge</text>
<rect x="123" y="8" width="106" height="44" rx="4" fill="white" stroke="#d4af6a" stroke-width="1.5"/>
<text x="176" y="28" font-size="9.5" font-weight="700" fill="#111110" text-anchor="middle">React UI</text>
<text x="176" y="43" font-size="8" fill="#6b6860" text-anchor="middle">Search / Chat</text>
<rect x="241" y="8" width="106" height="44" rx="4" fill="white" stroke="#d4af6a" stroke-width="1.5"/>
<text x="294" y="28" font-size="9.5" font-weight="700" fill="#111110" text-anchor="middle">FastAPI</text>
<text x="294" y="43" font-size="8" fill="#6b6860" text-anchor="middle">Gateway :8000</text>
<rect x="359" y="8" width="106" height="44" rx="4" fill="white" stroke="#d4af6a" stroke-width="1.5"/>
<text x="412" y="28" font-size="9.5" font-weight="700" fill="#111110" text-anchor="middle">Hybrid RRF</text>
<text x="412" y="43" font-size="8" fill="#6b6860" text-anchor="middle">Search Engine</text>
<rect x="477" y="8" width="106" height="44" rx="4" fill="#f4f3ef" stroke="#d4af6a" stroke-width="1.5"/>
<text x="530" y="28" font-size="9.5" font-weight="700" fill="#111110" text-anchor="middle">BM25 Index</text>
<text x="530" y="43" font-size="8" fill="#6b6860" text-anchor="middle">Legal Lexical</text>
<rect x="595" y="8" width="106" height="44" rx="4" fill="#f4f3ef" stroke="#d4af6a" stroke-width="1.5"/>
<text x="648" y="28" font-size="9.5" font-weight="700" fill="#111110" text-anchor="middle">Qdrant Cloud</text>
<text x="648" y="43" font-size="8" fill="#6b6860" text-anchor="middle">Vector Dense</text>
<rect x="713" y="8" width="106" height="44" rx="4" fill="white" stroke="#b8842a" stroke-width="1.5"/>
<text x="766" y="28" font-size="9.5" font-weight="700" fill="#111110" text-anchor="middle">Gemini 3.5</text>
<text x="766" y="43" font-size="8" fill="#6b6860" text-anchor="middle">Flash LLM</text>
<rect x="831" y="8" width="106" height="44" rx="4" fill="white" stroke="#d4af6a" stroke-width="1.5"/>
<text x="884" y="28" font-size="9.5" font-weight="700" fill="#111110" text-anchor="middle">Confidence</text>
<text x="884" y="43" font-size="8" fill="#6b6860" text-anchor="middle">Calculator</text>
<rect x="949" y="8" width="106" height="44" rx="4" fill="white" stroke="#d4af6a" stroke-width="1.5"/>
<text x="1002" y="28" font-size="9.5" font-weight="700" fill="#111110" text-anchor="middle">MongoDB</text>
<text x="1002" y="43" font-size="8" fill="#6b6860" text-anchor="middle">680 Precedents</text>
<!-- Lifelines -->
<line x1="58"   y1="52" x2="58"   y2="510" stroke="#e0ddd6" stroke-width="1" stroke-dasharray="5,4"/>
<line x1="176"  y1="52" x2="176"  y2="510" stroke="#e0ddd6" stroke-width="1" stroke-dasharray="5,4"/>
<line x1="294"  y1="52" x2="294"  y2="510" stroke="#e0ddd6" stroke-width="1" stroke-dasharray="5,4"/>
<line x1="412"  y1="52" x2="412"  y2="510" stroke="#e0ddd6" stroke-width="1" stroke-dasharray="5,4"/>
<line x1="530"  y1="52" x2="530"  y2="510" stroke="#e0ddd6" stroke-width="1" stroke-dasharray="5,4"/>
<line x1="648"  y1="52" x2="648"  y2="510" stroke="#e0ddd6" stroke-width="1" stroke-dasharray="5,4"/>
<line x1="766"  y1="52" x2="766"  y2="510" stroke="#e0ddd6" stroke-width="1" stroke-dasharray="5,4"/>
<line x1="884"  y1="52" x2="884"  y2="510" stroke="#e0ddd6" stroke-width="1" stroke-dasharray="5,4"/>
<line x1="1002" y1="52" x2="1002" y2="510" stroke="#e0ddd6" stroke-width="1" stroke-dasharray="5,4"/>
<!-- 1: User→UI -->
<text x="6" y="76" font-size="8" fill="#b8842a" font-weight="700">1</text>
<line x1="65" y1="72" x2="170" y2="72" stroke="#8b5e14" stroke-width="1.5" marker-end="url(#a2f)"/>
<text x="117" y="67" font-size="8" fill="#37352f" text-anchor="middle">Types query: "bail under Section 483 BNSS"</text>
<!-- 2: UI→API -->
<text x="6" y="96" font-size="8" fill="#b8842a" font-weight="700">2</text>
<line x1="183" y1="92" x2="288" y2="92" stroke="#8b5e14" stroke-width="1.5" marker-end="url(#a2f)"/>
<text x="236" y="87" font-size="8" fill="#37352f" text-anchor="middle">POST /api/cases/search or /api/chat/query</text>
<!-- PAR box -->
<rect x="284" y="103" width="372" height="99" rx="3" fill="none" stroke="#b8842a" stroke-width="1" stroke-dasharray="6,3"/>
<rect x="284" y="103" width="32" height="16" rx="2" fill="#b8842a"/>
<text x="300" y="115" font-size="7.5" font-weight="800" fill="white" text-anchor="middle">par</text>
<line x1="300" y1="125" x2="524" y2="125" stroke="#8b5e14" stroke-width="1.5" marker-end="url(#a2f)"/>
<text x="412" y="120" font-size="7.5" fill="#37352f" text-anchor="middle">Lexical token query (preserve 'section','bnss','bail')</text>
<line x1="524" y1="146" x2="418" y2="146" stroke="#b8842a" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#a2r)"/>
<text x="471" y="141" font-size="7.5" fill="#6b6860" text-anchor="middle">Top-50 BM25 Candidates</text>
<line x1="284" y1="157" x2="656" y2="157" stroke="#b8842a" stroke-width="0.8" stroke-dasharray="4,3"/>
<text x="295" y="168" font-size="7" fill="#b8842a" font-weight="700">and</text>
<line x1="300" y1="171" x2="642" y2="171" stroke="#8b5e14" stroke-width="1.5" marker-end="url(#a2f)"/>
<text x="471" y="166" font-size="7.5" fill="#37352f" text-anchor="middle">Cosine vector search (384-dim SentenceTransformers)</text>
<line x1="642" y1="193" x2="418" y2="193" stroke="#b8842a" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#a2r)"/>
<text x="530" y="188" font-size="7.5" fill="#6b6860" text-anchor="middle">Top-50 Vector Chunks (cosine scores)</text>
<!-- 3: RRF self-loop -->
<text x="6" y="222" font-size="8" fill="#b8842a" font-weight="700">3</text>
<path d="M415 214 Q437 214 437 222 Q437 230 415 230" fill="none" stroke="#8b5e14" stroke-width="1.5" marker-end="url(#a2f)"/>
<text x="480" y="220" font-size="8" fill="#37352f">RRF(d) = Σ[ w / (60 + rank) ] — merge BM25 + dense</text>
<!-- 4: RRF→Mongo -->
<text x="6" y="248" font-size="8" fill="#b8842a" font-weight="700">4</text>
<line x1="418" y1="244" x2="996" y2="244" stroke="#8b5e14" stroke-width="1.5" marker-end="url(#a2f)"/>
<text x="707" y="239" font-size="8" fill="#37352f" text-anchor="middle">Resolve full metadata &amp; precedent text for top-10</text>
<!-- 5: Mongo→RRF -->
<text x="6" y="268" font-size="8" fill="#b8842a" font-weight="700">5</text>
<line x1="996" y1="265" x2="418" y2="265" stroke="#b8842a" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#a2r)"/>
<text x="707" y="260" font-size="8" fill="#6b6860" text-anchor="middle">Precedent headnotes, citations &amp; court data</text>
<!-- 6: RRF→Gemini -->
<text x="6" y="290" font-size="8" fill="#b8842a" font-weight="700">6</text>
<line x1="418" y1="286" x2="760" y2="286" stroke="#8b5e14" stroke-width="1.5" marker-end="url(#a2f)"/>
<text x="589" y="281" font-size="8" fill="#37352f" text-anchor="middle">Listwise cross-encoder rerank prompt</text>
<!-- 7: Gemini→RRF -->
<text x="6" y="310" font-size="8" fill="#b8842a" font-weight="700">7</text>
<line x1="760" y1="307" x2="418" y2="307" stroke="#b8842a" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#a2r)"/>
<text x="589" y="302" font-size="8" fill="#6b6860" text-anchor="middle">Ordered candidate rankings: [1, 4, 2, 7...]</text>
<!-- 8: RRF→Gemini synthesize -->
<text x="6" y="330" font-size="8" fill="#b8842a" font-weight="700">8</text>
<line x1="418" y1="327" x2="760" y2="327" stroke="#8b5e14" stroke-width="1.5" marker-end="url(#a2f)"/>
<text x="589" y="322" font-size="8" fill="#37352f" text-anchor="middle">Synthesize legal reasoning strictly over grounded chunks</text>
<!-- 9: Gemini→API -->
<text x="6" y="352" font-size="8" fill="#b8842a" font-weight="700">9</text>
<line x1="760" y1="349" x2="300" y2="349" stroke="#b8842a" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#a2r)"/>
<text x="530" y="344" font-size="8" fill="#6b6860" text-anchor="middle">Structured response: claims (stated / inferred / insufficient)</text>
<!-- 10: API→Calc -->
<text x="6" y="373" font-size="8" fill="#b8842a" font-weight="700">10</text>
<line x1="300" y1="370" x2="878" y2="370" stroke="#8b5e14" stroke-width="1.5" marker-end="url(#a2f)"/>
<text x="589" y="365" font-size="8" fill="#37352f" text-anchor="middle">calculate_programmatic_confidence(response, chunks)</text>
<!-- Note -->
<rect x="840" y="380" width="184" height="36" rx="2" fill="#fdf6e3" stroke="#d4af6a" stroke-width="1"/>
<text x="932" y="394" font-size="7.5" fill="#5c3d0a" text-anchor="middle">C = clamp(0.50·avg(Sim)</text>
<text x="932" y="408" font-size="7.5" fill="#5c3d0a" text-anchor="middle">+ 0.50·Claims, [0.05,0.99])</text>
<!-- 11: Calc→API -->
<text x="6" y="432" font-size="8" fill="#b8842a" font-weight="700">11</text>
<line x1="878" y1="429" x2="300" y2="429" stroke="#b8842a" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#a2r)"/>
<text x="589" y="424" font-size="8" fill="#6b6860" text-anchor="middle">Computed Grounded Confidence: 0.94 (Grounded)</text>
<!-- 12: API→UI -->
<text x="6" y="452" font-size="8" fill="#b8842a" font-weight="700">12</text>
<line x1="300" y1="449" x2="183" y2="449" stroke="#b8842a" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#a2r)"/>
<text x="236" y="444" font-size="8" fill="#6b6860" text-anchor="middle">JSON: Analysis + Citations + Confidence + BNS Sections</text>
<!-- 13: UI→User -->
<text x="6" y="472" font-size="8" fill="#b8842a" font-weight="700">13</text>
<line x1="183" y1="469" x2="65" y2="469" stroke="#b8842a" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#a2r)"/>
<text x="117" y="464" font-size="8" fill="#6b6860" text-anchor="middle">Interactive reasoning cards with verified badges</text>
</svg>`;
}

/* ── SVG 3: Class Diagram ─────────────────────────────────── */
function _svg3() {
return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 475" width="100%" style="display:block;font-family:Inter,system-ui,sans-serif">
<!-- ROW 1: RetrievedCandidate | FusedCandidate | LegalReasoningResponse -->
<!-- RetrievedCandidate x=10 y=10 W=290 H=220 -->
<rect x="10" y="10" width="290" height="220" rx="4" fill="white" stroke="#b8842a" stroke-width="1.5"/>
<rect x="10" y="10" width="290" height="36" rx="4" fill="#fdf6e3"/>
<rect x="10" y="40" width="290" height="6" fill="#fdf6e3"/>
<line x1="10" y1="46" x2="300" y2="46" stroke="#d4af6a" stroke-width="1"/>
<text x="155" y="33" font-size="11" font-weight="800" fill="#5c3d0a" text-anchor="middle">RetrievedCandidate</text>
<text x="20" y="62" font-size="8.5" fill="#37352f">+mongo_id : String</text>
<text x="20" y="77" font-size="8.5" fill="#37352f">+text : String</text>
<text x="20" y="92" font-size="8.5" fill="#37352f">+title : String</text>
<text x="20" y="107" font-size="8.5" fill="#37352f">+score : Float</text>
<text x="20" y="122" font-size="8.5" fill="#37352f">+source_system : String</text>
<text x="20" y="137" font-size="8.5" fill="#37352f">+source_index : String</text>
<text x="20" y="152" font-size="8.5" fill="#37352f">+metadata : Dict</text>
<!-- FusedCandidate x=360 y=10 W=290 H=220 -->
<rect x="360" y="10" width="290" height="220" rx="4" fill="white" stroke="#b8842a" stroke-width="1.5"/>
<rect x="360" y="10" width="290" height="36" rx="4" fill="#fdf6e3"/>
<rect x="360" y="40" width="290" height="6" fill="#fdf6e3"/>
<line x1="360" y1="46" x2="650" y2="46" stroke="#d4af6a" stroke-width="1"/>
<text x="505" y="33" font-size="11" font-weight="800" fill="#5c3d0a" text-anchor="middle">FusedCandidate</text>
<text x="370" y="62" font-size="8.5" fill="#37352f">+mongo_id : String</text>
<text x="370" y="77" font-size="8.5" fill="#37352f">+text : String</text>
<text x="370" y="92" font-size="8.5" fill="#37352f">+title : String</text>
<text x="370" y="107" font-size="8.5" fill="#37352f">+rrf_score : Float</text>
<text x="370" y="122" font-size="8.5" fill="#37352f">+bm25_rank : Int</text>
<text x="370" y="137" font-size="8.5" fill="#37352f">+faiss_rank : Int</text>
<text x="370" y="152" font-size="8.5" fill="#37352f">+faiss_score : Float</text>
<text x="370" y="167" font-size="8.5" fill="#37352f">+bm25_score : Float</text>
<text x="370" y="182" font-size="8.5" fill="#37352f">+source_type : String</text>
<text x="370" y="210" font-size="8" fill="#8b5e14" font-style="italic">Merged via Reciprocal Rank Fusion (k=60)</text>
<!-- LegalReasoningResponse x=700 y=10 W=290 H=220 -->
<rect x="700" y="10" width="290" height="220" rx="4" fill="white" stroke="#b8842a" stroke-width="1.5"/>
<rect x="700" y="10" width="290" height="36" rx="4" fill="#fdf6e3"/>
<rect x="700" y="40" width="290" height="6" fill="#fdf6e3"/>
<line x1="700" y1="46" x2="990" y2="46" stroke="#d4af6a" stroke-width="1"/>
<text x="845" y="33" font-size="10.5" font-weight="800" fill="#5c3d0a" text-anchor="middle">LegalReasoningResponse</text>
<text x="710" y="62" font-size="8.5" fill="#37352f">+summary : String</text>
<text x="710" y="77" font-size="8.5" fill="#37352f">+claims : List~Claim~</text>
<text x="710" y="92" font-size="8.5" fill="#37352f">+statutes : List~StatuteReference~</text>
<text x="710" y="107" font-size="8.5" fill="#37352f">+precedents : List~PrecedentCitation~</text>
<text x="710" y="122" font-size="8.5" fill="#37352f">+confidence : Float</text>
<text x="710" y="137" font-size="8.5" fill="#37352f">+reasoning_mode : String</text>
<!-- Inheritance arrow RC ← FC: open triangle at RC right edge -->
<line x1="360" y1="122" x2="312" y2="122" stroke="#8b5e14" stroke-width="1.5"/>
<polygon points="302,122 312,118 312,126" fill="white" stroke="#8b5e14" stroke-width="1.2"/>
<text x="331" y="115" font-size="8" fill="#8b5e14" text-anchor="middle">«extends»</text>
<text x="331" y="127" font-size="7.5" fill="#6b6860" text-anchor="middle">Merged via RRF</text>
<!-- Composition arrow LRR *-- Claim: diamond at LRR bottom, arrow at Claim top -->
<polygon points="845,231 853,237 845,243 837,237" fill="#8b5e14"/>
<line x1="845" y1="243" x2="845" y2="272" stroke="#8b5e14" stroke-width="1.5"/>
<polygon points="841,272 849,272 845,277" fill="#8b5e14"/>
<text x="858" y="260" font-size="8" fill="#8b5e14">contains</text>
<!-- ROW 2: PriorityDocketMatrix | UndertrialAdvisory | Claim -->
<!-- PriorityDocketMatrix x=10 y=278 W=290 H=187 -->
<rect x="10" y="278" width="290" height="187" rx="4" fill="white" stroke="#b8842a" stroke-width="1.5"/>
<rect x="10" y="278" width="290" height="36" rx="4" fill="#fdf6e3"/>
<rect x="10" y="308" width="290" height="6" fill="#fdf6e3"/>
<line x1="10" y1="314" x2="300" y2="314" stroke="#d4af6a" stroke-width="1"/>
<text x="155" y="301" font-size="11" font-weight="800" fill="#5c3d0a" text-anchor="middle">PriorityDocketMatrix</text>
<text x="20" y="330" font-size="8.5" fill="#37352f">+score : Float</text>
<text x="20" y="345" font-size="8.5" fill="#37352f">+tier : String</text>
<text x="20" y="360" font-size="8.5" fill="#37352f">+custody_component : Float</text>
<text x="20" y="375" font-size="8.5" fill="#37352f">+pendency_component : Float</text>
<text x="20" y="390" font-size="8.5" fill="#37352f">+urgency_component : Float</text>
<text x="20" y="405" font-size="8.5" fill="#37352f">+statutory_basis : String</text>
<line x1="10" y1="414" x2="300" y2="414" stroke="#e0ddd6" stroke-width="1"/>
<text x="20" y="428" font-size="8.5" fill="#37352f">+compute_priority_score()</text>
<text x="20" y="455" font-size="8" fill="#8b5e14" font-style="italic">0–100 scale judicial docket priority</text>
<!-- UndertrialAdvisory x=360 y=278 W=290 H=187 -->
<rect x="360" y="278" width="290" height="187" rx="4" fill="white" stroke="#b8842a" stroke-width="1.5"/>
<rect x="360" y="278" width="290" height="36" rx="4" fill="#fdf6e3"/>
<rect x="360" y="308" width="290" height="6" fill="#fdf6e3"/>
<line x1="360" y1="314" x2="650" y2="314" stroke="#d4af6a" stroke-width="1"/>
<text x="505" y="301" font-size="11" font-weight="800" fill="#5c3d0a" text-anchor="middle">UndertrialAdvisory</text>
<text x="370" y="330" font-size="8.5" fill="#37352f">+case_id : String</text>
<text x="370" y="345" font-size="8.5" fill="#37352f">+detention_months : Float</text>
<text x="370" y="360" font-size="8.5" fill="#37352f">+statutory_max_months : Float</text>
<text x="370" y="375" font-size="8.5" fill="#37352f">+threshold_ratio : Float</text>
<text x="370" y="390" font-size="8.5" fill="#37352f">+is_eligible : Boolean</text>
<text x="370" y="405" font-size="8.5" fill="#37352f">+has_capital_offense_bar : Boolean</text>
<line x1="360" y1="414" x2="650" y2="414" stroke="#e0ddd6" stroke-width="1"/>
<text x="370" y="428" font-size="8.5" fill="#37352f">+analyze_undertrial_eligibility()</text>
<text x="370" y="455" font-size="8" fill="#8b5e14" font-style="italic">BNSS §479: 1/3rd &amp; 1/2 Detention Rules</text>
<!-- Claim x=700 y=278 W=290 H=187 -->
<rect x="700" y="278" width="290" height="187" rx="4" fill="white" stroke="#b8842a" stroke-width="1.5"/>
<rect x="700" y="278" width="290" height="36" rx="4" fill="#fdf6e3"/>
<rect x="700" y="308" width="290" height="6" fill="#fdf6e3"/>
<line x1="700" y1="314" x2="990" y2="314" stroke="#d4af6a" stroke-width="1"/>
<text x="845" y="301" font-size="11" font-weight="800" fill="#5c3d0a" text-anchor="middle">Claim</text>
<text x="710" y="330" font-size="8.5" fill="#37352f">+text : String</text>
<text x="710" y="345" font-size="8.5" fill="#37352f">+basis : String</text>
<text x="710" y="360" font-size="8.5" fill="#37352f">+source_chunk_id : String</text>
<text x="710" y="390" font-size="8" fill="#6b6860" font-style="italic">Epistemic classification:</text>
<text x="710" y="405" font-size="8" fill="#6b6860" font-style="italic">stated · inferred · insufficient</text>
<text x="710" y="430" font-size="8" fill="#8b5e14" font-style="italic">Anti-hallucination grounding unit</text>
<!-- Dependency arrow PDM ..> UAd -->
<line x1="300" y1="375" x2="352" y2="375" stroke="#8b5e14" stroke-width="1.5" stroke-dasharray="5,3"/>
<polygon points="352,371 360,375 352,379" fill="#8b5e14"/>
<text x="329" y="368" font-size="8" fill="#8b5e14" text-anchor="middle">«uses»</text>
<text x="329" y="388" font-size="7.5" fill="#6b6860" text-anchor="middle">Incorporates BNSS §479 Rule</text>
</svg>`;
}
function copyMermaid(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const raw = el.getAttribute('data-raw') || el.textContent;
  navigator.clipboard.writeText(raw.trim()).then(() => {
    const btn = event?.currentTarget;
    if (btn) {
      const orig = btn.innerHTML;
      btn.innerHTML = '✓ Copied!';
      setTimeout(() => btn.innerHTML = orig, 2000);
    }
  }).catch(() => {
    prompt('Copy the Mermaid syntax:', raw.trim());
  });
}

// ─── FLIPBOOK ─────────────────────────────────────────────────
const TOTAL = 6;
let curPage = 1;
let autoTimer = null;

function goPage(n) {
  if (n < 1 || n > TOTAL) return;
  curPage = n;
  document.querySelectorAll('.pdf-page').forEach((p,i) => p.classList.toggle('active', i+1 === n));
  document.querySelectorAll('.thumb').forEach((t,i) => {
    t.classList.toggle('active', i+1 === n);
    if (i+1 === n) t.scrollIntoView({ inline:'center', block:'nearest', behavior:'smooth' });
  });
  const el = document.getElementById('page-n');
  if (el) el.textContent = n;
  const prev = document.getElementById('btn-prev');
  const next = document.getElementById('btn-next');
  if (prev) prev.disabled = n === 1;
  if (next) next.disabled = n === TOTAL;
}

function toggleAuto() {
  const btn = document.getElementById('btn-auto');
  if (autoTimer) {
    clearInterval(autoTimer); autoTimer = null;
    btn.classList.remove('on');
    btn.innerHTML = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg> Auto-Advance';
  } else {
    btn.classList.add('on');
    btn.innerHTML = '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg> Pause';
    autoTimer = setInterval(() => goPage(curPage >= TOTAL ? 1 : curPage + 1), 6000);
  }
}

// ─── §1: CONFIDENCE ──────────────────────────────────────────
function calcConf() {
  const sim  = parseFloat(document.getElementById('s-sim')?.value     ?? 0.78);
  const ns   = parseInt(document.getElementById('s-stated')?.value    ?? 4);
  const ni   = parseInt(document.getElementById('s-inferred')?.value  ?? 2);
  const nx   = parseInt(document.getElementById('s-insuff')?.value    ?? 0);

  set('v-sim', sim.toFixed(2));
  set('v-stated', ns); set('v-inferred', ni); set('v-insuff', nx);

  const total = ns + ni + nx;
  const sClaims = total ? (ns + 0.5*ni) / total : 0.5;
  const c = clamp(0.5*sim + 0.5*sClaims, 0.05, 0.99);

  set('r-conf', (c*100).toFixed(1) + '%');
  set('r-conf-sub', `S_ret: ${sim.toFixed(2)} | S_claims: ${sClaims.toFixed(2)}`);

  const badge = document.getElementById('r-conf-badge');
  if (!badge) return;
  if (c >= 0.75) { badge.textContent = 'HIGH GROUNDING · VERIFIED';          badge.className = 'r-status t-green'; }
  else if (c >= 0.5) { badge.textContent = 'MODERATE GROUNDING';             badge.className = 'r-status t-gold'; }
  else              { badge.textContent = 'HALLUCINATION RISK · LOW GROUNDING'; badge.className = 'r-status t-red'; }
}

// ─── §2: RRF ─────────────────────────────────────────────────
function calcRRF() {
  const r1 = parseInt(parseFloat(document.getElementById('s-bm25-rank')?.value ?? 3));
  const r2 = parseInt(parseFloat(document.getElementById('s-dense-rank')?.value ?? 5));
  const w1 = parseFloat(document.getElementById('s-w-bm25')?.value ?? 1.0);
  const w2 = parseFloat(document.getElementById('s-w-dense')?.value ?? 1.0);
  const k = 60;

  set('v-bm25-rank', '#' + r1);
  set('v-dense-rank', '#' + r2);
  set('v-w-bm25', w1.toFixed(1) + '×');
  set('v-w-dense', w2.toFixed(1) + '×');

  const t1 = w1 / (k + r1), t2 = w2 / (k + r2);
  set('r-rrf', (t1+t2).toFixed(5));
  set('r-rrf-sub', `BM25: ${t1.toFixed(5)} + Dense: ${t2.toFixed(5)}`);
}

// ─── §3: BM25 INSPECTOR ──────────────────────────────────────
const PRESERVED = new Set(['v','vs','versus','section','sec','article','art','act','state','union']);
function calcBM25() {
  const q = document.getElementById('bm25-input')?.value || '';
  const tokens = q.trim().toLowerCase().split(/\s+/);
  let kept = 0;
  const html = tokens.map(t => {
    const clean = t.replace(/[^a-z0-9]/g,'');
    if (PRESERVED.has(clean)) {
      kept++;
      return `<mark style="background:#eaf6ee;color:#14442c;padding:1px 6px;border-radius:3px;border:1px solid #a8d5bb;font-weight:700;font-family:var(--font-mono);">${t} <sup style="font-size:0.55em;letter-spacing:0.04em;">PRESERVED</sup></mark>`;
    }
    return `<span style="color:#6b6860;">${t}</span>`;
  }).join(' ');
  const prev = document.getElementById('bm25-preview');
  if (prev) prev.innerHTML = html;
  set('bm25-count', `${kept} Preserved Legal Term${kept!==1?'s':''} Detected`);
}

// ─── §4: DOCKET PRIORITY ─────────────────────────────────────
function calcDocket() {
  const cust  = parseFloat(document.getElementById('s-cust')?.value ?? 14);
  const maxp  = parseFloat(document.getElementById('s-maxp')?.value ?? 36);
  const pend  = parseFloat(document.getElementById('s-pend')?.value ?? 18);
  const first = document.getElementById('dk-first')?.checked ?? true;
  const bail  = document.getElementById('dk-bail')?.checked  ?? true;
  const stay  = document.getElementById('dk-stay')?.checked  ?? false;

  set('v-cust', cust + ' mo'); set('v-maxp', maxp + ' mo'); set('v-pend', pend + ' mo');

  const theta = first ? 1/3 : 1/2;
  const sCust = Math.min(40, (cust / maxp / theta) * 40);
  const sPend = Math.min(30, (pend / 24) * 30);
  const sUrg  = (bail ? 20 : 0) + (stay ? 10 : 0);
  const P     = Math.min(100, sCust + sPend + sUrg);

  set('r-dk', Math.round(P));
  set('r-dk-sub', `Custody: ${sCust.toFixed(1)} + Pendency: ${sPend.toFixed(1)} + Urgency: ${sUrg}`);

  const tier = document.getElementById('r-dk-tier');
  if (!tier) return;
  if (P >= 80)      { tier.textContent = 'P1 · IMMEDIATE HEARING'; tier.className = 'r-status t-red'; }
  else if (P >= 60) { tier.textContent = 'P2 · URGENT LISTING';    tier.className = 'r-status t-gold'; }
  else              { tier.textContent = 'P3 · STANDARD CAUSE LIST'; tier.className = 'r-status t-dark'; }
}

// ─── §5: BNSS §479 ───────────────────────────────────────────
function calcBNSS() {
  const served  = parseFloat(document.getElementById('s-served')?.value ?? 16);
  const smax    = parseFloat(document.getElementById('s-smax')?.value   ?? 36);
  const first   = document.getElementById('bn-first')?.checked   ?? true;
  const capital = document.getElementById('bn-capital')?.checked  ?? false;

  set('v-served', served + ' mo'); set('v-smax', smax + ' mo');

  const theta = first ? 1/3 : 1/2;
  const reqd  = theta * smax;
  const pct   = Math.min(100, (served / smax) * 100);

  const bar = document.getElementById('bn-bar');
  const mk  = document.getElementById('bn-mark');
  if (bar) bar.style.width = pct + '%';
  if (mk)  mk.style.left   = (theta * 100) + '%';

  const eligible = !capital && served >= reqd;
  const statusEl = document.getElementById('r-bn-status');
  const subEl    = document.getElementById('r-bn-sub');
  const panel    = document.getElementById('bn-panel');

  if (capital) {
    if (statusEl) { statusEl.textContent = 'STATUTORY DISQUALIFICATION — CAPITAL/LIFE OFFENCE'; statusEl.className = 'r-status t-red'; }
    if (subEl)    subEl.textContent = 'BNSS §479 strictly excludes offences punishable by death or life imprisonment.';
    if (panel)    panel.className = 'result r-red';
  } else if (eligible) {
    if (statusEl) { statusEl.textContent = 'ELIGIBLE FOR STATUTORY BAIL RELEASE'; statusEl.className = 'r-status t-green'; }
    if (subEl)    subEl.textContent = `Served ${served} mo ≥ Threshold ${reqd.toFixed(1)} mo (θ = ${first?'1/3':'1/2'}).`;
    if (panel)    panel.className = 'result r-green';
  } else {
    if (statusEl) { statusEl.textContent = 'BELOW STATUTORY THRESHOLD — DETENTION CONTINUES'; statusEl.className = 'r-status t-gold'; }
    if (subEl)    subEl.textContent = `${(reqd-served).toFixed(1)} mo remaining to reach threshold of ${reqd.toFixed(1)} mo.`;
    if (panel)    panel.className = 'result r-gold';
  }
}

// ─── §6: SENTENCING SEVERITY ─────────────────────────────────
function calcSeverity() {
  const nAgg   = parseInt(document.getElementById('s-agg')?.value    ?? 2);
  const nMit   = parseInt(document.getElementById('s-mit')?.value    ?? 3);
  const repeat = document.getElementById('s-repeat')?.checked ?? false;
  const vuln   = document.getElementById('s-vuln')?.checked   ?? true;

  set('v-agg', nAgg); set('v-mit', nMit);

  const sAgg = 2.0*nAgg + (repeat ? 3.0 : 0);
  const sMit = 1.5*nMit + (vuln   ? 2.0 : 0);
  const dS   = sAgg - sMit;

  const beam = document.getElementById('scale-beam');
  if (beam) beam.style.transform = `rotate(${clamp(dS*3.5,-22,22)}deg)`;

  const sign = dS >= 0 ? '+' : '';
  set('r-delta-s', sign + dS.toFixed(1));
  set('r-sev-sub', `S_agg: ${sAgg.toFixed(1)} | S_mit: ${sMit.toFixed(1)}`);

  const tier  = document.getElementById('r-sev-tier');
  const valEl = document.getElementById('r-delta-s');
  if (!tier || !valEl) return;
  if (dS > 4.0)      { tier.textContent = 'UPPER STATUTORY PENALTY TIER'; tier.className = 'r-status t-red';   valEl.className = 'r-val t-red'; }
  else if (dS >= -1) { tier.textContent = 'MID-RANGE BALANCED PENALTY';   tier.className = 'r-status t-gold';  valEl.className = 'r-val t-gold'; }
  else               { tier.textContent = 'LOWER MINIMUM / REFORMATIVE';  tier.className = 'r-status t-green'; valEl.className = 'r-val t-green'; }
}

// ─── §7: HAVERSINE GEOFENCE RADAR ────────────────────────────
let userPos = { lat: 28.6045, lng: 77.2210 };
const stationPos = { lat: 28.6010, lng: 77.2185 };
const R_EARTH = 6371000;
const GEO_R   = 1500;

function haversine(la1, lo1, la2, lo2) {
  const r = x => x * Math.PI / 180;
  const dLa = r(la2-la1), dLo = r(lo2-lo1);
  const a = Math.sin(dLa/2)**2 + Math.cos(r(la1))*Math.cos(r(la2))*Math.sin(dLo/2)**2;
  return R_EARTH * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
}

let sweepA = 0;
function initRadar() {
  const canvas = document.getElementById('radar-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() { canvas.width = canvas.parentElement.clientWidth; canvas.height = canvas.parentElement.clientHeight; }
  resize();
  window.addEventListener('resize', resize);

  canvas.addEventListener('click', e => {
    const rect = canvas.getBoundingClientRect();
    const cx = rect.width/2, cy = rect.height/2;
    const geoR = Math.min(rect.width, rect.height) * 0.43;
    const scale = GEO_R / geoR;
    const px = e.clientX - rect.left - cx;
    const py = e.clientY - rect.top  - cy;
    userPos.lat = stationPos.lat + (-py * scale) / 111320;
    userPos.lng = stationPos.lng + ( px * scale) / (111320 * Math.cos(stationPos.lat * Math.PI/180));
    updateGeo();
  });

  function draw() {
    const w = canvas.width, h = canvas.height;
    const cx = w/2, cy = h/2;
    const maxR = Math.min(w,h) * 0.45;
    const geoR = maxR * 0.93;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#f4f3ef'; ctx.fillRect(0,0,w,h);

    // Rings
    for (let i = 1; i <= 3; i++) {
      ctx.beginPath(); ctx.arc(cx, cy, (geoR/3)*i, 0, Math.PI*2);
      ctx.strokeStyle = i===3 ? 'rgba(139,94,20,0.35)' : 'rgba(0,0,0,0.09)';
      ctx.lineWidth = i===3 ? 1.5 : 1;
      ctx.setLineDash(i===3 ? [5,5] : []);
      ctx.stroke();
    }
    ctx.setLineDash([]);

    // Crosshairs
    ctx.beginPath(); ctx.strokeStyle='rgba(0,0,0,0.07)'; ctx.lineWidth=1;
    ctx.moveTo(cx-maxR,cy); ctx.lineTo(cx+maxR,cy);
    ctx.moveTo(cx,cy-maxR); ctx.lineTo(cx,cy+maxR);
    ctx.stroke();

    // Sweep
    sweepA += 0.028;
    ctx.save(); ctx.translate(cx,cy); ctx.rotate(sweepA);
    const g = ctx.createRadialGradient(0,0,0,0,0,maxR);
    g.addColorStop(0,'rgba(139,94,20,0.15)'); g.addColorStop(1,'rgba(139,94,20,0)');
    ctx.beginPath(); ctx.moveTo(0,0); ctx.arc(0,0,maxR,-0.45,0); ctx.closePath();
    ctx.fillStyle=g; ctx.fill(); ctx.restore();

    // Station centre
    ctx.beginPath(); ctx.arc(cx,cy,6,0,Math.PI*2);
    ctx.fillStyle='#8b5e14'; ctx.fill();

    // User
    const dist = haversine(stationPos.lat, stationPos.lng, userPos.lat, userPos.lng);
    const dLat = (userPos.lat - stationPos.lat) * 111320;
    const dLng = (userPos.lng - stationPos.lng) * (111320 * Math.cos(stationPos.lat * Math.PI/180));
    const scale = geoR / GEO_R;
    const ux = cx + dLng*scale, uy = cy - dLat*scale;
    const inside = dist <= GEO_R;

    ctx.beginPath(); ctx.arc(ux,uy,8,0,Math.PI*2);
    ctx.fillStyle = inside ? '#1e7a4a' : '#b92424';
    ctx.fill(); ctx.strokeStyle='#fff'; ctx.lineWidth=2; ctx.stroke();

    ctx.fillStyle = inside ? '#14442c' : '#6b1414';
    ctx.font='600 10px Inter,sans-serif';
    ctx.fillText(inside ? 'INSIDE PRECINCT' : 'OUTSIDE PRECINCT', ux+12, uy+4);

    requestAnimationFrame(draw);
  }
  draw();
  updateGeo();
}

function updateGeo() {
  const dist = haversine(stationPos.lat, stationPos.lng, userPos.lat, userPos.lng);
  const inside = dist <= GEO_R;
  set('r-geo-dist', Math.round(dist) + ' m');
  const st = document.getElementById('r-geo-status');
  const panel = document.getElementById('geo-panel');
  if (inside) {
    if (st) { st.textContent = 'ACCESS GRANTED · WITHIN 1500 m PRECINCT'; st.className = 'r-status t-green'; }
    if (panel) panel.className = 'result r-green';
  } else {
    if (st) { st.textContent = 'ACCESS DENIED · OUTSIDE PRECINCT PERIMETER'; st.className = 'r-status t-red'; }
    if (panel) panel.className = 'result r-red';
  }
}

// ─── §8: AUDIT CHAIN ─────────────────────────────────────────
let chainData = [
  { n:1, prev:'0'.repeat(64), payload:'FIR 402/2026 registered at Central PS',    ts:1769501000, sig:'ED25519-ENCLAVE-91A', hash:'' },
  { n:2, prev:'',             payload:'Seizure memo: Mobile device & ledger',      ts:1769502200, sig:'ED25519-ENCLAVE-42B', hash:'' },
  { n:3, prev:'',             payload:'Forensic hash BSA §63 verified by IO',      ts:1769503400, sig:'ED25519-ENCLAVE-87C', hash:'' },
  { n:4, prev:'',             payload:'Charge sheet endorsed by Magistrate',       ts:1769504800, sig:'ED25519-ENCLAVE-19D', hash:'' }
];
let tampered = false;

async function sha256(msg) {
  const buf = new TextEncoder().encode(msg);
  const h = await crypto.subtle.digest('SHA-256', buf);
  return Array.from(new Uint8Array(h)).map(b => b.toString(16).padStart(2,'0')).join('');
}

async function recalcChain() {
  for (let i = 0; i < chainData.length; i++) {
    if (i > 0) chainData[i].prev = chainData[i-1].hash;
    chainData[i].hash = await sha256(`${chainData[i].prev}|${chainData[i].payload}|${chainData[i].ts}|${chainData[i].sig}`);
  }
  renderChain();
}

function renderChain() {
  const el = document.getElementById('chain');
  if (!el) return;
  el.innerHTML = chainData.map((b,i) => {
    const broken = tampered && i >= 1;
    return `<div class="block ${broken?'tampered':'valid'}">
      <div class="block-n">BLOCK #${b.n}</div>
      <div style="font-weight:600;font-size:0.7rem;color:var(--ink-900);margin:2px 0;">${b.payload}</div>
      <div style="font-size:0.6rem;color:var(--ink-300);">Prev: <span class="block-hash ${broken?'tampered':'valid'}">${b.prev.substring(0,14)}…</span></div>
      <div style="font-size:0.6rem;color:var(--ink-300);">Hash: <span class="block-hash ${broken?'tampered':'valid'}">${b.hash.substring(0,16)}…</span></div>
    </div>`;
  }).join('');

  const st    = document.getElementById('r-audit');
  const panel = document.getElementById('audit-panel');
  if (tampered) {
    if (st)    { st.textContent = 'INTEGRITY BREACH · BSA §63 INVALIDATED'; st.className = 'r-status t-red'; }
    if (panel) panel.className = 'result r-red';
  } else {
    if (st)    { st.textContent = 'ALL BLOCKS VERIFIED · BSA §63 COMPLIANT'; st.className = 'r-status t-green'; }
    if (panel) panel.className = 'result r-green';
  }
}

async function tamperChain() {
  tampered = true;
  chainData[1].payload = 'TAMPERED: Unauthorised record injection detected';
  chainData[1].hash = await sha256(`${chainData[1].prev}|${chainData[1].payload}|${chainData[1].ts}|${chainData[1].sig}`);
  renderChain();
}

async function restoreChain() {
  tampered = false;
  chainData[1].payload = 'Seizure memo: Mobile device & ledger';
  await recalcChain();
}

// ─── PIPELINE ANIMATION ───────────────────────────────────────
let pipeIdx = 0, pipeTimer = null;
function runPipeline() {
  const nodes = document.querySelectorAll('.pipe-node');
  if (pipeTimer) { clearInterval(pipeTimer); pipeTimer = null; }
  pipeIdx = 0; nodes.forEach(n => n.classList.remove('active'));
  pipeTimer = setInterval(() => {
    if (pipeIdx > 0) nodes[pipeIdx-1]?.classList.remove('active');
    if (pipeIdx < nodes.length) { nodes[pipeIdx].classList.add('active'); pipeIdx++; }
    else { clearInterval(pipeTimer); pipeTimer = null; }
  }, 850);
}

// ─── HELPERS ─────────────────────────────────────────────────
function set(id, val) { const el = document.getElementById(id); if (el) el.textContent = val; }
function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

const KATEX_DEL = [
  { left:'$$', right:'$$', display:true },
  { left:'$',  right:'$',  display:false }
];

// ─── INIT ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {

  // Nav tabs
  document.querySelectorAll('.nav-tab').forEach(b => b.addEventListener('click', () => switchView(b.dataset.view)));

  // Flipbook
  document.getElementById('btn-prev')?.addEventListener('click', () => goPage(curPage-1));
  document.getElementById('btn-next')?.addEventListener('click', () => goPage(curPage+1));
  document.getElementById('btn-auto')?.addEventListener('click', toggleAuto);
  document.querySelectorAll('.thumb').forEach(t => t.addEventListener('click', () => goPage(parseInt(t.dataset.page))));
  window.addEventListener('keydown', e => {
    if (!document.getElementById('flipbook-view')?.classList.contains('active')) return;
    if (e.key === 'ArrowRight' || e.key === 'PageDown') goPage(curPage+1);
    if (e.key === 'ArrowLeft'  || e.key === 'PageUp')   goPage(curPage-1);
  });

  // Fullscreen
  document.getElementById('btn-fs')?.addEventListener('click', () => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
    else document.exitFullscreen?.();
  });

  // Lab sliders
  const on  = (ids, fn) => ids.forEach(id => document.getElementById(id)?.addEventListener('input', fn));
  const onC = (ids, fn) => ids.forEach(id => document.getElementById(id)?.addEventListener('change', fn));

  on(['s-sim','s-stated','s-inferred','s-insuff'], calcConf);
  on(['s-bm25-rank','s-dense-rank','s-w-bm25','s-w-dense'], calcRRF);
  document.getElementById('bm25-input')?.addEventListener('input', calcBM25);
  on(['s-cust','s-maxp','s-pend'], calcDocket);
  onC(['dk-first','dk-repeat','dk-bail','dk-stay'], calcDocket);
  on(['s-served','s-smax'], calcBNSS);
  onC(['bn-first','bn-repeat','bn-capital'], calcBNSS);
  on(['s-agg','s-mit'], calcSeverity);
  onC(['s-repeat','s-vuln'], calcSeverity);

  // Buttons
  document.getElementById('btn-tamper')?.addEventListener('click', tamperChain);
  document.getElementById('btn-restore')?.addEventListener('click', restoreChain);
  document.getElementById('btn-run')?.addEventListener('click', runPipeline);

  // Initial calculations
  calcConf(); calcRRF(); calcBM25(); calcDocket(); calcBNSS(); calcSeverity();

  // Radar & chain
  initRadar();
  await recalcChain();

  // Mermaid
  if (window.mermaid) {
    try {
      mermaid.initialize({
        startOnLoad: false,
        theme: 'neutral',
        themeVariables: {
          primaryColor: '#fafaf8',
          primaryTextColor: '#111110',
          primaryBorderColor: '#b8842a',
          lineColor: '#8b5e14',
          secondaryColor: '#fdf6e3',
          tertiaryColor: '#f4f3ef',
          fontFamily: 'Inter, system-ui, sans-serif',
          fontSize: '15px'
        },
        flowchart: { useMaxWidth: false, htmlLabels: true, curve: 'basis' },
        sequence: { useMaxWidth: false, diagramMarginX: 40, diagramMarginY: 20, boxMargin: 12, mirrorActors: false },
        classDiagram: { useMaxWidth: false },
        securityLevel: 'loose'
      });
      cacheMermaidSources();
    } catch(e) {
      console.warn('Mermaid init error:', e);
    }
  }

  // KaTeX
  if (window.renderMathInElement) {
    setTimeout(() => {
      try { window.renderMathInElement(document.body, { delimiters: KATEX_DEL, throwOnError: false }); }
      catch(e) { console.warn('KaTeX:', e); }
    }, 400);
  }
});
