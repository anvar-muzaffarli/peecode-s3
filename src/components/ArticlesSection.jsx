import React, {useState, useEffect} from 'react'
import Card from './Card'

import axios from "axios"


const ArticlesSection = () => {

  // if for {} CPU RAM

  const [melumat, setMelumat] = useState([])

  // ""


  const API = 'c760fdbd29104b09a425931afdad15b6'


  // HOC Higher Order Component
  useEffect(()=> {
    axios.get(`https://newsapi.org/v2/everything?q=apple&from=2024-03-13&to=2024-03-13&sortBy=popularity&apiKey=${API}`)
          .then(meqaleler => setMelumat(meqaleler.data.articles))
          .catch(error=> console.log(error.message))
  }, [])

  // [] birce defe render et


  return (

    <div className="container mt-5">
      <div className='two-articles row'>
      <div className="col-12 col-md-6">
      
          <Card basliq="Meqalenin basligi" metn="Meqalenin metni" meqaleninShekli="/assets/images/blogs/blog-3.png"  />
      </div>

      <div className="col-12 col-md-6">
      <Card basliq="Meqalenin basligi 2" metn ="Meqalenin metni 2" meqaleninShekli="/assets/images/blogs/blog-2.png"  />
      </div>


   
      
      
    
    </div>

    <div className="articles row">
       
        {
          melumat.map(function(birMelumat, index){
            return(
              
              <div key={index} className='col-12 col-md-6 col-lg-4'>
              <Card  authorProps={birMelumat.author} basliq={birMelumat.title} metn={birMelumat.description.slice(0,50)} meqaleninShekli={birMelumat.urlToImage} />
              </div>
            ) 
          })
        }
       
    </div>
    </div>

    
  )
}

export default ArticlesSection