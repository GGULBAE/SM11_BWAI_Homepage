import React from 'react';

export default function Team(props) {
    return <React.Fragment>
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
