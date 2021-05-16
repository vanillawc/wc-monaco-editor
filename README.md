<h1 align="center">&lt;wc-monaco-editor&gt; Easily Embed a Monaco Editor</h1>

<div align="center">
  <a href="https://github.com/vanillawc/wc-monaco-editor/releases"><img src="https://badgen.net/github/tag/vanillawc/wc-monaco-editor" alt="GitHub Releases"></a>
  <a href="https://www.npmjs.com/package/@vanillawc/wc-monaco-editor"><img src="https://badgen.net/npm/v/@vanillawc/wc-monaco-editor" alt="NPM Releases"></a>
  <a href="https://github.com/vanillawc/wc-monaco-editor/actions"><img src="https://github.com/vanillawc/wc-monaco-editor/workflows/Latest/badge.svg" alt="Latest Status"></a>
  <a href="https://github.com/vanillawc/wc-monaco-editor/actions"><img src="https://github.com/vanillawc/wc-monaco-editor/workflows/Release/badge.svg" alt="Release Status"></a>

  <a href="https://discord.gg/aSWYgtybzV"><img alt="Discord" src="https://img.shields.io/discord/723296249121603604?color=%23738ADB"></a>
  <a href="https://www.webcomponents.org/element/vanillawc/wc-monaco-editor"><img src="https://img.shields.io/badge/webcomponents.org-published-blue.svg" alt="Published on WebComponents.org"></a>
  <!-- <a href="https://bundlephobia.com/result?p=@vanillawc/wc-monaco-editor"><img src="https://badgen.net/bundlephobia/minzip/@vanillawc/wc-monaco-editor" alt="Bundlephobia"></a> -->
</div>

## Installation

*Installation*
```sh
npm i @vanillawc/wc-monaco-editor
```

*Import from NPM*
```html
<script type="module" src="node_modules/@vanillawc/wc-monaco-editor/index.js"></script>
```

*Import from CDN*
```html
<script type="module" src="https://cdn.jsdelivr.net/gh/vanillawc/wc-monaco-editor@1/index.js"></script>
```

## Demo

Try it out [here](https://vanillawc.github.io/wc-monaco-editor/demo/index.html)

## Usage

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

### Basic Usage

To edit plaintext

```html
<wc-monaco-editor></wc-monaco-editor>
```

### Language Support

Language support enables syntax highlighting, code completion, etc.

```html
<wc-monaco-editor language="javascript"></wc-monaco-editor>
```

### External Source

Load an external source file with the `src` attribute

```html
<wc-monaco-editor src="sample.js" language="javascript"></wc-monaco-editor>
```

### Advanced Configuration

A config can be provided for advanced use cases that require the full spectrum of Monaco Editor options.

```html
<wc-monaco-editor config="config.json"></wc-monaco-editor>
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

[EditorOptions]: https://microsoft.github.io/monaco-editor/api/modules/monaco.editor.html#editoroptions

## Contributing

See [CONTRIBUTING.md](https://github.com/vanillawc/vanillawc/blob/main/CONTRIBUTING.md)
