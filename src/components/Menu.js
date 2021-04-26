import React, {useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import gsap from 'gsap';


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
            // close the menu:
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
            //menu is a parent of revealMenu & revealMenuBackground, duration here has to be londer the children menu
            gsap.to(menu, {
                duration: 1,
                css: {
                    display: 'none'
                }
            })
            
        } 
        // open the menu. Condition after OR operator means: close also on the initial screen
        else if (state.clicked === true ||
             state.clicked === true && state.initial === null) {
            //open the menu: 
            gsap.to(menu, {
                duration: 0,
                css: {
                    display: 'block'
                }
            })
            gsap.to([revealMenuBackground, revealMenu], {
                duration: 0,
                opacity: 1,
                height: "100%"
            })
            staggerReveal(revealMenuBackground, revealMenu);
            fadeInUp(info)
            staggerText(line1, line2, line3)
        }
    }, [state]) // use dependency [state] so we wait until the state changes until the effect works
    // functions for animation:
    //for background:
    const staggerReveal = (node1, node2) => {
        gsap.from([node1, node2], {
            duration: .8,
            height: 0,
            transformOrigin: 'right top', 
            skewY: 2,
            ease: 'power3.inOut',
            stagger: {
                amount: .1
            }
        })
    }
    // for the info section on the right:
    const fadeInUp = (node) => {
        gsap.from(node, {
                y: 60,
                duration: 1,
                delay: .2,
                opacity: 0,
                ease: 'power3.inOut'
        })
    }

    // function for navigation items:
    const staggerText = (node1, node2, node3) => {
        gsap.from([node1, node2, node3], {
            duration: .8,
            y: 100,
            delay: .1,
            ease: 'power3.inOut',
            stagger: {
                amount: .3
            }
        })
    }


    return (
        <div ref={el => (menu = el)} className="hamburger-menu">
            
            <div ref={el => (revealMenuBackground = el)} className="menu-secondary-background-color"></div>

            <div ref={el => (revealMenu = el)} className="menu-layer">
                <div className="container">
                    <div className="wrapper">
                        <div className="menu-links">
                            <nav>
                                <ul>
                                    <li><Link ref={el => (line1 = el)} to="./books">Books</Link></li>
                                    <li><Link ref={el => (line2 = el)} to="./projects">Projects</Link></li>
                                    <li><Link ref={el => (line3 = el)} to="./contact">Contact</Link></li>
                                </ul>
                            </nav>
                            <div ref={el => (info = el)} className="info">
                                <h3>what I do</h3>
                                <p>yoga, webdev, reading, partying, hahahaha</p>
                            </div>

                            <div className="social-media-icons">
                                <Link to="https://www.facebook.com/magda.sokolovic" target="_blank"><i className="fab fa-facebook"></i></Link>
                                <Link to="https://www.instagram.com/magda.sokolovic/" target="_blank"><i className="fab fa-instagram"></i></Link>
                                <Link to="https://api.whatsapp.com/send?phone=4915204248662" target="_blank"><i className="fab fa-whatsapp"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
