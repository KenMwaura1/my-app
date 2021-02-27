import {css} from 'lit-element';


export const litStyles = css `

.interactive-bg {
  height: 100vh;
  background-color: #00d1b2;
  -webkit-box-shadow: inset 24px 4px 64px -24px rgba(71,71,71,1);
  -moz-box-shadow: inset 24px 4px 64px -24px rgba(71,71,71,1);
  box-shadow: inset 24px 4px 64px -24px rgba(71,71,71,1);
  padding: 0px;
}
@media (max-width: 769px) {
  .interactive-bg{
    display: none
  }
}

.input {
  border-radius: 50px;
}

.button {
  margin-top: 20px;
  margin-bottom: 20px;
  min-width: 150px;
}

.login-logo {
  margin: 0 auto;
  margin-bottom: 50px;
  max-height: 100px;

}

.columns{
  margin: 0px;
}
.card {
    margin: 24px;
    padding: 16px;
    color: #757575;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  }

  .circle {
    display: inline-block;
    width: 64px;
    height: 64px;
    text-align: center;
    color: #555;
    border-radius: 50%;
    background: #ddd;
    font-size: 30px;
    line-height: 64px;
  }
  .input-field {
        display: flex;
        flex-direction: column;
        align-self: center;
        align-items: flex-start;
        flex: 1;
        padding: 5px;
        
      }

  h1 {
    margin: 16px 0;
    color: #212121;
    font-size: 22px;

  }`;
