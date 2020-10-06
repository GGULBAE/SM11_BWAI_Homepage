import React from 'react';

export default function Service(props) {
    return <embed style={serviceWrapper} src={require("../assets/Service.svg")} type="image/svg+xml">
    </embed>
}

const serviceWrapper = {
    width: "100%"
}
