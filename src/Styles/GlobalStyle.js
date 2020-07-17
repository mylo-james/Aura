import { createGlobalStyle } from "styled-components";
import Raleway from "../Styles/fonts/Raleway-Regular.ttf";
import Baloo2 from "../Styles/fonts/Baloo2-Regular.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: baloo2;
    src: url(${Baloo2}) format("truetype");
    font-weight: 300;
    font-style: normal;
  }
     @font-face {
    font-family: raleway;
    src: url(${Raleway}) format("truetype");
    font-weight: 300;
    font-style: normal;
     }
    
* {
    box-sizing: border-box;
  }

#root{
    margin: auto;
}

#root * {
    max-width: 500px;
}


  html, body, div, span, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  abbr, address, cite, code,
  del, dfn, em, img, ins, kbd, q, samp,
  small, strong, sub, sup, var,
  b, i,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, figcaption, figure,
  header, hgroup, menu, nav, section, summary,
  time, mark, audio, video {
      margin:0;
      padding:0;
      border:0;
      outline:0;
      color: white;
      font-size: 20px;
      text-align: center;
      vertical-align:baseline;
      background: transparent;
      font-family: baloo2;
      letter-spacing: 1px;
      font-weight: 300;
      -webkit-font-smoothing: antialiased;
      line-height: inherit;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
    ​
    article,aside,details,figcaption,figure,
    header,hgroup,menu,nav,section {
        display:block;
    }
    ​
    nav, ol, ul {
        list-style:none;
    }

      button {
        height: 40px;
        outline: none;
        font-weight: bold;
        background-color: white;
        color: ${(props) => props.theme.primary};
        border-radius: 30px;
        font-family: raleway, sans-serif;
        border: white 2px solid;
    }

    input, input::placeholder {
        font-family: raleway, sans-serif;
        color: white;
    }

    input {
        padding-left: 5px;
        width: 80%;
        background: rgba(0,0,0,.1);
        border: none;
        margin: 30px;
        height: 30px;
        font-size: 0.7rem;
    }
    input:focus{
        border: none;
        outline: none;
    }
    .logo {
        display: none;
    }

    .user{
        font-family: raleway, sans-serif;
    }

    .card {
        border-radius: 5px;
        background-color: ${(props) => props.theme.primary};
        padding: 10% 30px;
        box-shadow: 4px 6px 2px ${(props) => props.theme.borderColor} ;
        border: ${(props) => props.theme.borderColor} solid 1px;
    }
    .card * {
        color: ${(props) => props.theme.textColor};
    }
    .Toastify__close-button {
        display: none;
    }
    body {
        background-color: ${(props) => props.theme.primary};
    }

    input[type=range] {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 80%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type=range]:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */
}

input[type=range]::-ms-track {
  width: 80%;
  cursor: pointer;

  /* Hides the slider so custom styles can be added */
  background: transparent; 
  border-color: transparent;
  color: transparent;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 800%;
  height: 8.4px;
  cursor: pointer;
  background: rgba(0,0,0,.2);
  border-radius: 1.3px;
  border: 0.2px solid grey;
}


input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 1px solid #dfdfdf;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
  margin-top: -7px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
}




  
    



`;

export default GlobalStyle;
