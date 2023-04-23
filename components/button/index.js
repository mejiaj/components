// https://html.spec.whatwg.org/multipage/indices.html#element-interfaces
class JmButton extends HTMLButtonElement {
  constructor() {
    super();
    // Add event listeners here.
    this.addEventListener("click", (e) => console.log(this));
  }
  connectedCallback() {
    this.textContent = `Custom button component`;
  }
}

if ("customElements" in window) {
  customElements.define("jm-button", JmButton, { extends: "button" });
}
