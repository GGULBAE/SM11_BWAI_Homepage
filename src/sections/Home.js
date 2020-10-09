import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
// import './Home.css';
// var automatic_scroll;

// function afterLoad(origin, destination, direction) {
//   console.log("---AFTER LOAD---")
//   console.log(origin, destination, direction);
//   // console.log("After load: " + destination.index);
//   console.log("---AFTER LOAD FINISH---")

//   if (automatic_scroll)
//     clearInterval(automatic_scroll);
  
//   automatic_scroll = setInterval(() => {
//     var target = document.getElementsByClassName("fp-controlArrow fp-next");
//     if (target) {
//       target = target[0];
//     } else {
//       // do nothing
//       return;
//     }
//     target.click();
//   }, 3000)
// }

const Fullpage = () => (
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
              <embed style={style_Main} src={require("../assets/homepage1.svg")} type="image/svg+xml"></embed>

              {/* <div style={style_Main1B} className="animate">
                <img style={style_fillMain} src={require("../assets/main1B.svg")} alt=""></img>
              </div> */}

            </div>
            {/* <div className="slide">
              <embed style={style_Main} src={require("../assets/homepage2.svg")} type="image/svg+xml"></embed>
            </div>
            <div className="slide">
              <embed style={style_Main} src={require("../assets/homepage3.svg")} type="image/svg+xml"></embed>
            </div> */}
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

const style_Main = {
  position: "absolute",
  width: "100vw",
  // top: "50%",
  top: 0,
  // left: "calc(33.3333% / 2)",
  left: "0"
  // transform: "translate(0, -50%)"
}

// const style_Main1B = {
//   position: "absolute",
//   top: "50%",
//   left: "calc(33.3333% / 2)",
//   transform: "translate(-50%, -50%)"
// }

// const style_fillMain = {

// }