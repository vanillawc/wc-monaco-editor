[![GitHub Releases](https://badgen.net/github/tag/vanillawc/wc-monaco-editor)](https://github.com/vanillawc/wc-monaco-editor/releases)
[![NPM Release](https://badgen.net/npm/v/@vanillawc/wc-monaco-editor)](https://www.npmjs.com/package/@vanillawc/wc-monaco-editor)
[![MIT License](https://badgen.net/github/license/vanillawc/wc-monaco-editor)](https://raw.githubusercontent.com/vanillawc/wc-monaco-editor/master/LICENSE)
[![Published on WebComponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/vanillawc/wc-monaco-editor)
[![Latest Status](https://github.com/vanillawc/wc-monaco-editor/workflows/Latest/badge.svg)](https://github.com/vanillawc/wc-monaco-editor/actions)
[![Release Status](https://github.com/vanillawc/wc-monaco-editor/workflows/Release/badge.svg)](https://github.com/vanillawc/wc-monaco-editor/actions)
<!-- [![Bundlephobia](https://badgen.net/bundlephobia/minzip/@vanillawc/wc-monaco-editor)](https://bundlephobia.com/result?p=@vanillawc/wc-monaco-editor) -->

A Vanilla Web Component to embed a Monaco code editor into a web page

-----

## Installation

```sh
npm i @vanillawc/wc-monaco-editor
```

Then import the `index.js` file at the root of the package.

-----

## Usage

```html
<wc-monaco-editor language="markdown"></wc-monaco-editor>
```

**Attributes**

- `id` - the editor id (default `editor`)
- `src` - load the source from an external file
- `language` - set the source language
- `font-size` - set the font size (default `14px`);
- `tab-size` - set the tab size (in spaces) (default `2`)
- `style` - CSS styling (default `height: 100%; width: 100%;`)
- `no-minimap` - disables the source minimap when present
- `word-wrap` - enables word wrapping when present
- `wrap-indent` - set the indent `['none','same','indent','deepindent']` for word wrapped lines (default `none`)

*Note: The ID attribute is required if there are multiple editors*

**Properties**

- `editor` - the Monaco editor instance
- `src` - get/set the `src` attribute from JS
- `value` - get/set the editor's contents
- `tabSize` - get/set the `tab-index` attribute from JS

### Load Javascript from an external source

```html
<wc-monaco-editor src="./sample.js" language="javascript"></wc-monaco-editor>
```

***Demo: [WC-Monaco-Editor - Demo][]***

## Advanced Configuration

A config can be provided for advanced use cases that require the full spectrum of Monaco Editor options.

```html
<wc-monaco-editor config="./editor-config.json"></wc-monaco-editor>
```

*config.json*
```json
{
  "language": "javascript",
  "minimap": {
    "enabled": false
  },
  "tabSize": 2,
  "fontSize": 16,
  "wordWrap": "on",
  "lineNumbersMinChars": 3,
  "wrappingIndent": "same",
  "mouseWheelZoom": true,
  "copyWithSyntaxHighlighting": false
}
```

*Note: See the [EditorOptions][] official documentation for all available options.* 

## Demos

The demo can also be run locally with

```sh
npm run start
```

[WC-Monaco-Editor - Demo]: https://vanillawc.github.io/wc-monaco-editor/demo/index.html
[EditorOptions]: https://microsoft.github.io/monaco-editor/api/modules/monaco.editor.html#editoroptions
