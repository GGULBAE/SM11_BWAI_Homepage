import React from 'react';

export default function Team(props) {
    return <embed style={teamWrapper} src={require("../assets/Team.svg")} type="image/svg+xml">
    </embed>
}

const teamWrapper = {
    width: "100%"
}
