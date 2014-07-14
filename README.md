slider-polymer
==============

A Slider web component using Polymer.js

## Usage example

```bash
bower init
bower install slider-polymer --save
# open with your favourite browser!
```

```html
<html>
  <head>
    <script src="bower_components/platform/platform.js"></script>
    <link rel="import" href="bower_components/slider-polymer/index.html">
  </head>
  <body>
    <slider-component>
      <img src="http://lorempixel.com/1200/500/people/1">
      <img src="http://lorempixel.com/1200/500/people/2">
      <img src="http://lorempixel.com/1200/500/people/3">
      <img src="http://lorempixel.com/1200/500/people/4">
      <img src="http://lorempixel.com/1200/500/people/5">
    </slider-component>
  </body>
</html>
```

### Adding a brand accent color to the slider
Just add the following to `<head>` or to your css file.

```css
slider-component::shadow .accent { background-color: CUSTOM_COLOR_HERE; }

/* For the :hover effect */
slider-component::shadow .accent:hover { background-color: CUSTOM_COLOR_HERE; }
```

### Changing the opacity
Just add the following to `<head>` or to your css file.

```css
/* Base opacity */
slider-component::shadow .accent { opacity: CUSTOM_VALUE_HERE; }

/* Opacity on :hover */
slider-component::shadow .accent:hover { opacity: CUSTOM_VALUE_HERE; }
```
