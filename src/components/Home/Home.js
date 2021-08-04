import React, {useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Home.scss'
import {TweenMax, TimelineLite, Power3} from 'gsap'

import arrow from '../images/arrow-right.svg'
import me from '../images/Optimized-5.webp';
import me2 from '../images/Optimized-6.webp'

function Home() {
  // referencing DOM elements with useRef
    let hero = useRef(null);
    let images = useRef(null);
    let content = useRef(null);
    //once the entire page is loaded the timeline will wait .2s
    let tl = new TimelineLite({delay: .2})
    useEffect(() => {

      // Image variables:
      const firstImage = images.firstElementChild;
      const secondImage = images.lastElementChild;

      //Content variables:
      const headlineFirst = content.children[0].children[0]
      const headlineSecond = headlineFirst.nextSibling;
      const headlineThird = headlineSecond.nextSibling;
      const contentP = content.children[1];
      const contentButton = content.children[2];
      // 'to' - defines final state, 'from' defines initial state
  
      // removing initial flash, at the beginning the visibility is hidden until all dom elements are loaded: 
      // TweenMax makes the dom visible right away
              // TARGET, DURATION, CONFIGURATION:
      TweenMax.to(hero, 0, {css: {visibility: 'visible'}})
  
  
      // IMAGE ANIMATION:
      ////   target      duration, configuration,                
      tl.from(firstImage, 1.2, {y: 1280, ease: Power3.easeOut}, 'start')
      //in order to create zoom-out(scale) effect I target separately the actual image:
        .from(firstImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
        .from(secondImage, 1.2, {y: 1280, ease: Power3.easeOut}, .2)
        .from(secondImage.firstElementChild, 2, {scale: 1.6, ease: Power3.easeOut}, .2)
  
       //CONTENT ANIMATION: 
       tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children], 1,
        {
          y: 44,
          ease: Power3.easeOut,
          delay: .8
          // .15 seconds  = achieving the staggeting (domino) effect:
        }, .15, 'start')
          // syncing two timelines with any matching string , here: 'start'. For 2 timelines to work together
          .from(contentP, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.4)
          .from(contentButton, 1, {y: 20, opacity: 0, ease: Power3.easeOut}, 1.6)
  
      //useEffect is dependent on timeline variable (called here tl). 
    })
  
    return (

      <div className="hero" ref={el => hero = el}>
        <div className="hero-container">
            <div className="hero-inner">
              <div className="hero-content">
                <div className="hero-content-inner" ref={el => content = el}>
  
                  <h1>
                    {/* hero-content-line is not moving on animation, but hero-content-line-inner IS */}
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
                        have a lot of fun with it
                          </div>
                      </div>
                  </h1>
  
                  <p>I have no idea what to say here</p>

                  <div className="btn-row">
                    <button className="explore-button">
                        Explore my work
                      <Link to="/projects" className="arrow-icon">
                        <img src={arrow} alt='arrow'/>
                      </Link>
                    </button>
                  </div >

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
