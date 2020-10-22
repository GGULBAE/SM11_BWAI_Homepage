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
    const [name, setName] = useState("loading")

    useEffect(() => {
        Axios.get(url, config)
        .then((res) => {
            console.log(res);
            var result = res.data.result;
            var user_id = result.user_id;

            setName(user_id);
        })
    })
    return <div style={{padding: "8px 0 16px 0", textAlign: "center", borderBottom: "1px solid rgba(0, 0, 0, 0.12)"}}>
        <Profile/>
        <p style={{fontSize: "16px", margin: "0", lineHeight: "1.334", fontWeight: "bold"}}>{name} 님</p>
        <p style={{fontSize: "16px", margin: "0", lineHeight: "1.334", color: "gray"}}>정회원</p>
    </div>
}

function Profile() {
    const style_wrapper = {
        width: "64px", height: "64px", borderRadius: "50px", margin: "0 auto", background: "gray"
    }
    return <div style={style_wrapper}>
        <img style={{width: "100%", height: "100%"}} src={require("../../assets/Main_B.svg")} alt=""></img>
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