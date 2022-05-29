import React from 'react'
import Prouddata from './Prouddata'
import Pdata from './Pdata'

 const Proud = () => {
  return (
    <>
      <div className="container-fluid">
          <div className="row">
              <div className="col-3">
                 {
                   Prouddata.map((val,ind)=>
                   <div className='my-5'>
                     <div className="bg-success" style={{width:'20px' ,height:'3px'}}></div>
                      <p >{val.data}</p>
                   </div>
                   )
                 }
              </div>
              <div className="col-3">
              {
                   Pdata.map((val,ind)=>
                   <div className='my-5'>
                     <div className="bg-success" style={{width:'20px' ,height:'3px'}}></div>
                     <div className="bg-success"></div>
                      <p >{val.data}</p>
                   </div>
                   )
                 }
              </div>
              <div className="col-3"></div>
              <div className="col-3">
                   <div className='bg-success proud'>
                     <div className='text-center' style={{marginLeft:'20px'}}>
                          <h1 className='text-white'>I'M <br/> PROUD <br/>OF</h1>
                     </div>
                   </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Proud;
