import React from 'react'
import Shdata from './Shdata'
import Hsdata from './Hsdata'
const Sidehustle = () => {
  return (
    <>
      <div className='my-5'>
         <div className="container-fluid">
           <div className="row">
             <div className="col-3 " style={{marginTop:'290px'}}>
               <h1 className='text-success mx-3' style={{fontSize:'500%'}}>My <br/>Side <br/> Hustle</h1>
               <p className='mx-3 text-danger'>When I’m free, you’ll find me doing one of these.Honestly, I hate to laze around!</p>
             </div>
             <div className="col-3"></div>
             
             <div className="col-3 my-5">
             {
               Hsdata.map((val,ind)=>
                      <img src={val.imgsrc} alt="" srcset="" />
               )
             }
             </div>

             <div className="col-3">
             {
               Shdata.map((val,ind)=>
                      <img src={val.imgsrc} alt="" srcset="" />
               )
             }
             </div>
           </div>
         </div>
      </div>
    </>
  )
}

export default Sidehustle;
