import React from 'react';

export default function Header() {
    function goDashboard(e) {
        e.preventDefault();

        window.location.href = "/dashboard";
    }

    return <div style={style_Header}>
        <img style={style_Logo} src={require("../../assets/Main_B.svg")} onClick={goDashboard}alt=""/>
    </div>
}

const style_Header = {
    color: "#fff",
    height: "64px",
    padding: "0 24px",
    backgroundColor: "#3f51b5",
    position: "relative"
}

const style_Logo = {
    height: "50%",
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    cursor: "pointer"
}
