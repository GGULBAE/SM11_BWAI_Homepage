import React from 'react';
import styled from 'styled-components';

export default function NavigationBtn({ text, highlight, setView }) {
  const style_BtnWrapper = highlight ? "highlight" : "";

  function clickText(e) {
    e.preventDefault();
    setView(text);
  }

  return <NavigationBtnWrapper className={style_BtnWrapper}>
    {
      text === "Dashboard" ? <DashboardIcon/> : null
    }
    {
      text === "Account" ? <AccountIcon/> : null
    }
    {
      text === "Logout" ? <LogoutIcon/> : null
    }
    <Btn onClick={clickText}>{text}</Btn>
  </NavigationBtnWrapper>
}

const NavigationBtnWrapper = styled.div`
  padding: 10px 8px;
  color: #546e7a;
  line-height: 1.75;
  display: flex;

  &:hover {
    cursor: pointer;
    background-color: #f7f7f7;
  }

  &.highlight {
    color: #3F51B5;
    font-weight: 500;
    // font-weight: bold;
  }
`
const Btn = styled.span`
  display: inline-block;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`

const DashboardIcon = () => <DashboardIconSVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="jss20"><line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line></DashboardIconSVG>
const DashboardIconSVG = styled.svg`
  justify-content: center;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  list-style: none;
  text-align: left;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  font-size: 0.875rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.75;
  font-weight: 500;
  letter-spacing: 0;
  text-transform: none;
  width: 20;
  height: 20;
  fill: none;
  stroke: currentcolor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-right: 8px;
`

const AccountIcon = () => <AccountIconSVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="jss20"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></AccountIconSVG>
const AccountIconSVG = styled.svg`
  -webkit-font-smoothing: antialiased;
  list-style: none;
  text-align: left;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  font-size: 0.875rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.75;
  font-weight: 500;
  letter-spacing: 0;
  text-transform: none;
  width: 20;
  height: 20;
  fill: none;
  stroke: currentcolor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-right: 8px;
`

const LogoutIcon = () => <LogOutIconSVG xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="jss20"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></LogOutIconSVG>

const LogOutIconSVG = styled.svg`
  -webkit-font-smoothing: antialiased;
  list-style: none;
  text-align: left;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  font-size: 0.875rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  line-height: 1.75;
  color: #546e7a;
  font-weight: 500;
  letter-spacing: 0;
  text-transform: none;
  width: 20;
  height: 20;
  fill: none;
  stroke: currentcolor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-right: 8px;
`