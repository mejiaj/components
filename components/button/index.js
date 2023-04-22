class JmButton extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `<button type="button">Custom button component</button>`
  }
}

window.customElements.define("jm-button", JmButton);

export default JmButton;
