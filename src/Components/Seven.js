import React from 'react'

const Seven = () => {
  return (
    <>
      <div className='contai4'>
        <div className='contai3'>
          <h1>Testimonials</h1>
          <p>Read what our Current students and alumni have to say about their SQI experience. </p>
          <div className='contai5'>
            <div className='innercontai'>
              <div className='sodiv'>
                <img src={require('./software-engineering-630x330-1.webp')} alt="" />
              </div>
              <div className='stardiv'>
                <p className='sqi'>SQI COLLEGE OF ICT IBADAN</p>
                4.9 <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                <p>Based on 84 reviews</p>
                <p>powered by Google</p>
                <button className='review'>review us on <i className='fa fa-google'></i></button>
              </div>
            </div>
            <div id="carouselExampleIndicators" class="carousel slide w-100">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className='inercontai'>
                    <div className='sodiv'>
                      <img src={require('./software-engineering-630x330-1.webp')} alt="" />
                    </div>
                    <div className='stardiv'>
                      <p className='sqi'>SQI COLLEGE OF ICT IBADAN</p>
                      4.9 <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                      <p>Based on 84 reviews</p>
                      <p>powered by Google</p>
                      <button className='review'>review us on <i className='fa fa-google'></i></button>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className='inercontai'>
                    <div className='sodiv'>
                      <img src={require('./DATA-SQI.webp')} alt="" />
                    </div>
                    <div className='stardiv'>
                      <p className='sqi'>SQI COLLEGE OF ICT IBADAN</p>
                      4.9 <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                      <p>Based on 84 reviews</p>
                      <p>powered by Google</p>
                      <button className='review'>review us on <i className='fa fa-google'></i></button>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div className='inercontai'>
                    <div className='sodiv'>
                      <img src={require('./software-engineering-630x330-1.webp')} alt="" />
                    </div>
                    <div className='stardiv'>
                      <p className='sqi'>SQI COLLEGE OF ICT IBADAN</p>
                      4.9 <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i> <i className='fa fa-star'></i>
                      <p>Based on 84 reviews</p>
                      <p>powered by Google</p>
                      <button className='review'>review us on <i className='fa fa-google'></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Seven