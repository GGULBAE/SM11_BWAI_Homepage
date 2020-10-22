import Axios from 'axios';
import React, {useEffect, useState} from 'react';

import Header from './Dashboard/Header.js';
import MainFrame from './Dashboard/MainFrame.js';

const apiServer = "http://api.bwai.io";

export default function DashBoard() {
    const [myKey, setMyKey] = useState(window.sessionStorage.getItem("myAPIKey"));

    useEffect(() => {
        if (myKey === null) {
            var id = window.prompt("아이디 입력")
            var pw = window.prompt("비밀번호 입력")
            
            var url = `${apiServer}/api/auth/signin`;
            var form = {
                "id": id,
                "pw": pw
            }

            Axios.post(url, form)
            .then((res) => {
                if (res.data.msg === "success") {
                    window.sessionStorage.setItem("myAPIKey", res.data.result.user_token);
                    setMyKey(res.data.result);
                } else {
                    alert("로그인 실패");
                }
                console.log(res);
                
                
            })
        }
    }, [myKey])

    return <React.Fragment>
        {myKey ? <React.Fragment>
                <Header/>
                <MainFrame/>
            </React.Fragment>
        : null}
    </React.Fragment>
}
