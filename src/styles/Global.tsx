import { createGlobalStyle } from 'styled-components'
import { reboot } from 'styled-reboot'
import './fonts.css'

const GlobalStyle = createGlobalStyle`

  ${reboot}

  html,
  body,
  #root {
    height: 100%;
    width: 100%;
    position: absolute;
  }

  ::selection {
    background-color: ${props => props.theme.colors.highlightBackground};
    color: ${props => props.theme.colors.highlightColor};
    color: #fff;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: none;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeSpeed;
    color: ${props => props.theme.colors.text};
    text-align: left;
    background-color: ${props => props.theme.colors.background};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props => props.theme.fonts.headings};
  }

  h1 {
    font-size: ${props => props.theme.fontSizes[6]}px;
  }

  h2 {
    font-size: ${props => props.theme.fontSizes[5]}px;
  }

  h3 {
    font-size: ${props => props.theme.fontSizes[4]}px;
  }

  h4 {
    font-size: ${props => props.theme.fontSizes[3]}px;
  }

  h5 {
    font-size: ${props => props.theme.fontSizes[2]}px;
  }

  h6, .h6 {
    font-size: ${props => props.theme.fontSizes[1]}px;
  }

  p {
    font-size: ${props => props.theme.fontSizes[0]}px;
    a {
      color: ${props => props.theme.colors.text};
      text-decoration: underline;
    }
    @media (min-width: ${props => props.theme.breakpoints[0]}) {
      & {
         /* fallback for browsers that do not support calc */
        font-size: ${props => props.theme.fontSizes[1]}px;
        font-size: calc(.4vw + ${props => props.theme.fontSizes[0]}px);
      }
    }
    @media (min-width: ${props => props.theme.breakpoints[1]}) {
      & {
        /* fallback for browsers that do not support calc */
        font-size: ${props => props.theme.fontSizes[1]}px;
        font-size: calc(.2vw + ${props => props.theme.fontSizes[0]}px);
      }
    }

  }

  blockquote {
    p {
      font-size: ${props => props.theme.fontSizes[2]}px;
    }
  }

  a {
    color: ${props => props.theme.colors.text};
    transition: all 0.2s;
    &:hover {
      color: ${props => props.theme.colors.text};
    }
  }

  .img-fluid {
    max-width: 100%;
    width: 100%;
  }

  .img-forced {
    width: 100%;
  }

  .is-center {
    text-align: center;
  }

  .is-left {
    text-align: left;
  }

  .is-right {
    text-align: right;
  }

  .btn-reset {
    border: none;
    border-radius: 0;
    cursor: pointer;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    outline: none !important;

    background: transparent;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;
    text-align: inherit;

    /* Normalize line-height. Cannot be changed from normal in Firefox 4+. */
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable input types in iOS */
    -webkit-appearance: none;
  }


  input, textarea {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${props => props.theme.colors.primary};
    background-color: #fff;
    background-clip: padding-box;
    border: 0;
    border-bottom: 1px solid ${props => props.theme.colors.primary};
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;

    &:focus {
      color: #495057;
      background-color: #fff;
      border-color: ${props => props.theme.colors.primary};
      outline: 0;
    }
  }

  [role="button"] {
    cursor: pointer;
  }

`

export default GlobalStyle
