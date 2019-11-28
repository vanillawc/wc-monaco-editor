/* eslint no-undef: 0 */
import '../vendor/monaco/editor-main.bundle.js';

// eslint-disable-next-line
self.MonacoEnvironment = {
  getWorkerUrl: function (moduleId, label) {
    if (label === 'json') {
      return '../vendor/monaco/json.worker.bundle.js';
    }
    if (label === 'css') {
      return '../vendor/monaco/css.worker.bundle.js';
    }
    if (label === 'html') {
      return '../vendor/monaco/html.worker.bundle.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return '../vendor/monaco/ts.worker.bundle.js';
    }
    return '../vendor/monaco/editor.worker.bundle.js';
  }
};

export class WCMonacoEditor extends HTMLElement {
  constructor () {
    super();
    this.__element = null;
    this.__editor = null;
  }

  static get observedAttributes () {
    return ['src', 'value'];
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this[name] = newValue;
    }
  }

  get src () { return this.getAttribute('src'); }
  set src (value) {
    this.setAttribute('src', value);
    this.fetchSrc();
  }

  get value () { return this.__editor.getValue(); }
  set value (value) {
    this.__editor.setValue(value);
  }

  async connectedCallback () {
    this.initialize();

    if (this.hasAttribute('src')) {
      this.fetchSrc();
    }
  }

  initialize () {
    // set a unique id (defaults to 'editor')
    this.__element = document.createElement('div');
    this.__element.id = this.hasAttribute('id') ? `${this.getAttribute('id')}-editor` : 'editor';
    // set styling (defaults to fit outer container)
    this.__element.style = this.hasAttribute('style') ? this.style.cssText : 'width:100%;height:100%';
    this.appendChild(this.__element);

    // create the editor
    this.__editor = monaco.editor.create(document.getElementById(this.__element.id), {
      language: this.getAttribute('language'),
      theme: 'vs-dark'
    });
  }

  async fetchSrc () {
    // fetch the external markdown source
    const response = await fetch(this.src);
    const contents = await response.text();
    this.__editor.setValue(contents);
  }
}

customElements.define('wc-monaco-editor', WCMonacoEditor);
