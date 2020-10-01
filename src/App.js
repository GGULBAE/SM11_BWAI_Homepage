import React from 'react';

function App() {
  return (
    <div style={style_imageWrapper}>
      <img style={style_imageSVG} src={require("./assets/1.svg")} alt=""></img>
    </div>
  );
}

export default App;

const style_imageWrapper = {
  width: "100vw",
  height: "100vh"
}

const style_imageSVG = {
  width: "100%",
  height: "100%"
}