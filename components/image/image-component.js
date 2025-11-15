class ImageComponent extends HTMLElement {
  static get observedAttributes() {
    return ["tag", "source", "subtitle"];
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
  const width = this.getAttribute("width") || "100%";
  const height = this.getAttribute("height") || "auto";

  div.innerHTML = `
    <div class="image-wrapper">
      <img id="${this.tag}" src="${this.source}" alt="${this.subtitle}">
      <sub>${this.subtitle}</sub>
    </div>
    <style>
      :host {
        display: block;
        text-align: center;
      }

      .image-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      img {
        width: ${width};
        height: ${height};
        display: block;
        margin: 0 auto;
      }

      sub {
        margin-top: 0.5rem;
        font-size: 1rem;
        font-style: italic;
        text-align: center;
      }
    </style>
  `;

  this.shadowRoot.innerHTML = "";
  this.shadowRoot.appendChild(div);
}
}
customElements.define("image-component", ImageComponent);
