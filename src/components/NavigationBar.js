import React from 'react';

const bwai_dashboard = "http://dashboard.bwai.io";

function linkTo(e) {
  const target = e.target.getAttribute("linkto");
  if (!target)
    alert("invalid access!");
  else
    window.location.href = target;
}

export default function NavigationBar(props) {
  const Btns = ['home', 'team', 'service', 'price', 'demo', 'labelling'];
  const location_current = window.location.pathname.toLowerCase();
  const location_noSlash = location_current.replace("/", "");
  const highlight = location_noSlash ? location_noSlash : Btns[0];

  console.log(highlight);
  return (
    <div style={highlight !== "home" ? style_NavigationWrapper : style_NavigationWrapper_main}>
      <div style={style_NavigationLogo}>
        <img src={require("../assets/Logo_BWAI.svg")} alt="" linkto={"home"} onClick={linkTo}/>
      </div>
      <div style={style_NavigationBtns}>
        {
          Btns.map((data, index) => <NavigationBtn key={index} highlight={data === highlight} text={data}/>)
        }
      </div>
      <div style={style_NavigationDashBoard} linkto={bwai_dashboard} onClick={linkTo}>
        DASHBOARD
      </div>
    </div>
  )
}

function NavigationBtn({text, highlight}) {
  return <div style={highlight ? style_NavigationBtnHighlight : style_NavigationBtn} linkto={text} onClick={linkTo}>
    {text.toUpperCase()}
  </div>
}

// const absolute_top_value = (136 - 34) / 2 + "px";
const absolute_top_value = "30px";
const left_right_value = 120 + "px";

const style_NavigationWrapper = {
  position: "absolute",
  fontFamily: "NotoSansKR-Bold",
  zIndex: "100",
  color: "#707070",
  fontSize: "20px",
  letterSpacing: "30",
  lineHeight: "34px",
  width: "100%",
  backgroundColor: "#000",
  height: "96px"
}

const style_NavigationWrapper_main = {
  ...style_NavigationWrapper,
  // height: "96",
  backgroundColor: "none"
}

const style_NavigationLogo = {
  position: "absolute",
  // top: absolute_top_value,
  top: "50%",
  left: left_right_value,
  transform: "translate(0, -50%)",
  cursor: "pointer"
}

const style_NavigationBtns = {
  textAlign: "center"
}

const style_NavigationBtn = {
  display: "inline-block",
  margin: "0px 30px 0 30px",
  marginTop: absolute_top_value,
  cursor: "pointer"
}

const style_NavigationBtnHighlight = {
  ...style_NavigationBtn,
  color: "#FFF",
}

const style_NavigationDashBoard = {
  position: "absolute",
  top: absolute_top_value,
  right: left_right_value,
  cursor: "pointer"
}