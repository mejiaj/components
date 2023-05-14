/*
 * Alert component.
 *
 * This component will use:
 * 1. A template for controlling markup.
 * 2. Shadow-dom for controlling styles.
 */

/*
 *
 * 1. Create the inner template.
  ?   Note: Slots can **only** be top-level.
 *
 */
const template = document.createElement("template");
// template.innerHTML = `
//   <style>
//     :host {
//       background: green;
//     }
//   </style>
//   <slot></slot>
// `;

/*
 *
 * 6. Adding named slots for more control.
 *
 *    A few things to note; some styles work for `:host`, but not all.
 *    If we add an outline, it'll be added to both slots.
 *
 *    Notice we're setting a color for slot body, but that's being overriden by
 *    the more specific paragraph style in `index.css`
 *
 *    Also, we're setting the empty <slot></slot> so that the first example
 *    doesn't break.
 *
 *    We can't use `::slotted()` to target deeper levels like in line 56.
 *
 */
// template.innerHTML = `
//   <style>
//     :host {
//       outline: 1px dashed darkblue;
//     }

//     slot[name="title"] {
//       background: orange;
//     }

//     ::slotted(h4),
//     ::slotted(body) {
//       color: darkblue;
//       margin: 0 !important;
//     }

//     ::slotted(body p) {
//       color: red;
//     }
//   </style>

//   <div class="wrapper">
//     <slot></slot>
//     <slot name="title"></slot>
//     <slot name="body"></slot>
//   </div>
// `;

/*
 *
 * 7. Styling can get pretty crazy, so let's use a CSS file.
 *    We're going to reset the template and append a stylesheet.
 *
 */
template.innerHTML = `
  <div class="wrapper">
    <slot></slot>
    <slot name="title"></slot>
    <slot name="body"></slot>
  </div>
`;

// 9. Creating stylesheet outside will cause some weird effects.
//
// const JmAlertStylesheet = document.createElement("link");
// JmAlertStylesheet.setAttribute("rel", "stylesheet");
// JmAlertStylesheet.setAttribute("href", "./components/alert/index.css");

class JmAlert extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    /*
     *
     * 2. Open mode lets us access the shadow DOM using JS.
     *
     *    Shadow DOM rules:
     *    1. IDs must be unique ONLY inside that instance.
     *    2. Can't target inside shadow DOM elements with other scripts.
     *    3. Styles applied from shadow tree, not DOM. This one can be weird
     *       because CSS inheritance still applies.
     *
     */
    this.attachShadow({ mode: "open" });

    /*
     *
     * 3. We can save the shadow root.
     *
     */
    const alertShadowDom = this.shadowRoot;

    /*
     *
     * 4. And append our template to our saved shadow root.
     *
     */
    alertShadowDom.appendChild(template.content.cloneNode(true));

    /*
     *
     * 5. We can also add styles in the connectedCallback().
     *    Create a style element and then add some styles with textContent.
     *    Append to the DOM when finished.
     *
     */
    // const rootStyles = document.createElement("style");
    // rootStyles.textContent = `
    //   :host {
    //     background: lightblue;
    //   }
    // `;
    // alertShadowDom.appendChild(rootStyles);

    /*
     *
     * 10. If we create inside component class, we'll see that styling issue fixed.
     *
     */
    const JmAlertStylesheet = document.createElement("link");
    JmAlertStylesheet.setAttribute("rel", "stylesheet");
    JmAlertStylesheet.setAttribute("href", "./components/alert/index.css");

    /*
     *
     * 8. And then append it.
     *
     */
    alertShadowDom.appendChild(JmAlertStylesheet);
  }
}

window.customElements.define("jm-alert", JmAlert);
