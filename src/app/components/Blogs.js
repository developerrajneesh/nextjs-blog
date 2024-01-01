import React from 'react'
import Card from './Card'

function Blogs() {
  return (
    <div className='blogs-main'> 
        <div className="row m-0  p-5">
            <div className="col-12 col-md-6 col-lg-4 p-4"> <Card/>  </div>
            <div className="col-12 col-md-6 col-lg-4 p-4"> <Card/>  </div>
            <div className="col-12 col-md-6 col-lg-4 p-4"> <Card/>  </div>
            <div className="col-12 col-md-6 col-lg-4 p-4"> <Card/>  </div>
            <div className="col-12 col-md-6 col-lg-4 p-4"> <Card/>  </div>
            <div className="col-12 col-md-6 col-lg-4 p-4"> <Card/>  </div>
        </div>
    </div>
  )
}

export default Blogs