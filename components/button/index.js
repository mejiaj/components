/*
 * 1. Let's create a custom button web component.
 *    We need a class that extends an HTML element.
 */

// ! Illegal constructor: we need to get the right [HTML interface](https://html.spec.whatwg.org/multipage/indices.html#element-interfaces)
// !
// ! Otherwise we're going to create an element, but we won't have access
// ! to any button properties and functionality.
// class JmButton extends HTMLButtonElement {
class JmButton extends HTMLElement {
  /*
   * 3. Every component needs a constructor.
   *
   * Constructor runs when element is created, but before it's
   * injected into the DOM.
   *
   * We can also attach event listeners in this method.
   */
  constructor() {
    /*
     * 3.1. We call super to access properties with `this`.
     */
    super();
    this.addEventListener("click", (e) => console.log(this));

    /*
     * 3.2. We can also set properties if we need to.
     */
    if (!this.hasAttribute("type")) {
      this.setAttribute("type", "button");
    }

    /*
     * 3.3. We can also set a default base class if we need to.
     */
    //
    this.classList.add("jm-button");
  }

  /*
   * Create a list of attributes to observe.
   */
  // static get observedAttributes() {}

  /*
   * 4. Runs every time element is appended or moved in DOM.
   */
  connectedCallback() {
    // this.textContent = `Custom button component`;
  }

  /*
   *
   * Other lifecycle methods
   * =======================
   *
   * disconnectedCallback()     - Component removed from DOM.
   *
   * adoptedCallback()          - Component is moved to an iframe.
   *                              When adopted, constructor() won't be called.
   *
   * attributeChangedCallback() - An attribute is added, removed, or changed.
   *
   */
}

if ("customElements" in window) {
  // !
  // ! Illegal constructor: we didn't extend button element.
  // !
  customElements.define("jm-button", JmButton);
  // customElements.define("jm-button", JmButton, { extends: "button" });
}
