import React from 'react';
import styled from 'styled-components';

import UserInfo from './UserInfo.js';
import Navigation from './Navigation.js';

export default function SideBar({ apiKey, setView }) {
  return <SideBarWrapper>
    <UserInfo apiKey={apiKey}/>
    <Navigation setView={setView} />
  </SideBarWrapper>
}

const SideBarWrapper = styled.div`
    padding: 8px;
    background-color: #FFF;
`