import React from 'react'
import '../../styles/footer.scss'
function Footer() {
  return (
    <div className='footer'>
        <div className="footerImg"></div>
        <div className='footertext'>
           <p> GOT JOKES? 
            GET PAID
            </p> 
            <p>FOR SUBMITTING</p>

            <p>submit now <img src={require("../../assets/assets_Homework_Front-End_01/path@3x.png")} alt="" /> </p>
        </div>

    </div>
  )
}

export default Footer