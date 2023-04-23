customElements.define(
  "bigger-img",
  class extends HTMLImageElement {
    // Default size, if not specified.
    constructor(width = 100, height = 100) {
      super();

      this.width = width * 5;
      this.height = height * 5;
    }
  },
  { extends: "img" }
);
