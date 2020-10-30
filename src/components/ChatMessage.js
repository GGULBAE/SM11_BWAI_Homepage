import React from 'react';
import styled from 'styled-components';
import { SystemChat, UserChat} from './Chat.js';

export default function ChatMessage({ data, scrollToBottom }) {
  const isSystem = data.direction === 'left';
  const myText = data.text;
  const possibility = data.possibility;
  
  return <React.Fragment>
    { isSystem ? <SystemChat text={myText} scrollToBottom={scrollToBottom} possibility={possibility}/> : <UserChat text={myText}/> }
    <ClearDiv/>
  </React.Fragment>
}

const ClearDiv = styled.div`
  display: block;
  clear: both;
`