# acceptedlanguages.js

A simple JavaScript library that exposes the accepted languages of the visitor configured in their browser, and the languages relevant given the languages that the current page is alternatively available in.

## Usage

### Globals

Include `acceptedlanguages.js` into the page and call any of the

```html
<head>
  <link rel="alternate" hreflang="pt-BR" href="..." />
  <link rel="alternate" hreflang="es" href="..." />
  <link rel="alternate" hreflang="en" href="..." />
  <script src="acceptedlanguages.js"></script>
  <script type="text/javascript">
    console.log('Accepted:  ' + window.acceptedlanguages.accepted);
    console.log('Alternate: ' + window.acceptedlanguages.alternate);
    console.log('Relevant:  ' + window.acceptedlanguages.relevant);
  </script>
</head>
```

If the browser is configured with the languages `pt, zh-Hans, en-US`, the above would output:

```text
Accepted:  pt-BR,pt,zh-Hans,en-US
Alternate: pt-BR,es,en
Relevant:  pt-BR,en
```

### RequireJS

Include the library and then use as a dependency:

```javascript
define(['acceptedlanguages'], function(acceptedLanguages) {
  console.log('Accepted:  ' + acceptedlanguages.accepted);
  console.log('Alternate: ' + acceptedlanguages.alternate);
  console.log('Relevant:  ' + acceptedlanguages.relevant);
});
```

## Browser Compatibility

All browsers supporting ECMAScript 5: Chrome, Safari, Firefox, IE9, etc. If you need to support older browsers use [es5-shims](https://github.com/es-shims/es5-shim) to get the following:
* `Array.forEach`
* `Array.filter`
* `Array.map`

Expect that Chrome and Firefox may return multiple languages while Safari and IE will return only a single language.
