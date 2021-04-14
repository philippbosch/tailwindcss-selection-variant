# tailwindcss-selection variant

Adds a variant for targeting user-selected text ranges ([`::selection`](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection)) to [Tailwind CSS](https://www.tailwindcss.com/).


## Example

Given this HTML:

```html
<div class="selection:bg-red-500 selection:text-white">
    Lorem ipsum dolor sit amet
</div>
```

If the user selects parts of the text within this `<div>` the selection highlight rendered by the browser will be white text on red background.

This is the relevant part of the generated CSS (simplified):

```css
.selection\:bg-red-500 ::selection {
    background-color: #f56565;
}

.selection\:text-white ::selection {
    color: #fff;
}
```

## Requirements

This plugin requires **Tailwind CSS v1.x**.

## Installation

```shell
npm install --save-dev tailwindcss-selection-variant
```

or

```shell
yarn add --dev tailwindcss-selection-variant
```

## Usage

In your _tailwind.config.js_:

```js
module.exports = {
  // …
  plugins: [
    // …
    require("tailwindcss-selection-variant")
    // …
  ],
  variants: {
   extend: {
      textColor: [
        // …
        "selection"
      ],
      backgroundColor: [
        // …
        "selection"
      ],
    },
  }

  // …
};
```

# Note

Not all CSS properties (and thus Tailwind utilities) can be used with `::selection`. See the [list of allowable properties on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection#Allowable_properties)

## License

[MIT](https://philippbosch.mit-license.org/)
