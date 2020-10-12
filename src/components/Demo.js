import React from 'react';

export default function Demo(props) {

  return <React.Fragment>
    <div style={style_Navigation_Shadow}></div>
    <div style={style_Demo_Wrapper}>
      <p style={style_Demo_Title}>DEMO PAGE</p>
      <p style={style_Demo_SubTitle}>테스트 하고 싶은 욕을 적어주세요.</p>
      <h1>test</h1>
      {/* <div style={{width: "100%"}}>
          <embed style={{width: "100%", paddingBottom: "50px"}} src={require("../assets/LabelingTitle.svg")} type="image/svg+xml"></embed>
      </div> */}
      {/* {
          posts ? <POSTWrapper data={posts} /> : <></>
      } */}
    </div>
  </React.Fragment>
}

const style_Navigation_Shadow = {
  height: "96px"
}

const style_Demo_Wrapper = {
  padding: "50px 400px 0 400px"
}

const style_Demo_Title = {

}

const style_Demo_SubTitle = {
  
}