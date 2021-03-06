import React from 'react'

const Display = ({
  segmentA,
  segmentB,
  segmentC,
  segmentD,
  segmentE,
  segmentF,
  segmentG,
  value,
  changeValue,
  clickButtonDisplay}) =>{

  const displayContainer = {
    top: "170px",
    left: "550px",
    width: "122px",
    height: "220px",
    position: "relative",
  	marginRight: "24px",
  	float: "left"
  }
  const h1 = {
    position: "absolute",
   top: "100px",
   left: "440px",
  }
  const inputContainer = {
    position: "relative",
    top: "400px",
    left: "400px",
  }
  const segmentBorderX ={
    display: "block",
  	position: "absolute",
  	top: "12px",
  	left: "-12px",
  	right: "-12px",
  	borderTop: "12px solid #000",
  	borderLeft: "12px solid transparent",
  	borderRight: "12px solid transparent"
  }
  const segmentBorderY ={
    display: "block",
  	position: "relative",
  	left: "12px",
  	height: "72px",
  	marginTop: "-12px",
  	borderLeft: "12px solid #000",
  	borderTop: "12px solid transparent",
  	borderBottom: "12px solid transparent",
  }
  const changeValueFinal = (event) => { changeValue(event.target.value)}

  return(
    <div>
        <h1 style={h1}>DISPLAY REACT-REDUX</h1>
  			<div style={displayContainer}>
  				<div style={segmentA}><span style={segmentBorderX}></span></div>
  				<div style={segmentB}><span style={segmentBorderY}></span></div>
  				<div style={segmentC}><span style={segmentBorderY}></span></div>
  				<div style={segmentD}><span style={segmentBorderX}></span></div>
  				<div style={segmentE}><span style={segmentBorderY}></span></div>
  				<div style={segmentF}><span style={segmentBorderY}></span></div>
  				<div style={segmentG}><span style={segmentBorderX}></span></div>
  			</div>
        <div style={inputContainer}>
        <form >
        <input
            type="text"
            value={value}
            onChange={changeValueFinal}
        />
        </form>
        <button onClick={(event) => { clickButtonDisplay(value)}}>OK</button>
        </div>
   </div>
  )
}

export default Display
