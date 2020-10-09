import React from 'react';

export default function Service(props) {
    return <React.Fragment>
        <div style={style_Navigation_Shadow}></div>
        <embed style={serviceWrapper} src={require("../assets/Service.svg")} type="image/svg+xml"></embed>
    </React.Fragment>
}

const style_Navigation_Shadow = {
    height: "96px"
}

const serviceWrapper = {
    width: "100%"
}
