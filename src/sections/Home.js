import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './Home.css';
var automatic_scroll;

function afterLoad(origin, destination, direction) {
  if (automatic_scroll)
    clearInterval(automatic_scroll);
  
  automatic_scroll = setInterval(() => {
    var target = document.getElementsByClassName("fp-controlArrow fp-next");
    if (target) {
      target = target[0];
    } else {
      return;
    }
    target.click();
  }, 5000)

  start_Animation();
}

function start_Animation() {
  console.log("AnimationStart");
  const mainB = document.getElementById("MainB");
  const mainRemains = document.getElementById("MainRemains");

  mainB.classList.add("AnimateLeft");
  mainRemains.classList.add("AnimateOpacity");
}

function end_Animation() {
  console.log("AnimationEnd");
  const mainB = document.getElementById("MainB");
  const mainRemains = document.getElementById("MainRemains");

  mainB.classList.remove("AnimateLeft");
  mainRemains.classList.remove("AnimateOpacity");
}

function afterSlideLoad(section, origin, destination, direction) {
  console.log(section, origin, destination, direction);
  const current_index = destination.index;
  if (current_index === 0) {
    start_Animation();
  } else {
    end_Animation()
  }
}

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    arrowNavigation ={false}
    scrollingSpeed = {1000} /* Options here */
    afterLoad = {afterLoad}
    afterSlideLoad = {afterSlideLoad}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div className="slide" style={style_Slide}>
              <embed style={style_Main} src={require("../assets/homepage1.svg")} type="image/svg+xml"></embed>
              <embed style={style_AboutUs} src={require("../assets/AboutUs.svg")} type="image/svg+xml"></embed>
              <img id="MainB" src={require("../assets/Main_B.svg")} alt=""></img>
              <img id="MainRemains" src={require("../assets/Main_Remain.svg")} alt=""></img>

            </div>
            <div className="slide" style={style_Slide}>
              <embed style={style_Main} src={require("../assets/homepage2.svg")} type="image/svg+xml"></embed>
              <embed style={style_AboutUs} src={require("../assets/AboutUs.svg")} type="image/svg+xml"></embed>
            </div>
            <div className="slide" style={style_Slide}>
              <embed style={style_Main} src={require("../assets/homepage3.svg")} type="image/svg+xml"></embed>
              <embed style={style_AboutUs} src={require("../assets/AboutUs.svg")} type="image/svg+xml"></embed>
            </div>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default function Home(props) {
    return <React.Fragment>
        <Fullpage/>
    </React.Fragment>
}

const style_Slide = {
  position: "relative"
}
const style_Main = {
  position: "absolute",
  width: "100vw",
  top: 0,
}

const style_AboutUs = {
  position: "absolute",
  right: "120px",
  bottom: "65px"
}