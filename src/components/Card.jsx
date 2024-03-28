import React from 'react'



const Card = ({basliq, metn, meqaleninShekli, authorProps}) => {
  
  return (
    <div className="card p-3 border-0 position-relative" data-aos="zoom-in">
      <span class="badge pm bg-light text-dark position-absolute">Partner material</span>
      <span class="badge qa bg-success text-light position-absolute">QA</span>
      <span class="badge ui bg-warning text-light position-absolute">UI/UX</span>
  <img src={meqaleninShekli} className='meqale-img' />
  <div className="card-body">
    <h3 className="card-title h5">{basliq}</h3>
    <p className="card-text">{metn}</p>
    <div className="metadata">
      <span id='author' className='me-2'>
   
        {authorProps}
      </span>

      <span id="date">19.03.2024</span>
    </div>
  </div>
</div>
  )
}

export default Card