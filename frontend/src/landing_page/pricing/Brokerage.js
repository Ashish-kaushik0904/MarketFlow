import React from 'react'

function Brokerage() {
    return ( 
        
        <div className='container'> <hr/>
            <div className='row'>
            <div className='col-6'>
                <h1 className='text-center'>Brokerage calculator</h1>
                <ul> 
                    <li className='mb-2 mt-3'>Buying and selling assets for profit. Trading offers profit opportunities but also involves market risk and potential losses.</li>
                    <li className='mb-2'>Brokers offer lower brokerage charges.</li>
                    <li className='mb-2'>An intermediary between trader and market,Buying and selling financial assets like stocks, commodities</li>
                    <li className='mb-2'>Measures price fluctuations in markets. rading offers profit opportunities</li>
                    <li className='mb-2'>Following rules and managing emotions.</li>
                    <li className='mb-2'>Generate returns through smart decisions.Successful trading requires market analysis, risk management.</li>
                </ul>
            </div>
            <div className='col-5' style={{marginLeft:"70px"}}>
                <h1 className='text-center'>List of Charges</h1>
            </div>
        </div>
        </div>
     );
}

export default Brokerage;