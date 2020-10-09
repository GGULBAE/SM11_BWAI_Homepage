import React from 'react';

export default function Team(props) {
    // return <img style={teamWrapper} src={require("../assets/Team.svg")} alt=""></img>
    // return <embed style={teamWrapper} src={require("../assets/Team.svg")} type="image/svg+xml">
    // </embed>
    return <React.Fragment>
        <div style={style_Navigation_Shadow}></div>
        <embed style={teamWrapper} src={require("../assets/Team.svg")} type="image/svg+xml"></embed>
    </React.Fragment>
}

const style_Navigation_Shadow = {
    height: "96px"
}
// eslint-disable-next-line
const teamWrapper = {
    width: "100%"
}
