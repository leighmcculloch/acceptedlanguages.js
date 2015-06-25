# languages.js

A simple JavaScript library that tells you the accepted languages of the visitor configured in their browser, and the languages relevant given the languages that the current page is alternatively available in.

## Usage

Assuming a browser is configured with the languages:
`pt-BR, pt, zh-Hans, en-US`

```html
<head>
  <link rel="alternate" hreflang="pt-BR" href="..." />
  <link rel="alternate" hreflang="es" href="..." />
  <link rel="alternate" hreflang="en" href="..." />
  <script src="languages.js"></script>
  <script type="text/javascript">
    console.log('Accepted:  ' + window.languages.accepted);
    console.log('Expanded:  ' + window.languages.acceptedExpanded);
    console.log('Alternate: ' + window.languages.alternate);
    console.log('Relevant:  ' + window.languages.relevant);
  </script>
</head>
```

Will output:

```text
Accepted:  pt-BR,pt,zh-Hans,en-US
Expanded:  pt-BR,pt,zh-Hans,zh,en-US,en
Alternate: pt-BR,es,en
Relevant:  pt-BR,en
```

## Browser Compatibility

All browsers supporting ECMAScript 5: Chrome, Safari, Firefox, IE9, etc.

Chrome and Firefox may return multiple languages. Safari and IE will return only a single language.

Mobile browser compatibility is unknown.
