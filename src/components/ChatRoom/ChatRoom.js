import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import ChatMessage from './ChatMessage.js';

const defaultText = "텍스트를 입력하세요."
const defaultSystemText = "욕설을 입력해주세요!";

const defaultSystemMessage = { direction: "left", text: defaultSystemText};

export default function ChatRoom() {
  const [inputText, setInputText] = useState(defaultText);
  const [changed, setChanged] = useState(false);
  const [prevTexts, setPrevTexts] = useState([defaultSystemMessage]);
  const [mode, setMode] = useState(false); // Possibility - true: Get Possibility, flase: No Possibility

  const ref_chatWrapper = useRef(null);

  const scrollToBottom = () => {
    var tar = ref_chatWrapper.current;
    var height_tar = tar.scrollHeight;

    tar.scrollTo(0, height_tar);
  }

  return <ChatRoomWrapper>
    <ChatMessagesWrapper ref={ref_chatWrapper}>
      {
      prevTexts.map((data, index) => <ChatMessage key={index}data={data} scrollToBottom={scrollToBottom} noChange={index === 0}/>)
      }
    </ChatMessagesWrapper>
    <ChatInputWrapper>
      <ChatInputForm onSubmit={submit}>
        <ChatInputText type="text" value={inputText} onClick={inputClicked} onChange={inputChanged}></ChatInputText>
        <ChatInputBtn type="submit"></ChatInputBtn>
      </ChatInputForm>
      <ChatInputSubmitLabel onClick={submit}>전송</ChatInputSubmitLabel>
    </ChatInputWrapper>
  </ChatRoomWrapper>

  function inputChanged(e) {
    setInputText(e.target.value);
  }

  function inputClicked() {
    if (!changed) {
      setInputText("");
      setChanged(true);
    }
  }

  function submit(e) {
    e.preventDefault();
    var result;

    if (inputText === "!Admin False") {
      result = [...prevTexts, {direction: "right", text: "[Admin]비속어 탐지 모드"}];
      setMode(false); 
    }
    else if (inputText === "!Admin True") {
      result = [...prevTexts, {direction: "right", text: "[Admin]비속어 확률 반환 모드"}];
      setMode(true);
    }
    else {
      result = [
        ...prevTexts,
        { direction: "right", text: inputText },
        { direction: "left", text: inputText, possibility: mode}
      ]
    }
    
    setPrevTexts(result);
    setInputText("");
  }
}

const ChatRoomWrapper = styled.div`
  padding-bottom: 16px;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.2);
`

const ChatMessagesWrapper = styled.div`
  scroll-behavior: smooth;
  border-bottom: 0px;
  padding-top: 16px;
  height: calc(100vh - 300px);
  position: relative;
  overflow: scroll;
  overflow-x: hidden;
`

const ChatInputWrapper = styled.div`
  width: calc(100% - 48px);
  margin: 0 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`

const ChatInputForm = styled.form`
  width: calc(100% - 64px);
  display: inline-block;
`

const ChatInputText = styled.input`
  font-size: 18px;
  width: calc(100% - 8px);
  font-family: NanumBarunGothicBold;
  padding: 0 0 8px 8px;
  outline: none;
  margin: 0;
  border: 0;
`

const ChatInputBtn = styled.input`
  display: none;
`

const ChatInputSubmitLabel = styled.div`
  display: inline-block;
  font-family: NanumBarunGothicBold;
  font-size: 18px;
  color: #A300CB;
  width: 56px;
  margin-right: 8px;
  text-align: right;
`