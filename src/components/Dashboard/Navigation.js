import React, {useEffect, useState} from 'react';
import Axios from 'axios';
// import { Route, Link } from 'react-router-dom';

export default function NavigationWrapper({setView}) {
    const style_NavigationWrapper = {
        padding: "8px",
        backgroundColor: "#FFF"
    }

    return <div style={style_NavigationWrapper}>
        <UserInfo/>
        <Navigation setView={setView}/>
    </div>
}

function UserInfo() {
    var myKey = window.sessionStorage.getItem("myAPIKey");
    const config = {headers: { Authorization: `Bearer ${myKey}` }};
    const url = `${window.server}/api/auth/info`;

    useEffect(() => {
        Axios.get(url, config)
        .then((res) => {
            console.log(res);
        })
    })
    return <div>
        UserInfo
    </div>
}

function Navigation({setView}) {
    const datas = ["Dashboard", "Settings", "Account", "Logout"];
    const [highlight, setHighlight] = useState("Dashboard");
    
    const style_NavigationBtnsWrapper = {
        padding: "8px"
    }

    function NavSetView(to) {
        setHighlight(to);
        setView(to);
    }

    return <div style={style_NavigationBtnsWrapper}>
        {datas.map((data, index) => <NavigationBtn key={index} text={data} highlight={highlight} setView={NavSetView}/>)}
    </div>
}

function NavigationBtn({text, highlight, setView}) {
    const bool_highlight = highlight === text;
    const style_BtnWrapper = bool_highlight ? style_NavigationBtnHighLight : style_NavigationBtn;
    function clickText(e) {
        e.preventDefault();

        setView(text);
    }

    return <div style={style_BtnWrapper}>
        <p onClick={clickText}>{text}</p>
    </div>
}

const style_NavigationBtn = {
    
}

const style_NavigationBtnHighLight = {
    ...style_NavigationBtn,
    color: "#3f51b5"
}