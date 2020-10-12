import React, { useState } from 'react';

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

const defaultText = [
  {
    direction: "right",
    text: "사람한번 존나게 길게 적어 보겠습니다 길게 길게 길게 사람한번 사람한번 사람한번 사람한번 사람한번 사람한번 "
  },
  {
    direction: "left",
    text: "시스템"
  }
]

function ChatRoom() {
  const [inputText, setInputText] = useState("텍스트를 입력하세요.");
  const [changed, setChanged] = useState(false);
  const [prevTexts, setPrevTexts] = useState(defaultText);

  const style_chat_wrapper = {
    border: "1px solid",
    paddingTop: "16px",
    height: "calc(100vh - 300px)",
    position: "relative"
  }

  const style_chat_input_wrapper = {
    position: "absolute",
    borderBottom: "1px solid rgba(0, 0, 0, 0.5)",
    width: "calc(100% - 48px)",
    left: "24px",
    bottom: "24px"
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

  return <div style={style_chat_wrapper}>
    {
      prevTexts.map((data, index) => {
        if (data.direction === "left") {
          return <>
            <SystemChat key={index} data={data} />
            <ClearDiv key={index + 100} />
          </>
        }
        else {
          return <>
            <UserChat key={index} data={data} />
            <ClearDiv key={index + 100} />
          </>
        }
      })
    }
    <div style={style_chat_input_wrapper}>
      <form onSubmit={submit}>
        <input style={style_chat_input} type="text" value={inputText} onClick={inputClicked} onChange={inputChanged}></input>
        <input type="submit"></input>
      </form>
    </div>
  </div>

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
    console.log(e);
    var nextTexts = JSON.parse(JSON.stringify(prevTexts));

    nextTexts.push(getUserChat(prevTexts));

    setPrevTexts(nextTexts);
  }

  function getUserChat(prevTexts) {
    return { direction: "right", text: prevTexts };
  }
}

function SystemChat({ data }) {
  return <>
    <div style={{marginLeft: "24px", verticalAlign: "top", height: "32px"}}>
      <div style={{width: "32px", height: "32px", display: "inline-block"}}>
        <img style={{width: "100%", height: "100%"}} src={require("../assets/Chat_BWAI_icon.svg")} alt="" />
      </div>
      <div style={{display: "inline-block", height: "32px", verticalAlign: "middle"}}>
        <span style={{fontSize: "16px", lineHeight: "32px"}}>BWAI</span>
      </div>
    </div>

    <div style={style_SystemChatWrapper}>

      <p style={style_chat_text}>{data.text}</p>
    </div>
  </>
}

function UserChat({ data }) {
  return <div style={style_UserChatWrapper}>
    <p style={style_chat_text}>{data.text}</p>
  </div>
}

function ClearDiv() {
  const clearStyle = {
    display: "block",
    clear: "both"
  }

  return <div style={clearStyle}></div>
}

const style_chat_text_Wrapper = {
  display: "inlineBlock",
  maxWidth: "460px",
  fontFamily: "NanumSquareOTFR",
  borderRadius: "8px",
  fontSize: "18px",
  lineHeight: "30px"
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