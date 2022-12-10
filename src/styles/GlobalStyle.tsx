import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }
  @font-face {
    font-family: 'KoPubWorldBatang';
    font-weight: 300;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/kopus/KoPubWorldBatangLight.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/kopus/KoPubWorldBatangLight.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/kopus/KoPubWorldBatangLight.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/kopus/KoPubWorldBatangLight.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/kopus/KoPubWorldBatangLight.ttf') format("truetype");
    font-display: swap;
}
@font-face {
    font-family: 'KoPubWorldBatang';
    font-weight: 500;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/kopus/KoPubWorldBatangMedium.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/kopus/KoPubWorldBatangMedium.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/kopus/KoPubWorldBatangMedium.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/kopus/KoPubWorldBatangMedium.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/kopus/KoPubWorldBatangMedium.ttf') format("truetype");
    font-display: swap;
}
@font-face {
    font-family: 'KoPubWorldBatang';
    font-weight: 700;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/kopus/KoPubWorldBatangBold.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/kopus/KoPubWorldBatangBold.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/kopus/KoPubWorldBatangBold.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/kopus/KoPubWorldBatangBold.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/kopus/KoPubWorldBatangBold.ttf') format("truetype");
    font-display: swap;
}
  a {
    text-decoration: none;
  }
  body {
    margin:0 auto;
    background-color: white;
    font-family: "KoPubWorldBatang", sans-serif; 
  }

  .flex-center{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .expansion{
    &:hover {
          transform: scale(1.1);
          transition: 0.3s;
        }
  }

`;

export default GlobalStyle;
