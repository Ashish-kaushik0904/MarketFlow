import React from 'react'

function Stats() {
    return ( 
        <div className='container p-3'>
            <div className='row p-4'>
                <div className='col-6 p-4'>
                   <h1 className='fs-3 mb-5'>Trust with Confidence</h1>

                   <h2 className='fs-4'>Customer-first always</h2>
                   <p className='text-muted'>Thats why 1.3+ crore customer trust Zerodha with 3.5+ lakh crore worth of equity investments.</p>

                   <h2 className='fs-4'>No spam or gimmicks</h2>
                   <p className='text-muted'>No gimmicks spam, "gamification", or annoying push notifications High quality apps that you use at your pace, the way you like.</p>

                   <h2 className='fs-4'>The MarketFlow universe</h2>
                   <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your need</p>

                   <h2 className='fs-4'>Do better with money</h2>
                   <p className='text-muted'>With initiatives like Nudge and kill switch, we dont just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 p-5'>
                   <img src='media/images/ecosystem.png' style={{width:"90%"}} />
                   <div className='text-center p-5'>
                       <a href='' className='mx-4' style={{textDecoration:"none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                       <a href='' style={{textDecoration:"none"}}>Try kite demo</a>
                   </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;