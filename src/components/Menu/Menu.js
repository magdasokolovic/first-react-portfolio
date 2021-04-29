import React, {useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import gsap from 'gsap';
import './Menu.scss'
import {staggerReveal, fadeInUp, staggerText, handleHover, handleHoverExit} from './MenuAnimations'


export default function Menu({state}) {
    //useRef = gaining accesss to animated DOM elements:
    let menu = useRef(null)
    let revealMenu = useRef(null)
    let revealMenuBackground = useRef(null)
    let line1 = useRef(null)
    let line2 = useRef(null)
    let line3 = useRef(null)
    let info = useRef(null)

    // useEffect to be able to toggle the menu back and forth: 
    useEffect(() => {
        if (state.clicked === false) {
            // CLOSE MENU:
            gsap.to([revealMenu, revealMenuBackground], {
                duration: .8,
                height: 0,
                ease: 'power3.inOut',
                // without stagger you cannot see revealMenuBackground - black background
                stagger: {
                    // here amount means delay:
                    amount: 0.07
                }
            })
            //menu is a parent element of revealMenu & revealMenuBackground, duration here has to be londer than children menu
            gsap.to(menu, {
                duration: 1,
                css: {
                    display: 'none'
                }
            })
            
        } 

        // OPEN THE MENU:. 
        else if (state.clicked === true || state.initial === null) {
            //open the menu: 
            gsap.to(menu, {
                duration: 0,
                css: {
                    display: 'block'
                }
            })
            //Allow menu to have the height of 100%:
            gsap.to([revealMenuBackground, revealMenu], {
                duration: 0,
                opacity: 1,
                height: "100%"
            })
            staggerReveal(revealMenuBackground, revealMenu);
            fadeInUp(info);
            staggerText(line1, line2, line3);
        }
    }, [state]) // use dependency [state] so we wait until the state has changed until the effect works

    return (
        <div ref={el => (menu = el)} className="hamburger-menu">
            <div ref={el => (revealMenuBackground = el)} className="menu-secondary-background-color"></div>
                <div ref={el => (revealMenu = el)} className="menu-layer">
                    <div className="container">
                        <div className="wrapper">
                            <div className="menu-links">
                                <nav>
                                    <ul>
                                        <li>
                                            <Link
                                            onMouseEnter={e=>handleHover(e)}
                                            onMouseOut={e=>handleHoverExit(e)}
                                            ref={el => (line1 = el)} to="./books">Books</Link>
                                        </li>
                                        <li>
                                            <Link
                                            onMouseEnter={e=>handleHover(e)}
                                            onMouseOut={e=>handleHoverExit(e)}
                                            ref={el => (line2 = el)} to="./projects">Projects</Link>
                                        </li>
                                        <li>
                                            <Link
                                            onMouseEnter={e=>handleHover(e)}
                                            onMouseOut={e=>handleHoverExit(e)}
                                            ref={el => (line3 = el)} to="./contact">Contact</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div ref={el => (info = el)} className="info">
                                    <h3>what I do:</h3>
                                    <p>yoga, <span className="black">WebDev</span>, reading, dancing horribly to techno music in my house, blablabla</p>
                                </div>

                                <div className="social-media-icons">

                                    <a href="https://github.com/magdasokolovic" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
                                    <a href="https://twitter.com/magda_sokol" target="_blank" rel="noreferrer"><i class="fab fa-twitter"></i></a>
                                    <a href="https://api.whatsapp.com/send?phone=4915204248662" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
