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
import './shared-styles.js';
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

      <div class="card">
        <div class="circle">1</div>
        <h1>View One</h1>
        <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
        <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
      </div>
    `;
  }
}

customElements.define('my-view1', MyView1);
