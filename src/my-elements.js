import {LitElement, html} from 'lit-element';
import './shared-styles';

class MyElement extends LitElement {
  render() {
    return html`
    <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>
      
      <div>Hello from MyElement!</div>
    `;
  }
}

customElements.define('my-element', MyElement);