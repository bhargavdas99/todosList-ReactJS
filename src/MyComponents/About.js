import React from 'react'

export const About = (props) => {

  const myStyle={
    minHeight: "100vh",
    display: "flex",
    flexDirection : "column",
    alignItem: "center",
    textAlign:"center",
    fontSize:"1.5rem"
     }
  const p={
    color: props.mode==="dark"?'white':'black',
    fontStyle:"italic",
    // fontWeight:"bold"
  }
  let h1={
    marginTop: "2rem",
    marginBottom: "3rem",
    color:"red",
    textDecoration:"underline"
  }
  return (
    <>
    <div style={myStyle}>
    <h1 style={h1}>About this APP</h1>
    <div className="p" style={p}>
    <p>This App is created by using React JS. Its a fully working Todos list app. Enjoy!!</p>
    <p >-This app was created by Bhargab Das</p>
    </div>
    </div>
    </>
  )
}
