import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
   <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/rajvi-khandelwal" target="__blank">
          Rajvi Khandelwal
        </a>
      </span>
      <hr style={{ width: "90%" }} />    
    </div>
  )
}

export default Footer