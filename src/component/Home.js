import React from 'react';
import phoneImg from "../Character/Character/Ikbal 3.png"

export default function Home() {
    return (
        <section className='hero'>
          <div className="eclipse1"></div>
          <div className="eclipse2"></div>
         <div className="eclipse3"></div>
         <div className="eclipse4"></div> 
         <div className="eclipse5"></div>
         <div className="eclipse6"></div>
         <div className="eclipse7"></div>
         <div className="eclipse8"></div>
      <div className='hero-center'>
        <article className='hero-text'>
          <h4>
            What are you looking for ?
          </h4>
            <div className="hero-info">
              <div className="hero-icon "></div>
              <div className="hero-icon-inner"></div>
              <div className="info">
              <h5>Help me create a Marketing Plan!</h5>
              <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that</p>
        </div>    
        </div>

            <div className="hero-info-second">
              <div className="hero-icon"></div>
              <div className="info">
              <h5>I know what i am looking for.</h5>
              <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that</p>
            </div>
            </div>

        </article>
        <article className='hero-images'>
          <img src={phoneImg} className='phone-img' alt='phone' />

          
        </article>
        <div className="img-info">
            <p>Hi there! Need help in creating a Marketing plan for your business? I can help you to create one using Retink AI engine.</p>
          </div>

          <div className="img-second-info">
            <p>Click on the options to get started</p>
          </div>
      </div>
    </section>
    )
}

