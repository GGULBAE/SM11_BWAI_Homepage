import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getConfig from './getConfig';

export default function Account({apiKey}) {
  const [API_Token, setAPI_Token] = useState("");

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_SERVER}/api/auth/api_token`;
    const config = getConfig(apiKey);

    Axios.get(url, config)
    .then((res) => {
      console.log(res);

      var result = res.data.result.api_token;
      
      setAPI_Token(result);
    })
  }, [apiKey])
  return <AccountWrapper>
    <TitleWrapper>
      <Title>Account Infos</Title>
    </TitleWrapper>
    <ContentsWrapper>
      <ContentsTitle>
        User Token
      </ContentsTitle>
      <Token>
        {apiKey}
      </Token>
      <Contents>
        ● 유저 토큰은 계정의 고유한 토큰입니다.<br/>
        ● BWAI API Token을 얻기 위한 초기화 작업에서 필요한 토큰이며, 재발급이 불가합니다.<br/>
      </Contents>
      <ContentsTitle className="margin">
        BWAI API Token
      </ContentsTitle>
      <Token>
        {API_Token}
      </Token>
      <Contents>
        ● BWAI 토큰은 API 이용을 위해 필요한 토큰입니다.<br/>
        ● BWAI API를 이용하기 위해선 해당 토큰이 패킷 헤더에 필수적으로 포함되어야 합니다.<br/>
        ● 해당 API 이용 내역은 Dashboard에서 확인할 수 있습니다.<br/>
        ● 해당 토큰은 한시간 이내에 사용이 없으면 자동 만료 됩니다.
      </Contents>
    </ContentsWrapper>
  </AccountWrapper>
}


const AccountWrapper = styled.div`
  margin: 24px;
  border-radius: 5px 5px;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
  background-color: #FFF;
  overflow-x: scroll;
  height: calc(100vh - 64px - 48px);
`

const TitleWrapper = styled.div`
  padding: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`

const Title = styled.p`
  margin: 0;
  font-weight: bold;
`

const ContentsWrapper = styled.div`
  padding: 16px;
`

const ContentsTitle = styled.p`
  font-size: 24px;
  margin: 16px 0 8px 0;
  &.margin {
    margin-top: 50px;
  }
`

const Contents = styled.p`
  padding-left: 16px;
  line-height: 24px;
`

const Token = styled.div`
  padding: 16px;
  background-color: #F4F6F8;
  overflow-x: scroll;
`