import React from 'react'
import profilepic from './Imagedata/profilepic.png'
const Richel = () => {
  return (
    <>
      <div className="container-fluid  " style={{marginTop:'-250px'}}>
          <div className="row">
              <div className="col-1"></div>
              <div className="col-4">
                <h4>Rachel Green</h4>
                <div>
                    <p>
                        Born and brought up in San Francisco, California, I am an aquarian
                        who just turned 13 years old. Just so you know, I am the crazy
                        acquarian everyone warned you about. On one side, I love exploring
                        different things. On the other side, I do have a serious goal of
                        becoming an entreprenuer.
                    </p>
                </div>
                <div className='my-2'>
                    <p>
                    Fun and super cool with a contagious disease called AWESOME -
                    That’s who I am.
                    </p>
                </div>
                <div>
                <button type="button" class="btn btn-success">LET’S TALK!</button>
                </div>
              </div>
              <div className="col-2">

              </div>
              <div className="col-4">
                 <img style={{width:'300px' , height:'300px',marginLeft:'160px'}} src={profilepic} alt="prof" srcset="" />
              </div>
          </div>
      </div>
    </>
  )
}

export default Richel;
