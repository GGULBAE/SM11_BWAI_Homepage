import React from 'react';
import styled from 'styled-components';

import NavigationBar from './NavigationBar.js';
import ChatRoom from './ChatRoom/ChatRoom.js';

import './Demo.css';

export default function Demo(props) {

  return <React.Fragment>
    <NavigationBar/>
    <NavigationShadow></NavigationShadow>
    <DemoWrapper>
      <DemoTitleWrapper>
        <DemoTitle src={require("../assets/DemoTitle.svg")} type="image/svg+xml"></DemoTitle>
      </DemoTitleWrapper>
      <ChatRoom/>
    </DemoWrapper>
    <FooterWrapper>
      <Footer src={require("../assets/Footer.svg")} type="image/svg+xml"></Footer>
    </FooterWrapper>
  </React.Fragment>
}

const NavigationShadow = styled.div`
  height: 96px;
`

const DemoWrapper = styled.div`
  padding: 50px 400px 50px 400px
`

const DemoTitleWrapper = styled.div`
  width: 100%;
`

const DemoTitle = styled.embed`
  width: 100%; 
  padding-bottom: 50px;
`

const FooterWrapper = DemoTitleWrapper;
const Footer = styled.embed`
  width: 100%;
`