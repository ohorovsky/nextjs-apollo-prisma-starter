import React, { Component } from "react";
import Header from "./Header";
import Meta from "./Meta";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import { theme } from "./styles/Theme";
import Row from "./styles/Row";

injectGlobal`
    @font-face {
        font-family: 'radnika_next';
        src: url('/static/radnikanext-medium-webfont.woff2')
        format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    html{
        box-sizing: border-box;
        font-size: 16px;
    }
    *, *::before, *:after{
        box-sizing: inherit
    }
    body{
        padding: 0;
        margin: 0;
        font-family: 'radnika_next';
    }
    a{
         text-decoration: none;
         color: ${theme.colors.black};
    }
`;

const StyledPage = styled.div`
  background: white;
  color: black;
`;

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Header />
          <Row>{this.props.children}</Row>
        </StyledPage>
      </ThemeProvider>
    );
  }
}
