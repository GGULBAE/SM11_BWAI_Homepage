import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import styled from 'styled-components';

import getConfig from '../getConfig.js';

const apiServer = process.env.REACT_APP_API_SERVER;

export default function UserInfo({ apiKey }) {
  const url = `${apiServer}/api/auth/info`;
  const [name, setName] = useState("loading")

  useEffect(() => {
    const config = getConfig(apiKey);
    
    Axios.get(url, config)
      .then((res) => {
        var result = res.data.result;
        var user_id = result.user_id;

        setName(user_id);
      })
  }, [apiKey, url])

  return <ProfileWrapper>
    <ImgWrapper>
      <Img src={require("../../../assets/Main_B.svg")} alt="" />
    </ImgWrapper>
    <Name>{name} 님</Name>
    <Level>정회원</Level>
  </ProfileWrapper>
}

const ProfileWrapper = styled.div`
  padding: 8px 0 16px 0;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
`

const ProfileText = styled.p`
  font-size: 16px;
  margin: 0;
  line-height: 1.334;
`

const Name = styled(ProfileText)`
  font-weight: bold;
`

const Level = styled(ProfileText)`
  color: gray;
`

const ImgWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50px;
  margin: 0 auto;
  background: gray;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`