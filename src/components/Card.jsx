import React from 'react'

const Card = (props) => {
  console.log(props)
  return (
    <div className="card p-3 border-0 position-relative">
      <span class="badge pm bg-light text-dark position-absolute">Partner material</span>
      <span class="badge qa bg-success text-light position-absolute">QA</span>
      <span class="badge ui bg-warning text-light position-absolute">UI/UX</span>
  <img src={props.meqaleninShekli} />
  <div className="card-body">
    <h3 className="card-title">{props.basliq}</h3>
    <p className="card-text">{props.metn}</p>
    <div className="metadata">
      <span id='author'>
        <img src="assets/images/favicon.svg" alt="Author" />
        Pecode Team
      </span>

      <span id="date">19.03.2024</span>
    </div>
  </div>
</div>
  )
}

export default Card