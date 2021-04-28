import React, {useRef, useEffect} from 'react'
import './Home.scss'
import {TweenMax, TimelineLite, Power3} from 'gsap'
import arrow from '../images/arrow-right.svg'
import me from '../images/Optimized-5.jpg';
import me2 from '../images/Optimized-6.jpg'

function Home() {
    let app = useRef(null);
    let images = useRef(null);
    let content = useRef(null);
    let tl = new TimelineLite({delay: .2})
  
  
    useEffect(() => {
      const firstImage = images.firstElementChild;
      const secondImage = images.lastElementChild;
  
      const headlineFirst = content.children[0].children[0]
      const headlineSecond = headlineFirst.nextSibling;
      const headlineThird = headlineSecond.nextSibling;
      const contentP = content.children[1];
      const contentButton = content.children[2];
      // 'to' - defines final state, 'from' defines initial state
  
      // removing initial flash: 
      TweenMax.to(app, 0, {css: {visibility: 'visible'}})
  
  
      // Image Animation:
      tl.from(firstImage, 1.2, {y: 1280, ease: Power3.easeOut}, 'start')
      //// duration: 2s, {}, delay: .2s
        .from(firstImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
        .from(secondImage, 1.2, {y: 1280, ease: Power3.easeOut}, .2)
        .from(secondImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
  
       //Content animation: 
  
       tl.staggerFrom([headlineFirst.children,headlineSecond.children, headlineThird.children], 1,
        {
          y: 44,
          ease: Power3.easeOut,
          delay: .8
        }, .15, 'start')
          // syncing two timelines with any matching string , here: 'start'
          .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
          .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)
  
      //adding dependencies to useEffect. It is dependent on timeline variable
    })
  
    return (
      <div className="hero" ref={el => app = el}>
          <div className="hero-container">
            <div className="hero-inner">
              <div className="hero-content">
                <div className="hero-content-inner" ref={el => content = el}>
  
                  <h1>
                    <div className="hero-content-line">
                        <div className="hero-content-line-inner">
                        Welcome to my portfolio.
                            </div>
                      </div>
  
                      <div className="hero-content-line">
                          <div className="hero-content-line-inner">
                        I build websites <span className="red">&</span>
                            </div>
                      </div>
  
  
                      <div className="hero-content-line">
                          <div className="hero-content-line-inner">
                        and have a lot of fun with it
                            </div>
                      </div>
                  </h1>
  
                  <p>Contact me for any <span className="red">!</span> important reason</p>
                  <div className="btn-row">
                    <button className="explore-button">
                        Explore my work
                      <div className="arrow-icon">
                        <img src={arrow} alt='arrow'/>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hero-images">
                <div className="hero-images-inner" ref={el => images = el}>
                  <div className="hero-image me">
                    <img src={me} alt='me'/>
                  </div>
  
                  <div className="hero-image me2">
                    <img src={me2} alt='me2'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
}

export default Home
