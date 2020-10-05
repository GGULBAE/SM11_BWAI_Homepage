import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

var automatic_scroll;

function afterLoad(origin, destination, direction) {
  console.log("---AFTER LOAD---")
  console.log(origin, destination, direction);
  // console.log("After load: " + destination.index);
  console.log("---AFTER LOAD FINISH---")

  if (automatic_scroll)
    clearInterval(automatic_scroll);
  
  automatic_scroll = setInterval(() => {
    var target = document.getElementsByClassName("fp-controlArrow fp-next");
    if (target) {
      target = target[0];
    } else {
      // do nothing
      return;
    }
    target.click();
  }, 3000)
}

const Fullpage2 = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    // scrollingSpeed = {750} /* Options here */
    debug
    // afterLoad = {afterLoad}
    
    render={({ state, fullpageApi }) => {
      console.log(state, fullpageApi);
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div className="slide">
              <embed style={style_Main} src={require("../assets/homepagetemp1.svg")} type="image/svg+xml"></embed>
            </div>
            <div className="slide">
              <embed style={style_Main} src={require("../assets/homepage2.svg")} type="image/svg+xml"></embed>
            </div>
            <div className="slide">
              <embed style={style_Main} src={require("../assets/homepage3.svg")} type="image/svg+xml"></embed>
            </div>
            {/* <div className="slide"> */}
            
            {/* </div> */}
            {/* <div className="slide">
              <embed style={style_Main} src={require("../assets/1.svg")} type="image/svg+xml"></embed>
            </div>
            <div className="slide">
              <embed style={style_Main} src={require("../assets/2.svg")} type="image/svg+xml"></embed>
            </div>
            <div className="slide">
              <embed style={style_Main} src={require("../assets/3.svg")} type="image/svg+xml"></embed>
            </div> */}
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

function Fullpage() {
  return <div style={style_Main_ImageWrapper}>
    <embed style={style_Main} src={require("../assets/homepagetemp1.svg")} type="image/svg+xml"></embed>
  </div>
}

export default function Home(props) {
    return <React.Fragment>
        <Fullpage2/>
    </React.Fragment>
}

const style_Main_Section = {
  // textAlign: "center",
  // backgroundColor: "#010102"
}

const style_Main_ImageWrapper = {
  width: "100%",
  height: "100%",
  position: "relative",
  overflow: "hidden"
}

const style_Main = {
  // position: "absolute",
  width: "100%"
  // // top: "60%",
  // left: "50%",
  // transform: "translate(-50%, 0%)",
  // // transform: "translate(-50%, -50%)",
  // width: "100vw",
  
  // height: "100vh"
  // height: "100%",

}