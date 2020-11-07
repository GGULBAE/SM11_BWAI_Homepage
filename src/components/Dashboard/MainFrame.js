import React, { useState } from 'react';
import styled from 'styled-components';

import SideBar from './SideBar/SideBar.js';
import Statistics from './Statistics/Statistics.js';
import Account from './Account.js';

export default function MainFrame({ apiKey }) {
    const [view, setView] = useState("Account");
    
    return <MainFrameWrapper>
        <SideBar setView={setView} apiKey={apiKey}/>
        {
            view === "Dashboard" ? <Statistics apiKey={apiKey}/> : null
        }
        {
            view === "Account" ? <Account apiKey={apiKey}/> : null
        }
    </MainFrameWrapper>
}

const MainFrameWrapper = styled.div`
    display: grid;
    grid-template-columns: 255px calc(100% - 255px);
    min-Height: calc(100vh - 64px);
    background-color: #F4F6F8
`