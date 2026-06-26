import React from 'react'

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-5'>
                    <img src='media/images/largestbroker.svg' />
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb-5'>2+ million MarketFlow clients contribute to over 15% of all the volumes in India daily by trading and aianvestin in:</p>
                    <div className='row'>
                        <div className='col-6'>
                            <ul>
                                <li>
                                    <p>Further and Options</p>
                                </li>
                                <li>
                                    <p>Commodity Derivatves</p>
                                </li>
                                <li>
                                    <p>Currency Derivative</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-6'>
                             <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Secutities</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' style={{width:"90%"}} />
                </div>
            </div>
        </div>
    );
}

export default Awards;