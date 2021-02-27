/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

// import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import {LitElement, html, css } from 'lit-element'
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-spinner/paper-spinner.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-checkbox/paper-checkbox.js';
import '@polymer/iron-form/iron-form.js';
import './shared-styles.js';
import { litStyles } from './lit-styles'; 


class MyView2 extends LitElement {
  static get styles() {
    return [
      litStyles,
      css `
      :host {
        display: block;
        padding: 10px
      }
      `
    ]
  } 
  static get properties() {
    return {
      name:{type: String},
      animal:{type: String},
    };
  }
  constructor() {
    super();
    this.animal = this.animal; 
    this.addEventListener('form5.submit', this.submitForm.bind(this));
  }
    submitForm() {
      let name = this.querySelector('.name');
      console.log(this);
    }


  render() {
      return html`
        <div class="card">       
            <iron-form id="form5">
              <form method="GET" action="/foo" novalidate>
                <paper-input name="name" label="Name" class="name" id="name" required>[[name]]</paper-input>
                <cats-only name="cats"></cats-only>
                <input name="animal" placeholder="animal" required value="meerkat"><br>
                <paper-checkbox name="cheese" required>Cheese</paper-checkbox>
                <br>
                <paper-button raised onclick="submitForm">Submit</paper-button>
                <paper-button raised onclick="form5.reset()">Reset</paper-button>
              </form>
            <div class="output"></div>
          </iron-form>
          <script>
            form5.addEventListener('iron-form-submit', function(event) {
              this.querySelector('.output').innerHTML = JSON.stringify(event.detail);
            });
            submitForm:function() {
              document.getElementById('iron-form').submit();
              console.log(this.name)
            }
          </script>
        </div> 
      `;
    }
    
  }


window.customElements.define('my-view2', MyView2);
