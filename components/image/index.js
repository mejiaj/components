customElements.define(
  "smaller-img",
  class extends HTMLImageElement {
    // Default size, if not specified.
    constructor() {
      super();

      this.width = this.width / 2;
      this.height = this.width;
    }
  },
  { extends: "img" }
);
