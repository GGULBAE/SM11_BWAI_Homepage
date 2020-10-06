import React from 'react';

export default function Price(props) {
    return <embed style={priceWrapper} src={require("../assets/Price.svg")} type="image/svg+xml">
    </embed>
}

const priceWrapper = {
    width: "100%"
}
