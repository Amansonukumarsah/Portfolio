import React from 'react'
import Menu  from './Menu'
import Richel from './Richel'
import Hustel  from './Hustel'
import Work from './Workcomponents/Work'
import Proud from './Proudcomponents/Proud'
import Sidehustle from './Slidehustlecomponents/Sidehustle'
import Footer from './Footercomponents/Footer'
import './Css/Portfolio.css'
export const Portfoliomain = () => {
  return (
    <>
     <div className='body'>

       <div className="container-fluid">
         <div className="row">
           <div className="col-12">
            <Menu/>
            <Richel/>
            <Hustel/>
            <Work/>
            <Proud/>
            <Sidehustle/>
            <Footer/>
           </div>
         </div>
       </div>

     </div>
    </>
  )
}
