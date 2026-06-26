import React from 'react'

function LeftSection({imageURL, productName, productDesription, tryDemo, learnMore, googlePlay, appStore}) {
    return ( 
        <div className='container warp'>
            <div className='row border-top'>
                <div className='col-6' style={{paddingRight:"20px"}}>
                    <img src={imageURL} className="img-fluid"/>
                </div>
                {/* <div className='col-2 mr-5'></div> */}
                <div className='col-6 mt-5' style={{paddingLeft:"70px"}}>
                    <h1>{productName}</h1>
                    <p>{productDesription}</p>

                    <div>
                    <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> 
                    <a href={learnMore} style={{textDecoration:"none", marginLeft:"50px"}}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> 
                    </div>

                    <div className='mt-3'>
                    <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" /></a> 
                    <a href={appStore} style={{textDecoration:"none", marginLeft:"50px"}}><img src="media/images/appstoreBadge.svg" /> </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default LeftSection;