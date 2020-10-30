import React from 'react';
import styled from 'styled-components';

export default function Header() {
  function goDashboard(e) {
    e.preventDefault();

    window.location.reload();
  }

  return <HeaderWrapper>
    <Logo src={require("../../assets/Main_B.svg")} onClick={goDashboard} alt="" />
    <Title onClick={goDashboard}>WAI DASHBOARD</Title>
  </HeaderWrapper>
}

const HeaderWrapper = styled.div`
  color: #FFF;
  height: 64px;
  padding: 0 24px;
  background-color: #3F51B5;
  position: relative;
`

const Logo = styled.img`
  height: 50%;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
`

const Title = styled.p`
  padding: 26px 0 0 26px;
  margin: 0;
  font-size: 24px;
  cursor: pointer;
`