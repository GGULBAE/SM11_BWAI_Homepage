import React, { useState } from 'react';

import NavigationWrapper from './Navigation.js';
import Statistics from './Statistics.js';
import Settings from './Settings.js';

export default function MainFrame() {
    const [view, setView] = useState("Dashboard");

    const style_MainFrame = {
        display: "grid",
        gridTemplateColumns: "255px calc(100% - 255px)",
        minHeight: "calc(100vh - 64px)",
        backgroundColor: "#F4F6F8"
    }

    console.log(view);
    return <div style={style_MainFrame}>
        <NavigationWrapper setView={setView}/>
        {
            view === "Dashboard" ? <Statistics/> : null
        }
        {
            view === "Settings" ? <Settings/> : null
        }
    </div>
}