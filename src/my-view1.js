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
    <div class="columns is-vcentered">
      <div class="login column is-4 ">
        <section class="section">
          <iron-form id="myForm">
            <form method="GET" action="/form/handler">
              
                <div class="field">
                    <label class="label">Name</label>
                    <div class="control has-icons-right">
                      <input class="input" type="text">
                      <span class="icon is-small is-right">
                        <i class="fa fa-user"></i>
                      </span>
                      <paper-input label="Name" value="Batman" name="name"></paper-input>
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
                    <label class="label">Phone Number</label>
                    <div class="control has-icons-right">
                      <input class="input" type="tel">
                      <span class="icon is-small is-right">
                        <i class="fa fa-phone"></i>
                      </span>
                    </div>
                  </div>
                  <div class="has-text-centered">
                    <paper-button class="is-rounded button is-vcentered is-primary is-outlined" raised on-click="myForm.submit()">Submit</paper-button>
                  </div>
                  <div class="has-text-centered">
                    <a href=""> Already have an account? Log in now !</a>
                  </div>    
              </form>
              <br>
                <div class="output"></div>
              </br>
            </iron-form>
            <script>
              myForm.addEventListener('iron-form-submit', function(event) {
                this.querySelector('.output').innerHTML = JSON.stringify(event.detail);
              });
            </script>
          </section>
      </div>
    </div>

      
    `;
  }
}
        
customElements.define('my-view1', MyView1);

