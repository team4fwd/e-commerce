import React from 'react'
import  './home.css';
function Home() {
  return (
    <section className="home__section">
        <div className="container">
           <div className="home__content m-auto">
              <h1 className='text-capitalize fw-bolder mb-5'>full set of great features to make you look fresh</h1>
              <p className='fs-5 text-muted w-50 mb-4'>Massa sed elementum tempus egestas sed risus.Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit.</p>
              <button className='btn text-capitalize text-white py-3 px-4'>shopping now</button>
           </div>
        </div>
    </section>

  )
}

export default Home