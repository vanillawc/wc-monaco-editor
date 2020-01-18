/* eslint no-undef: 0 */
import '../monaco/editor.main.js';

// eslint-disable-next-line
self.MonacoEnvironment = {
  getWorkerUrl: function (moduleId, label) {
    if (label === 'json') {
      return '../monaco/json.worker.js';
    }
    if (label === 'css') {
      return '../monaco/css.worker.js';
    }
    if (label === 'html') {
      return '../monaco/html.worker.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return '../monaco/ts.worker.js';
    }
    return '../monaco/editor.worker.js';
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
    this.__element = document.createElement('div');
    this.__element.id = this.hasAttribute('id')
      ? `${this.getAttribute('id')}-editor`
      : 'editor';
    this.__element.style = this.hasAttribute('style')
      ? this.style.cssText
      : 'width:100%;height:100%';
    this.appendChild(this.__element);
    this.__editor = monaco.editor.create(document.getElementById(this.__element.id), {
      language: this.getAttribute('language'),
      theme: 'vs-dark'
    });
  }

  async connectedCallback () {
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
