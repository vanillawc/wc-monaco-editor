[![GitHub release](https://img.shields.io/github/v/release/vanillawc/wc-monaco-editor.svg)](https://github.com/vanillawc/wc-monaco-editor/releases)
[![npm](https://badgen.net/npm/v/@vanillawc/wc-monaco-editor)](https://www.npmjs.com/package/@vanillawc/wc-monaco-editor)
[![downloads](https://badgen.net/npm/dt/@vanillawc/wc-monaco-editor)](https://www.npmjs.com/package/@vanillawc/wc-monaco-editor)
[![Known Vulnerabilities](https://snyk.io/test/npm/@vanillawc/wc-monaco-editor/badge.svg)](https://snyk.io/test/npm/@vanillawc/wc-monaco-editor)
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/vanillawc/wc-monaco-editor/master/LICENSE)
[![Actions Status](https://github.com/vanillawc/wc-monaco-editor/workflows/Release/badge.svg)](https://github.com/vanillawc/wc-monaco-editor/actions)

A Vanilla Web Component to embed a Monaco code editor into a web page

 <!-- TODO: Add video graphic here -->

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
- `src` - load an external source file
- `language` - set the source language
- `style` - CSS styling (default `height:100%;width:100%;`)

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

