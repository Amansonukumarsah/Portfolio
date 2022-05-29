import React from 'react'
import bg from './Imagedata/bg.png'
const Hustel = () => {
  return (
    <>
      <div className="container-fluid my-5">
          <div className="row">
              <div className="col-4 relabsolute">
                <div className="rel">
                    <img  src={bg} alt="bg" />
                </div>
                <div className="absolute">
                  <h1 >My <br /> Main <br /> Hustle</h1>
                </div>
              </div>
              <div className="col-1"></div>
              <div className="col-4">
                 <h4 className='text-success'>Aug 2019 - Jun 2020</h4>
                 <h6>Sunbeam Sr. Secondary School</h6>
                 <div>
                     <p>
                     I’ve bagged a lot of prizes both in Academics and Extracurriculars. These
                     are some of the achievements I’m most proud of.
                     </p>
                 </div>
                 <h4 className='text-success'>Aug 2019 - Jun 2020</h4>
                 <h6>Sunbeam Sr. Secondary School</h6>
                 <div>
                     <p>
                     I’ve bagged a lot of prizes both in Academics and Extracurriculars. These
                        are some of the achievements I’m most proud of.
                     </p>
                 </div>
              </div>
              <div className="col-3"></div>
          </div>
      </div>
    </>
  )
}

export default Hustel;