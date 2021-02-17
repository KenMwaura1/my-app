/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */


import {LitElement, html, css} from 'lit-element';

import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/iron-form/iron-form.js';
import {litStyles} from './lit-styles.js';

class MyView1 extends LitElement {
  static get styles() {
    return [
      litStyles,
      css `
      host {
        display: block; 

        padding: 10px;
      }`
    ]
  }
  render() {
    return html`

    <iron-form>
      <form method="GET" action="/form/handler">
        <input type="text" name="name" value="Batman">
        <input type="checkbox" name="donuts" checked> I like donuts<br>
        <paper-checkbox name="cheese" value="yes" checked></paper-checkbox>
      </form>
    </iron-form>
    `;
  }
}

customElements.define('my-view1', MyView1);
