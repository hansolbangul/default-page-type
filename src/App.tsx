import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Router from './Router';
import { ReactQueryDevtools } from 'react-query/devtools';
import { darkTheme, lightTheme } from './theme';
import { isDarkAtom } from './atoms';
import { useRecoilValue } from 'recoil';
import FootToggle from './nav/FootToggle';
import Header from './nav/Header';

// react 쓸데없는 padding이랑 margin 제거
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor}
}
a {
  text-decoration:none;
  color:inherit;
}
.pc {
  display: block;
}
.m {
  display: none;
}

@media screen and (max-width: 900px) {
  .pc {
    display: none;
  }
  .m {
    display: block;
  }
  .m_w100 {
    width: 100%;
  }
}
`;

// useRecoilValue를 사용해서 recoil의 값 (state) 불러오기

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        {/* <Header /> */}
        <GlobalStyle />
        <Router />
        <ReactQueryDevtools initialIsOpen={true} />
        <FootToggle />
      </ThemeProvider>
    </>
  );
}

export default App;
