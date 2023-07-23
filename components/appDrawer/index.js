/**
 *
 * App Drawer
 *
 * Includes open property, disabled property, and toggleDrawer() method.
 *
 * @class AppDrawer
 * @extends {HTMLElement}
 */
class AppDrawer extends HTMLElement {
  //
  // A getter/setter for open property.
  //
  get open() {
    return this.hasAttribute("open");
  }

  // Toggle attribute.
  // @TODO: Check if toggleAttribute("open") does the same thing.
  set open(val) {
    if (val) {
      this.setAttribute("open", "");
    } else {
      this.removeAttribute("open");
    }

    this.toggleDrawer();
  }

  //
  // A getter/setter for disabled property.
  //
  get disabled() {
    return this.hasAttribute("disabled");
  }

  // Toggle attribute.
  // @TODO: Check if toggleAttribute("disabled") does the same thing.
  set disabled(val) {
    if (val) {
      this.setAttribute("disabled", "");
    } else {
      this.removeAttribute("disabled");
    }
  }

  /**
   * Only called for the disabled & open attributes from `observedAttributes`.
   */
  attributeChangedCallback(name, oldValue, newValue) {
    // ? Drawer is disabled, update keyboard screen reader behavior.
    if (this.disabled) {
      this.setAttribute("tabindex", "-1");
      this.setAttribute("aria-disabled", "true");
    } else {
      this.setAttribute("tabindex", "0");
      this.setAttribute("aria-disabled", "false");
    }
    // @TODO: also react to the `open` attribute changing.
  }

  constructor() {
    super();

    this.addEventListener("click", (e) => {
      // Don't toggle drawer if it's disabled.
      if (this.disabled) return;

      this.toggleDrawer();
    });
  }

  toggleDrawer() {}
}

customElements.define("app-drawer", AppDrawer);
