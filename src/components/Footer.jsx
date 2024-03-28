import React from 'react'

const Footer = () => {
  return (
    <>

        <footer className='bg-dark py-5'>
            <div className="container">
                <div className="row">

                    <div className="col-12 col-md-4 py-5">
                        <img src="/assets/images/footer.svg" alt="" />
                    </div>

                    <div className="col-12 col-md-4">
                        <h5 className='text-white'>Contact Us</h5>

                        <div className="text">
                          <p className='text-secondary'>If you want to implement your business ideas: </p>
                          <a href="mailto:hello@pecodesoftware.com" className='text-light'>hello@pecodesoftware.com</a>
                        </div>


                        <div className="text">
                        <p className='text-secondary'>If you want to implement your business ideas: </p>
                          <a href="mailto:hello@pecodesoftware.com" className='text-light'>hello@pecodesoftware.com</a>
                        </div>


                    </div>

                    <div className="col-12 col-md-4 text-white">
                      <h5> Follow us</h5>

                      <div className="social-links d-flex gap-3 my-4">
                     
                          <a href="https://instagram.com/anvarkhalidofficial" className='text-white'>
                            <img src="/assets/images/footer-icons/behance.svg" alt="" />
                          </a>

                          <a href="https://instagram.com/anvarkhalidofficial">
                            <img src="/assets/images/footer-icons/behance.svg" alt="" />
                          </a>

                          <a href="https://instagram.com/anvarkhalidofficial">
                            <img src="/assets/images/footer-icons/linkedin.svg" alt="" />
                          </a>

                          <a href="https://instagram.com/anvarkhalidofficial">
                            <img src="/assets/images/footer-icons/ay.svg" alt="" />
                          </a>

                          <a href="https://instagram.com/anvarkhalidofficial">
                            <img src="/assets/images/footer-icons/top.svg" alt="" />
                          </a>
                      </div>

                      <address className='fw-light'>Akademika Andriya Sakharova St, 37, Lviv, Lviv Oblast, Ukraine, 79000</address>
                    </div>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer