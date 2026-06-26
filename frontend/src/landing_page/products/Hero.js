import React from 'react'

function Hero() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5 mb-2'>
                <h1>Technology</h1>
                <h5 className='text-muted mt-2'>Sleek, modern and intutive platform</h5> <br/> <br/>
                <p>Check out our <a href='#' style={{textDecoration:"none"}}>Investment offerings  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
            </div>
        </div>
     );
}

export default Hero;