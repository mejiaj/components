# Components

Experimenting with web components. There are comments in code if you'd like to follow along. If you're brand new, checkout the button example to get started.

## Requirements

No build tools, yet, but you need a live server to be able to view/develop. You
can use the [VS Code Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) to quickly get developing.

> **Note**
> If you're modifying component styles, sometimes you might need to manually
> refresh the browser. At least, on Firefox developer edition.

### Where things live

```bash
.
├── assets          # Static assets - like global styles.
│   └── styles
├── components      # Component specific code - scripts & styles.
│   ├── alert       # 2. Component uses slots and custom styles.
│   ├── button      # 1. Most simple example.
│   ├── greeting
│   └── image
└── index.html      # Main preview - for components.
```

1. **Button** is the most basic example and first web component.
2. **Alert** is a slightly more advanced component that uses a custom stylesheet and slots.

### Related branches

1. `native-components` [main]
1. `native-components-00`: Introduction to components.
1. `native-components-01`: Initial alert example.
1. `native-components-02`: Intermediate alert example.
1. `native-components-03`: Advanced alert example.
