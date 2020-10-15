import React from 'react';
import NavigationBar from '../components/NavigationBar.js';

export default function Team(props) {
    return <React.Fragment>
        <NavigationBar/>
        <div style={style_Navigation_Shadow}></div>
        <embed style={teamWrapper} src={require("../assets/Team.svg")} type="image/svg+xml"></embed>
    </React.Fragment>
}

const style_Navigation_Shadow = {
    height: "96px"
}

const teamWrapper = {
    width: "100%"
}
