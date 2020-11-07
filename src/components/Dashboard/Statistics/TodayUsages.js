import React from 'react';
import styled from 'styled-components';

const getRate = (prev, current) => {
  const rate = current / prev;
  
  return rate;
}

export default function TodayUsages({ apiKey, type, prev, current }) {
  const rate = getRate(prev, current);

  return <TodayUsagesWrapper>
    <TitleWrapper>
      <Title>
        당일 사용량 
        <TitleType>({type})</TitleType>
      </Title>
    </TitleWrapper>
    <ContentsWrapper>
      <CurrentData>
        {current}회
      </CurrentData>
      <CompareToPrev>
        <Arrow rate={rate}></Arrow>
        <RateWrapper className={rate > 1 ? "up" : "down"}>{rate * 100}%</RateWrapper>
        <RateDate>since yesterday</RateDate>
      </CompareToPrev>
    </ContentsWrapper>
  </TodayUsagesWrapper>
}

const Arrow = ({rate}) => {
  const ArrowWrapper = styled.div`
    display: inline-block;
    height: 24px;
  `

  return <ArrowWrapper>
    { rate > 1 ? 
    <UP_SVG class="MuiSvgIcon-root jss25" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
    </UP_SVG> : 
    <DOWN_SVG class="MuiSvgIcon-root jss20" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
    </DOWN_SVG>
    }
  </ArrowWrapper>
}

const UP_SVG = styled.svg`
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
  color: #1b5e20;
`
const DOWN_SVG = styled.svg`
  -webkit-font-smoothing: antialiased;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  fill: currentColor;
  width: 1em;
  height: 1em;
  display: inline-block;
  font-size: 1.5rem;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  flex-shrink: 0;
  user-select: none;
  color: #b71c1c;
`

const TodayUsagesWrapper = styled.div`
  margin-right: 24px;
  border-radius: 5px 5px;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  background-color: #FFF;
  // overflow-x: scroll;
  overflow: hidden;
`

const TitleWrapper = styled.div`
  padding: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`

const Title = styled.p`
  margin: 0;
  font-weight: bold;
`

const TitleType = styled.span`
  font-weight: normal;
  color: rgba(0, 0, 0, 0.6);
`

const ContentsWrapper = styled.div`
  padding: 16px;
  text-align: right;
`

const CurrentData = styled.p`
  font-size: 24px;
  margin-top: 12px;
  margin-bottom: 0;
`
const CompareToPrev = styled.p`
  margin: 0;
`

const RateWrapper = styled.span`
  font-size: 12px;
  &.up {
    color: #1b5e20;
  }

  &.down {
    color: #b71c1c;
  }
`
const RateDate = styled.p`
  font-size:12px;
  color: gray;
  margin: 0;
`