import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
// import Header from './Header';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
    font-family: 'Lato', sans-serif;
    font-size: 62.5%; //10px
    font-style: normal;
    font-weight: normal;
  }
  html {
    --red: #ff0000;
    --black: #393939;
    
    --offWhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-size: 1.6rem; //16px
    height: 100%;
    overflow-y: scroll;
    padding: 0;
    margin: 0;
    line-height:2;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Merriweather', serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      {/* <Header /> */}
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
