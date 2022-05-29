import React from 'react'
import face from './Fimagedata/facebook.png'
import insta from './Fimagedata/instagram.png'
import youtube from './Fimagedata/youtube.png'
const Footer = () => {
  return (
    <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-3 bg-success foot text-center ">
              <h1 className='text-white'>Contact</h1>
              <small className='text-white'>amankumarshah8102@gmail.com</small>
              <div className='d-flex text-center'>
                <img className='img face' src={face} alt="pic" />
                <img className='img mx-1' src={insta} alt="pic" />
                <img className='img mx-1' src={youtube} alt="pic" />
              </div>
            </div>
            <div className="col-7"></div>
            <div className="col-2 fl">
              <p>All rights reserved..</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Footer;
