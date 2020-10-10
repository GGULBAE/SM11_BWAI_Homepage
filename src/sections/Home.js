import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import './Home.css';
var automatic_scroll;
var automatic_animation;

function afterLoad(origin, destination, direction) {
  if (automatic_scroll)
    clearInterval(automatic_scroll);
  if (automatic_animation)
    clearInterval(automatic_animation);
  
  automatic_scroll = setInterval(() => {
    var target = document.getElementsByClassName("fp-controlArrow fp-next");
    if (target) {
      target = target[0];
    } else {
      return;
    }
    target.click();
  }, 3000)

  automatic_animation = start_Animation();
}

function start_Animation() {
  console.log("AnimationStart");
}

function end_Animation() {
  console.log("AnimationEnd");
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
    scrollingSpeed = {750} /* Options here */
    afterLoad = {afterLoad}
    afterSlideLoad = {afterSlideLoad}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div className="slide" style={style_Slide}>
              <embed style={style_Main} src={require("../assets/homepage1.svg")} type="image/svg+xml"></embed>
              <embed style={style_AboutUs} src={require("../assets/AboutUs.svg")} type="image/svg+xml"></embed>
              <embed style={style_B} src={require("../assets/Main_B.svg")} type="image/svg+xml"></embed>
              {/* <embed style={style_B} src={require("../assets/Main_Remain.svg")} type="image/svg+xml"></embed> */}

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

const style_B = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
}