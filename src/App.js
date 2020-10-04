import React from 'react';

// import Main from './assets/1.svg';

function App() {
  return (
    <div style={style_imageWrapper}>
      {/* <svg>

      </svg> */}
      {/* <Main/> */}
      {/* {
        require("./assets/1.svg")
      } */}
      <img style={style_imageSVG} src={require("./assets/price.svg")} alt=""></img>
    </div>
  );
}

export default App;

const style_imageWrapper = {
  width: "100vw",
  height: "100vh",
  textAlign: "center"
}

const style_imageSVG = {
  // width: "auto",
  // height: "auto",
  maxWidth: "100%",
  // maxHeight: "100%"
  // height: "100%"
}