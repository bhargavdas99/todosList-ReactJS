import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom";

export default function Header(props) {
  const myStyle={
    // fontWeight:"bold"
    fontSize:"1.2em",
    
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary"  data-bs-theme={props.mode === "dark" ? 'dark' : 'light'}>
        <div className="container-fluid" style={myStyle}>
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse"  id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>


              <li style={{ position: "absolute",top:'1em', right: "4em" }}>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle} />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault " style={{color: props.mode==="dark"?'white':'black'}}>{props.text}</label>
                
              </div>

            </li>

          </ul>


        </div>

      </div>
    </nav >
    </>
  )
}
Header.defaultProps = {
  title: "Insert title here",
  search: true
}
Header.propTypes = {
  title: PropTypes.string,
  search: PropTypes.bool.isRequired
}