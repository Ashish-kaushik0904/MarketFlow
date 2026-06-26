import React from 'react'

function Hero() {
    return (
       <div className='container mt-5'>
        <div className='row text-center border-bottom'>
            <h1>Pricing</h1>
            <p className='text-muted'>Free equality investment and falt 20 trady and F&O trades</p>
        </div>
        <div className='row mt-5'>
            <div className='col-4 text-center'>
                <img src='media/images/pricingEquity.svg' alt='pricing image' />
                <h1 className='fs-2'>Free equity delevery</h1>
                <p>All equity delivery investments (NSE, BSE), are absolutely free -- 0 brokerage</p>
            </div>
            <div className='col-4 text-center'>
                <img src='media/images/intradayTrades.svg' alt='pricing image' />
                <h1 className='fs-2'>Intraday and F&O trades</h1>
                <p>Flat 20 or 0.33%(whichever is lower) per executed order on intraday trades across equity, currency and commodity trades</p>
            </div>
            <div className='col-4 text-center'>
                <img src='media/images/pricing0.svg' alt='pricing image' />
                <h1 className='fs-2'>Free Direct Mf</h1>
                <p>All direct mutual fund are here, with 0 brokerage charges with flat 20 </p>
            </div>
        </div>
       </div>
     );
}

export default Hero;