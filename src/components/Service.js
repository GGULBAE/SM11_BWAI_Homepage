import React from 'react';

export default function Service(props) {
    return <embed style={serviceWrapper} src={require("../assets/Service.svg")} type="image/svg+xml">
        
    </embed>

    // return <embed style={serviceWrapper} src={require("../assets/Service.svg")} alt="">

    // </img>
}

const serviceWrapper = {
    width: "100%"
}
