import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Aboutuscrousl.scss"

function Aboutuscrousl() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className='col-sm-12 p-0 mt-4'>
      <Carousel responsive={responsive}>
      <div className='col-sm-12 p-0'>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='col-sm-12 background_card p-4'>
            <div className='col-sm-12 background_card1 p-3'>
                <div className='row'>
                  <div className='col-sm-2'>
                    <img className='img-fluid' src='https://microacquire.com/assets/img/bvp-investor.8ee987.svg' />
                  </div>
                  <div className='col-sm-10'>
                  <div className="col-sm-12 ">
               <h6><b>Andrew Gazdecki</b> <img src="https://microacquire.com/assets/img/linkedin-icon.5a401c.png" className="img-fluid linkedin1" /></h6>
               <h6>Founder of MicroAcquire</h6>
              </div>
                  </div>
                </div>
            </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='col-sm-12 background_card p-4'>
            <div className='col-sm-12 background_card1 p-3'>
                <div className='row'>
                  <div className='col-sm-2'>
                    <img className='img-fluid' src='https://microacquire.com/assets/img/hubspot-investor.423324.svg' />
                  </div>
                  <div className='col-sm-10'>
                  <div className="col-sm-12 ">
               <h6><b>Andrew Gazdecki</b> <img src="https://microacquire.com/assets/img/angelList-investor.0f811f.svg" className="img-fluid linkedin1" /></h6>
               <h6>Founder of MicroAcquire</h6>
              </div>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-sm-6'>
            <div className='col-sm-12 background_card p-4'>
            <div className='col-sm-12 background_card1 p-3'>
                <div className='row'>
                  <div className='col-sm-2'>
                    <img className='img-fluid' src='https://microacquire.com/assets/img/angelList-investor.0f811f.svg' />
                  </div>
                  <div className='col-sm-10'>
                  <div className="col-sm-12 ">
               <h6><b>Andrew Gazdecki</b> <img src="https://microacquire.com/assets/img/mercury-investor.369aad.svg" className="img-fluid linkedin1" /></h6>
               <h6>Founder of MicroAcquire</h6>
              </div>
                  </div>
                </div>
            </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='col-sm-12 background_card p-4'>
            <div className='col-sm-12 background_card1 p-3'>
                <div className='row'>
                  <div className='col-sm-2'>
                    <img className='img-fluid' src='https://microacquire.com/assets/img/mercury-investor.369aad.svg' />
                  </div>
                  <div className='col-sm-10'>
                  <div className="col-sm-12 ">
               <h6><b>Andrew Gazdecki</b> <img src="https://microacquire.com/assets/img/linkedin-icon.5a401c.png" className="img-fluid linkedin1" /></h6>
               <h6>Founder of MicroAcquire</h6>
              </div>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-sm-12 p-0'>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='col-sm-12 background_card p-4'>
            <div className='col-sm-12 background_card1 p-3'>
                <div className='row'>
                  <div className='col-sm-2'>
                    <img className='img-fluid' src='https://microacquire.com/assets/img/bvp-investor.8ee987.svg' />
                  </div>
                  <div className='col-sm-10'>
                  <div className="col-sm-12 ">
               <h6><b>Andrew Gazdecki</b> <img src="https://microacquire.com/assets/img/linkedin-icon.5a401c.png" className="img-fluid linkedin1" /></h6>
               <h6>Founder of MicroAcquire</h6>
              </div>
                  </div>
                </div>
            </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='col-sm-12 background_card p-4'>
            <div className='col-sm-12 background_card1 p-3'>
                <div className='row'>
                  <div className='col-sm-2'>
                    <img className='img-fluid' src='https://microacquire.com/assets/img/hubspot-investor.423324.svg' />
                  </div>
                  <div className='col-sm-10'>
                  <div className="col-sm-12 ">
               <h6><b>Andrew Gazdecki</b> <img src="https://microacquire.com/assets/img/angelList-investor.0f811f.svg" className="img-fluid linkedin1" /></h6>
               <h6>Founder of MicroAcquire</h6>
              </div>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-sm-6'>
            <div className='col-sm-12 background_card p-4'>
            <div className='col-sm-12 background_card1 p-3'>
                <div className='row'>
                  <div className='col-sm-2'>
                    <img className='img-fluid' src='https://microacquire.com/assets/img/angelList-investor.0f811f.svg' />
                  </div>
                  <div className='col-sm-10'>
                  <div className="col-sm-12 ">
               <h6><b>Andrew Gazdecki</b> <img src="https://microacquire.com/assets/img/mercury-investor.369aad.svg" className="img-fluid linkedin1" /></h6>
               <h6>Founder of MicroAcquire</h6>
              </div>
                  </div>
                </div>
            </div>
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='col-sm-12 background_card p-4'>
            <div className='col-sm-12 background_card1 p-3'>
                <div className='row'>
                  <div className='col-sm-2'>
                    <img className='img-fluid' src='https://microacquire.com/assets/img/mercury-investor.369aad.svg' />
                  </div>
                  <div className='col-sm-10'>
                  <div className="col-sm-12 ">
               <h6><b>Andrew Gazdecki</b> <img src="https://microacquire.com/assets/img/linkedin-icon.5a401c.png" className="img-fluid linkedin1" /></h6>
               <h6>Founder of MicroAcquire</h6>
              </div>
                  </div>
                </div>
            </div>
            </div>
          </div>
        </div>
      </div>
     
    </Carousel>
    </div>
  )
}

export default Aboutuscrousl