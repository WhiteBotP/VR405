new gridjs.Grid({
  columns: ["Mode", "Intake Valve", "Exahust Valve"],
  data: [
    ["Rest", "OFF", "OFF"],
    ["Static Force", "ON", "OFF"],
    ["Vibration", "ON <--> OFF", "ON"],
  ],
}).render(document.getElementById("table-1"));


new gridjs.Grid({
  columns: ["Terrain Material", "Mode", "Frequency / Force", "Haptic Rationale"],
  data: [
    ["Asphalt", "Vibration", "10 – 30 Hz (Low Amp)", "Simulates soft, elastic damping and fine fiber textures."],
    ["Grass", "Vibration", "40 – 70 Hz (Medium Amp)", "Mimics the irregular resistance of grass blades."],
    ["Yoga Mat / Carpet", "Vibration", "80 – 100 Hz (High Amp)", "Replicates micro-impacts of a hard, granular surface."],
    ["Gravel (Small Pebbles)", "Static Force", "1 - 2 N (Small Force)", "Uses individual actuators for point intrusion."],
    ["Uneven Rocks", "Static Force", "4 - 5 N (Large Force)", "Simulates large-scale displacement against the MLA."]
  ],
  style: {
    table: {
      'font-size': '0.9rem'
    }
  }
}).render(document.getElementById("table-2"));

// Table 5: Two-Way ANOVA
new gridjs.Grid({
  columns: ["Source of Variation", "SS", "df", "MS", "F-Value", "P-Value", "Significance"],
  data: [
    ["Foot Side", "55.45", "1", "55.45", "0.61", "0.437", "ns (Not Significant)"],
    ["Direction", "2312.47", "2", "1156.24", "12.66", "< 0.001", "Extremely Sig (***)"],
    ["Foot × Direction", "497.05", "2", "248.53", "2.72", "0.068", "Marginally Sig (.)"],
    ["Residuals/Error", "25753.07", "282", "91.32", "-", "-", "-"]
  ]
}).render(document.getElementById("table-anova-results"));

// Table 6: Tukey HSD
new gridjs.Grid({
  columns: ["Group 1", "Group 2", "Mean Diff", "P-adj Value", "Significant?", "Conclusion"],
  data: [
    ["Diagonal", "Horizontal", "-8.20", "< 0.001", "True", "Diagonal significantly > Horizontal"],
    ["Diagonal", "Vertical", "-6.11", "< 0.001", "True", "Diagonal significantly > Vertical"],
    ["Horizontal", "Vertical", "2.09", "0.211", "False", "No significant difference"]
  ]
}).render(document.getElementById("table-tukey-results"));

new gridjs.Grid({
  columns: ["Foot", "Diagonal (mm)", "Horizontal (mm)", "Vertical (mm)", "Total (mm)"],
  data: [
    ["LEFT FOOT", "37.81", "32.72", "35.46", "34.71"],
    ["RIGHT FOOT", "42.66", "31.34", "32.79", "33.83"]
  ],
  style: {
    table: {
      'font-size': '0.95rem'
    },
    th: {
      'background-color': '#fff4e6',
      'color': '#333'
    }
  }
}).render(document.getElementById("table 4"));

new gridjs.Grid({
  columns: ["Arch Type", "Arch Height Threshold", "Base Design Strategy", "Clinical Correlation"],
  data: [
    ["Low Arch (Flat)", "≤ 16 mm", "Minimalist Wedge", "Corresponds to planus morphology with maximum contact area[cite: 112]."],
    ["Normal Arch", "16 mm - 21 mm", "Standard Contour", "Typical rectus foot proportions for balanced pressure distribution."],
    ["High Arch (Cavus)", "≥ 26 mm", "Elevated Support", "High-profile base to bridge the deep arch cavity and prevent sensory loss[cite: 112]."]
  ],
  style: {
    table: {
      'font-size': '0.9rem'
    }
  }
}).render(document.getElementById("table-arch-classification"));



new gridjs.Grid({
  columns: [
    { name: "Stimulus Mode", width: '150px' },
    { name: "Chi-Square (χ²)", width: '150px' },
    { name: "df", width: '60px' },
    { name: "P-Value", width: '100px' },
    { name: "Significance", width: '180px' }
  ],
  resizable: true,
  data: [
    ["Static Force / Stiffness", "7.33", "4", "> 0.001", "Not Significant (ns)"],
    ["Static Force / Flatness", "63.227", "4", "< 0.001", "Extremely Sig (***)"],
    ["Vibration / Roughness", "144.181", "9", "< 0.001", "Extremely Sig (***)"],
    ["Vibration / Flatness", "177.640", "9", "< 0.001", "Extremely Sig (***)"],
    ["Vibration / Stiffness", "92.505", "9", "< 0.001", "Extremely Sig (***)"]
  ],
  style: {
    th: {
      'white-space': 'nowrap',
      'background-color': '#f8f9fa',
      'padding': '12px 8px'
    },
    th: {
      'background-color': '#f8f9fa',
      'color': '#333'
    }
  }
}).render(document.getElementById("table-friedman-results"));


class TableComponent extends HTMLElement {
  static get observedAttributes() {
    return ["subtitle"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, _, newValue) {
    this[name] = newValue;
  }

  render() {
    const div = document.createElement("div");
    div.innerHTML = `
    <slot></slot>
    <sub>${this.subtitle}</sub>
    <style>
      :host {
        display: block;
        text-align: center;
      }

      sub {
        font-size: 1rem;
        font-style: italic;
      }
    </style>
  `;

    this.shadowRoot.appendChild(div);
  }
}

customElements.define("table-component", TableComponent);
