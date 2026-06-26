import React from 'react'

function Universe() {
    return ( 
        <div className='container'>
            <div className='row text-center mt-5 border-top'>
                <h1>The MarketFlow Universe</h1>
                <p>Extend your Trading and investment experience even further with our partner platforms</p>
                <div className='col-4'>
                    <img src="media/images/smallcaseLogo.png" style={{width:"50%"}}></img>
                    <p>Thematic investment platform</p>
                </div>
                <div className='col-4'>
                    <img src="media/images/streakLogo.png" style={{width:"40%"}}></img>
                    <p>Algo & stretegy platform</p>
                </div>
                <div className='col-4'>
                    <img src="media/images/sensibullLogo.svg" style={{width:"60%"}}></img>
                    <p>options trading platform</p>
                </div>
            </div>

            <div className='row text-center mt-5'>
                <div className='col-4'>
                    <img src="media/images/zerodhaFundhouse.png" style={{width:"50%"}}></img>
                    <p>Asset management</p>
                </div>
                <div className='col-4'>
                    <img src="media/images/goldenpiLogo.png" style={{width:"40%"}}></img>
                    <p>Bonds trading platform</p>
                </div>
                <div className='col-4'>
                    <img src="media/images/dittoLogo.png" style={{width:"30%"}}></img>
                    <p>Dillotey geography</p>
                </div>
            <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Universe;