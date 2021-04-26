import React from 'react'
import {Link} from 'react-router-dom'

export default function Menu() {
    return (
        <div className="hamburger-menu">
            <div className="menu-secondary-background-color"></div>
            <div className="menu-layer">
                <div className="container">
                    <div className="wrapper">
                        <div className="menu-links">
                            <nav>
                                <ul>
                                    <li><Link></Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
