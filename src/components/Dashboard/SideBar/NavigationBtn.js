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
  &.highlight {
    color: #3F51B5;
  }
`

const Btn = styled.p``