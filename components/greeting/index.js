/*
  ? Following Go Make Things tutorial
    https://gomakethings.com/how-to-create-a-web-component-with-vanilla-js/
    https://gomakethings.com/how-to-add-interactivity-to-browser-native-web-components-with-vanilla-js/
*/

class GreetingMessage extends HTMLElement {
  /*
   * Run when element is created, but before injected.
   */
  constructor() {
    super();

    this.innerHTML = `
      <p>
        <button type="button">Hello</button>
      </p>
      <div class="message" aria-live="polite">Placeholder</div>
    `;
  }

  /*
   * Create a list of attributes to observe.
   */
  static get observedAttributes() {
    return ["logout"];
  }

  /*
   * Runs when value of a component attribute has changed.
   * @param {String} name     - Attribute name.
   * @param {String} oldValue - Old attribute value.
   * @param {String} newValue - New attribute value.
   */
  attributeChangedCallback(name, oldValue, newValue) {
    let btn = this.querySelector("button");
    let target = this.querySelector(".message");

    // Remove the button.
    if (btn) {
      btn.removeEventListener("click", this.clickHandler);
      btn.remove();
    }

    if (target) {
      let name = this.getAttribute("name");
      target.textContent = `Bye, ${name ? name : "friend"}! See you next time.`;
    }
  }

  clickHandler(event) {
    let host = event.target.closest("greeting-message");
    let target = host.querySelector(".message"); // Get message inside

    if (!target) return;

    let name = host.getAttribute("name");

    // Inject message.
    target.textContent = `Hello there ${
      name ? name : "friend"
    }! Have a nice day.`;

    // Clear message after 5 seconds.
    setTimeout(() => {
      target.textContent = "";
    }, 5000);
  }

  /*
   * Runs every time element is appended or moved in DOM.
   */
  connectedCallback() {
    let btn = this.querySelector("button");
    if (!btn) return;

    btn.addEventListener("click", this.clickHandler);
  }

  /*
   * Runs when element is removed from DOM.
   */
  disconnectedCallback() {
    let btn = this.querySelector("button");
    if (!btn) return;
    btn.removeEventListener("click", this.clickHandler);
  }
}

if ("customElements" in window) {
  customElements.define("greeting-message", GreetingMessage);
}
