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
- `style` - CSS styling (default `height: 100%; width: 100%;`)

*Note: The ID attribute is required if there are multiple editors*

**Properties**

- `value` - get/set the editor's contents

### Load Javascript from an external source

```html
<wc-monaco-editor language="javascript" src="./assets/sample.js"></wc-monaco-editor>
```

***Demo: [WC-Monaco-Editor - Demo][]***

## Demos

The demo can also be run locally with

```sh
npm run start
```

[WC-Monaco-Editor - Demo]: https://vanillawc.github.io/wc-monaco-editor/demo/index.html

