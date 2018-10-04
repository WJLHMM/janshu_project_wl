import { injectGlobal } from 'styled-components';

injectGlobal`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1538556659556'); /* IE9*/
  src: url('./iconfont.eot?t=1538556659556#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1538556659556') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1538556659556#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;