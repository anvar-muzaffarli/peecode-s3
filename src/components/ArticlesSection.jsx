import React from 'react'
import Card from './Card'

import bloqlar from '../blogs.json'
const ArticlesSection = () => {
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
          bloqlar.map(function(birBloq){
            return(
              <div className='col-12 col-md-6 col-lg-4'>
              <Card basliq={birBloq.title} metn={birBloq.body} meqaleninShekli={birBloq.image} />
              </div>
            ) 
          })
        }
       
    </div>
    </div>

    
  )
}

export default ArticlesSection