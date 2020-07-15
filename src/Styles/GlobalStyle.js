import { createGlobalStyle } from "styled-components";
import Raleway from "../Styles/fonts/Raleway-Regular.ttf";
import OpenSans from "../Styles/fonts/OpenSansCondensed-Light.ttf";

const GlobalStyle = createGlobalStyle`
@font-face{
    font-family: raleway;
    src: url(${Raleway}) format('truetype');
    font-weight: 300;
    font-style: normal;
}

@font-face{
    font-family: opensans;
    src: url(${OpenSans}) format('truetype');
    font-weight: 300;
    font-style: normal;
}
* {
    box-sizing: border-box;
    
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
      color: #455A64;
      font-size: 20px;
      text-align: center;
      vertical-align:baseline;
      background: transparent;
      font-family: opensans;
      letter-spacing: 2px;
      font-weight: 600;
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
        border: none;
        background-color: #7e57c2;
        font-weight: 700;
        color: white;
        border-radius: 5px;
        font-family: raleway;
        box-shadow: 4px 6px 2px #dfdfdf ;
        border: #dfdfdf solid 1px;
    }

    input, input::placeholder {
        font-family: raleway;
        color: white;
    }

    input {
        padding-left: 5px;
    }

    .logo {
        display: none;
    }

    .user{
        font-family: raleway;
    }

    .card {
        border-radius: 5px;
        background-color: #7e57c2;
        padding: 10% 30px;
        box-shadow: 4px 6px 2px #dfdfdf ;
        border: #dfdfdf solid 1px;
    }
    .card * {
        color: white;
    }
    .Toastify__close-button {
        display: none;
    }
    body {
        background-color: #e1e2e1;
    }
    



`;

export default GlobalStyle;
