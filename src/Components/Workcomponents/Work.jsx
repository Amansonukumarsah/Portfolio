import React from 'react'
import Workimagedata from './Workimagedata.jsx'
const Work = () => {
  return (
    <>
      <div>
          <h1 className='text-center'>My Work</h1>
          <div className="container-fluid my-4">
              <div className="row">
                  <div className="col-3"></div>
                  <div className="col-6">
                  <div>
                    <p>
                        “I love coding and ever since I took up ProGrad Junior, I’ve built some cool projects. I’ve also
                        <h6 className='text-center'>picked up HTML, CSS and JavaScript”</h6>
                    </p>
                </div>
                  </div>
                  <div className="col-3"></div>
              </div>
          </div>
          <div className='my-5'>
               <div className="container">
                   <div className="work-box">
                       { 
                          Workimagedata.map((val,ind)=>
                          <div className=" work-card">
                              {/* <div> */}
                                <div className="bg-success wimg"></div>
                                <img className='imgpic' src={val.imgsrc} alt="pic" />
                              {/* </div> */}
                              <h4>{val.name}</h4>
                              <p>{val.data}</p>
                              <p className='text-success'>{val.pro}</p>
                          </div>
                       )
                       }
                   </div>
               </div>
          </div>
      </div>
    </>
  )
}

export default Work;


// col-3 offset-1 my-4