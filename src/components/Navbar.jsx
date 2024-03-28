import React, {useRef} from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose, IoCloseCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const overlayMenyuRef = useRef()
   

   

    const overlayMenyunuAc = () => {
      overlayMenyuRef.current.classList.add("aktiv")
    }

    const overlayMenyunuBagla = () => {
        overlayMenyuRef.current.classList.remove("aktiv")
    }




  return (
    <>
    <div className='overlay' ref={overlayMenyuRef}>
        <IoCloseCircle onClick={overlayMenyunuBagla} className='text-white close-icon position-absolute' />

        <nav className="nav-links d-flex flex-column justify-content-center align-items-center gap-2">
            <Link to="/" className='nav-link text-white'>What we do</Link>
            <a href=""className='nav-link text-white' >Career</a>
            <a href="" className='nav-link text-white'>Contact</a>
            <a href="" className='nav-link text-white'>Blog</a>
        </nav>  
    </div>

    <nav className="navbar navbar-expand-lg">
  <div className="container">
    <Link className="navbar-brand" to="/">
        <img src="/assets/images/logo.svg" alt="Solmaz Rzali" />
    </Link>
    <button onClick={overlayMenyunuAc} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FaBarsStaggered />

    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">What we do</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/kariyera">Career</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/bizimle-elaqe">Contact</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/bloqlar">Blog</Link>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>

</>
  )
}

export default Navbar