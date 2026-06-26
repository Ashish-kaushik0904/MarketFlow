import React from 'react'
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';

function ProductPage() {
    return ( 
        <>
          <Hero/>
          <LeftSection imageURL="media/images/kite.png" 
          productName="Kite" 
          productDesription="Our flagship trading platform combines simplicity with powerful features. Analyze markets, track investments, and manage your portfolio effortlessly through an intuitive and responsive dashboard designed for modern investors." 
          tryDemo="" 
          learnMore="" 
          googlePlay="" 
          appStore=""/>

          <RightSection imageURL="media/images/console.png" 
          productName="Console" 
          productDesription="Track, analyze, and manage your investments through a powerful reporting dashboard. Get detailed insights into your portfolio, holdings, transactions, and overall performance in one place, Console is a powerful reporting and portfolio management platform that provides a complete view of your investments and trading activities." 
          tryDemo="" 
          learnMore="" 
          googlePlay="" 
          appStore=""/>

          <LeftSection imageURL="media/images/coin.png" 
          productName="Coin" 
          productDesription="Coin is a simple and convenient platform for investing in mutual funds online. Explore and invest in a wide range of direct mutual fund schemes without unnecessary complexity. All over the world valid this as well" 
          tryDemo="" 
          learnMore="" 
          googlePlay="" 
          appStore=""/>
          
          <RightSection imageURL="media/images/kiteconnect.png" 
          productName="Kite Connect API" 
          productDesription="Kite Connect API is a powerful trading and market data API platform that enables developers to build custom trading applications and investment solutions. It provides secure access to market quotes, historical data, order management, portfolio information, and account details through easy-to-use REST APIs and WebSocket connections" 
          tryDemo="" 
          learnMore="" 
          googlePlay="" 
          appStore=""/>

          <LeftSection imageURL="media/images/varsity.png" 
          productName="Varsity Mobile" 
          productDesription="Learn the stock market anytime, anywhere. Access interactive lessons on investing, trading, and personal finance through a simple and user-friendly mobile learning platform designed for every level of investor." 
          tryDemo="" 
          learnMore="" 
          googlePlay="" 
          appStore=""/>

          <p className='text-center'>Want to know more about technology stack? Check out the MarketFlow tech blog</p>

          <Universe/>
        </>
     );
}

export default ProductPage;