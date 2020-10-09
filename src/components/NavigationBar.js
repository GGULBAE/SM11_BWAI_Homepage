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
    <div style={style_NavigationWrapper}>
      <div style={style_NavigationLogo}>
        <img src={require("../assets/logo_bwai.svg")} alt="" linkto={"home"} onClick={linkTo}/>
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

const absolute_top_value = (59 / 2) + "px";

const style_NavigationWrapper = {
  position: "absolute",
  fontFamily: "Noto Sans KR, sans-serif",
  zIndex: "100",
  color: "#707070",
  fontSize: "24px",
  fontWeight: "400",
  letterSpacing: "30",
  lineHeight: "34px",
  width: "100vw",
  backgroundColor: "#000",
  height: "93px"
}

const style_NavigationLogo = {
  position: "absolute",
  top: absolute_top_value,
  left: "48px",
  cursor: "pointer"
}

const style_NavigationBtns = {
  textAlign: "center"
}

const style_NavigationBtn = {
  display: "inline-block",
  margin: "0px 18px 0 18px",
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
  right: "48px",
  cursor: "pointer"
}