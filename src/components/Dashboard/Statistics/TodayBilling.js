import React from 'react';
import styled from 'styled-components';

export default function TodayUsages({ apiKey }) {
  return <TodayUsagesWrapper>
    <TitleWrapper>
      <Title>Today</Title>
    </TitleWrapper>
  </TodayUsagesWrapper>
}

const TodayUsagesWrapper = styled.div`
  margin-right: 12px;
  // width: calc(100% - 36px);
  border-radius: 5px 5px;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  background-color: #FFF;
  overflow-x: scroll;
`

const TitleWrapper = styled.div`
  padding: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`

const Title = styled.p`
  margin: 0;
  display: inline-block;
  font-weight: bold;
  width: calc(100% - 156px);
`