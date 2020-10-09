import React from 'react';

export default function Service(props) {
    // return <img style={serviceWrapper} src={require("../assets/Service.svg")} alt=""></img>
    return <embed style={serviceWrapper} src={require("../assets/service2.svg")} type="image/svg+xml"></embed>
}

const serviceWrapper = {
    width: "100%"
}
