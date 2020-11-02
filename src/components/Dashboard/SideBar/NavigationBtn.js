import React from 'react';
import styled from 'styled-components';

export default function NavigationBtn({ text, highlight, setView }) {
  const style_BtnWrapper = highlight ? "highlight" : "";

  function clickText(e) {
    e.preventDefault();
    setView(text);
  }

  return <NavigationBtnWrapper className={style_BtnWrapper}>
    <Btn onClick={clickText}>{text}</Btn>
  </NavigationBtnWrapper>
}

const NavigationBtnWrapper = styled.div`
  padding: 10px 8px;
  color: #546e7a;
  line-height: 1.75;

  &:hover {
    cursor: pointer;
    background-color: #f7f7f7;
  }

  &.highlight {
    color: #3F51B5;
    font-weight: 500;
    // font-weight: bold;
  }
`

const Btn = styled.p`
  margin: 0;
  padding: 0;
`