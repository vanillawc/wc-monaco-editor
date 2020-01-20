/* eslint no-undef: 0 */
import '../monaco/editor.main.js';

const pathname = new URL(import.meta.url).href;
const monacoDir = pathname.split('/').slice(0, -1).join('/') + '/monaco/';

// eslint-disable-next-line
self.MonacoEnvironment = {
  getWorkerUrl: function (moduleId, label) {
    if (label === 'json') {
      return `${monacoDir}json.worker.js`;
    }
    if (label === 'css') {
      return `${monacoDir}css.worker.js`;
    }
    if (label === 'html') {
      return `${monacoDir}html.worker.js`;
    }
    if (label === 'typescript' || label === 'javascript') {
      return `${monacoDir}ts.worker.js`;
    }
    return `${monacoDir}editor.worker.js`;
  }
};

export class WCMonacoEditor extends HTMLElement {
  static get observedAttributes () {
    return ['src', 'value'];
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (!this.__initialized) { return; }
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }

  get src () { return this.getAttribute('src'); }
  set src (value) {
    this.setAttribute('src', value);
    this.setSrc();
  }

  get value () { return this.__editor.getValue(); }
  set value (value) {
    this.__editor.setValue(value);
  }

  constructor () {
    super();
    this.__initialized = false;
    this.__editor = null;
  }

  async connectedCallback () {
    this.style.display = 'block';
    if (!this.id) { this.id = 'editor'; }
    if (!this.style.width) { this.style.width = '100%'; }
    if (!this.style.height) { this.style.height = '100%'; }

    this.__editor = monaco.editor.create(document.getElementById(this.id), {
      language: this.getAttribute('language'),
      theme: 'vs-dark',
      automaticLayout: true
    });

    if (this.hasAttribute('src')) {
      this.setSrc();
    }
    this.__initialized = true;
  }

  async setSrc () {
    const src = this.getAttribute('src');
    const contents = await this.fetchSrc(src);
    this.__editor.setValue(contents);
  }

  async fetchSrc (src) {
    const response = await fetch(src);
    return response.text();
  }
}

customElements.define('wc-monaco-editor', WCMonacoEditor);
