import React from 'react'
import NavScrollExample from '../HeaderAdmin/HeaderAdmin'
import "./Dashboard.scss"

function DashboardAdmin() {
  return (
    <div className='col-sm-12 p-0'>
        <div className='col-sm-12 p-0'>
            <NavScrollExample/>
        </div>
        
        <div className='col-sm-12 mt-4 padding_admin '>
          <h2 className='color_gray pb-4'><b>Admin Dashboard</b></h2>
           <div className='row'>
            <div className='col-sm-4'>
              <div className='col-sm-12 p-4 card_style'>
                <div className='col-sm-12 pb-5'>
                <span className='advisor_icon pb-5' > <i class="fas fa-user-shield"></i></span>
                </div>
                <div className='col-sm-12 '>
                <h4 className='color_gray'><b>ADVISOR</b></h4>
                </div>
                <div className='col-sm-12 '>
                <hr/>
                </div>
                <div className='col-sm-12 '>
                 <h6 className='color_gray'><b>Humain machine verification 3.0</b></h6>
                 <h6 className='color_gray'><b>Universal Solution</b></h6>
                </div>
              </div>
            </div>
           </div>
        </div>
       
        
        </div>
  )
}

export default DashboardAdmin