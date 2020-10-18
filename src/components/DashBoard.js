import React, {useState} from 'react';

import Header from './Dashboard/Header.js';
import MainFrame from './Dashboard/MainFrame.js';

export default function DashBoard() {
    const [myKey, setMyKey] = useState(window.sessionStorage.getItem("myAPIKey"));
    console.log("myKey: ", myKey, setMyKey);
    
    return <React.Fragment>
        <Header/>
        <MainFrame/>
    </React.Fragment>
}
