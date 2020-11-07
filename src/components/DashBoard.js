import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import Header from './Dashboard/Header.js';
import MainFrame from './Dashboard/MainFrame.js';

const apiServer = process.env.REACT_APP_API_SERVER;

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
          console.log(res);
          var result = res.data.result;
          if (result) {
            window.sessionStorage.setItem("myAPIKey", result.user_token);
            setMyKey(result.user_token);
            window.location.reload();
          } else {
            alert("로그인 실패");
          }
        })
    }
  }, [myKey])

  return <React.Fragment>
    <Header />
    {myKey ? <MainFrame apiKey={myKey}/> : null}
  </React.Fragment>
}
