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
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="card-1"> 
      <iron-form>
        <form method="GET" action="/form/handler">
          <section class="section">
            <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-right">
                  <input class="input" type="text">
                  <span class="icon is-small is-right">
                    <i class="fa fa-user"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-right">
                  <input class="input" type="text">
                  <span class="icon is-small is-right">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-right">
                  <input class="input" type="password">
                  <span class="icon is-small is-right">
                    <i class="fa fa-key"></i>
                  </span>
                </div>
              </div>
              <div class="has-text-centered">
                <a class="button is-vcentered is-primary is-outlined">Sign Up!</a>
              </div>
              <div class="has-text-centered">
                <a href="login.html"> Already have an account? Log in now !</a>
              </div>
            </section>
        </form>
      </iron-form>
      <div id="particles-js" class="interactive-bg column is-8">

      </div>
    </div>
    
    `;
  }
}

customElements.define('my-view1', MyView1);

