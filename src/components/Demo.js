import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const apiServer = "http://3.35.200.169";
// const userToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDI1ODc1MDEsIm5iZiI6MTYwMjU4NzUwMSwianRpIjoiODBmY2FmMmQtYTc1MC00MTlmLWJmNGYtMzczZTkzYWNjNTY1IiwiaWRlbnRpdHkiOiJEZW1vIiwiZnJlc2giOmZhbHNlLCJ0eXBlIjoiYWNjZXNzIn0.TRTV1s-BB_BQ6hgwYEAFsvVrqEPMUEtfnnJ2uKXw_Xo";
// const apiToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MDI1ODgxODUsIm5iZiI6MTYwMjU4ODE4NSwianRpIjoiZTJhZjYzYzUtNmQyZC00YzU2LTg5ZDQtYjA2ZDExNmQ0NGZjIiwiaWRlbnRpdHkiOiJEZW1vMjAyMC0xMC0xMyAxMToyMzowNS42NjI5MjQiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.07RRU0Luv13FsZieElr7EElNXs8Gwo3L5_FShVi_jSI";
// const config = {
//   headers: { Authorization: `Bearer ${apiToken}` }
// };

export default function Demo(props) {
  const style_Navigation_Shadow = {
    height: "96px"
  }

  const style_Demo_Wrapper = {
    padding: "50px 400px 50px 400px"
  }

  return <React.Fragment>
    <div style={style_Navigation_Shadow}></div>
    <div style={style_Demo_Wrapper}>
      <div style={{ width: "100%" }}>
        <embed style={{ width: "100%", paddingBottom: "50px" }} src={require("../assets/DemoTitle.svg")} type="image/svg+xml"></embed>
      </div>
      <ChatRoom />
    </div>
    <div>
      <embed style={{ width: "100%" }} src={require("../assets/Footer.svg")} type="image/svg+xml"></embed>
    </div>
  </React.Fragment>
}

// const defaultPrevTexts = [
//   {
//     direction: "right",
//     text: "사람한번 존나게 길게 적어 보겠습니다 길게 길게 길게 사람한번 사람한번 사람한번 사람한번 사람한번 사람한번 "
//   },
//   {
//     direction: "left",
//     text: "시스템"
//   }
// ]

const defaultText = "텍스트를 입력하세요."

function ChatRoom() {
  const [inputText, setInputText] = useState(defaultText);
  const [changed, setChanged] = useState(false);
  const [prevTexts, setPrevTexts] = useState([]);

  return <React.Fragment>
    <div style={style_chat_wrapper}>
      {
        prevTexts.map((data, index) => {
          if (data.direction === "left") {
            return <React.Fragment key={index}>
              <SystemChat text={data.text} />
              <ClearDiv />
            </React.Fragment>
          }
          else {
            return <React.Fragment key={index}>
              <UserChat text={data.text} />
              <ClearDiv />
            </React.Fragment>
          }
        })
      }
    </div>
    <div style={style_chat_input_wrapper}>
      <form onSubmit={submit}>
        <input style={style_chat_input} type="text" value={inputText} onClick={inputClicked} onChange={inputChanged}></input>
        <input style={style_chat_input_submit} type="submit"></input>
      </form>
    </div>
  </React.Fragment>

  function inputChanged(e) {
    const nextValue = e.target.value;

    if (changed) {
      // do nothing
    } else {
      setInputText("")
    }
    setInputText(nextValue);
  }

  function inputClicked(e) {
    if (changed) {
      // do nothing
    } else {
      setInputText("");
      setChanged(true);
    }
  }

  function submit(e) {
    e.preventDefault();

    setPrevTexts([
      ...prevTexts,
      getUserChat(inputText),
      getSystemChat(inputText)
    ]);;

    setInputText("");
  }

  function getUserChat(text) {
    return { direction: "right", text: text };
  }

  function getSystemChat(text) {
    return { direction: "left", text: text };
  }
}

function SystemChat({ text }) {
  const [transForm, setTransForm] = useState(text);

  useEffect(() => {
    var url = `${apiServer}/bwai/demo/label`;
    var data = {
      'sentence': text
    }

    Axios.post(url, data)
    .then((res) => {
      if (res.data.data)
        setTransForm("BWAI API의 결과 <문장에는 욕이 있습니다.>")
      else
        setTransForm("BWAI API의 결과 <문장에는 욕이 없습니다.>")
    })

  })

  // console.log(result);

  return <React.Fragment>
    <div style={{ marginLeft: "24px", verticalAlign: "top", height: "32px", marginBottom: "8px" }}>
      <div style={{ width: "32px", height: "32px", display: "inline-block" }}>
        <img style={{ width: "100%", height: "100%" }} src={require("../assets/Chat_BWAI_icon.svg")} alt="" />
      </div>
      <div style={{ display: "inline-block", height: "32px", verticalAlign: "middle" }}>
        <span style={{ fontSize: "16px", lineHeight: "32px" }}>BWAI</span>
      </div>
    </div>

    <div style={style_SystemChatWrapper}>
      <p style={style_chat_text}>{transForm}</p>
    </div>
  </React.Fragment>
}

function UserChat({ text }) {
  return <div style={style_UserChatWrapper}>
    <p style={style_chat_text}>{text}</p>
  </div>
}

function ClearDiv() {
  const clearStyle = {
    display: "block",
    clear: "both"
  }

  return <div style={clearStyle}></div>
}

const style_chat_wrapper = {
  // border: "1px solid",
  paddingTop: "16px",
  height: "calc(100vh - 300px)",
  position: "relative",
  overflow: "scroll"
}

const style_chat_input_wrapper = {
  borderBottom: "1px solid rgba(0, 0, 0, 0.5)",
}

const style_chat_input = {
  fontSize: "18px",
  width: "100%",
  fontFamily: "NanumSquareOTFB",
  padding: "0 0 8px 8px",
  outline: "none",
  margin: 0,
  border: 0
}

const style_chat_text_Wrapper = {
  display: "inlineBlock",
  maxWidth: "460px",
  fontFamily: "NanumSquareOTFR",
  borderRadius: "8px",
  fontSize: "18px",
  lineHeight: "30px",
  marginBottom: "8px"
}

const style_UserChatWrapper = {
  ...style_chat_text_Wrapper,
  float: "right",
  marginRight: "24px",
  backgroundColor: "#B2CCFA",
}

const style_chat_text = {
  padding: "8px",
  margin: 0
}

const style_SystemChatWrapper = {
  ...style_chat_text_Wrapper,
  float: "left",
  marginLeft: "24px",
  border: "1px solid #A300CB",
}

const style_chat_input_submit = {
  display: "none"
}