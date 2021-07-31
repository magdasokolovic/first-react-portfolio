import React from "react";
import './Projects.scss'
// import image1 from '../images/cFT30RSA.webp'
// import image2 from '../images/FdXpCDEQ.webp'
// import image3 from '../images/IJIekO5A.webp'
// import image4 from '../images/NcyWXYWg.webp'
// import image5 from '../images/vEjhtoKA.webp'

import data from './projects.json'

export default function Projects() {
 
    return (
          <div className='container'>
            <div className='wrapper'>
              <p>
                my projects:
              </p>
              <div className="projects">
                <div className="menu">
                  <div className="container-menu">
                    <div className="menu-inner">
                      <ul>
                       {data.map(list=>(
                         <List key={list.id} title={list.title} image={list.src} leftLineFlex={list.leftLineFlex} rightLineFlex={list.rightLineFlex}/>
                       ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
    );
  }

  const List = ({title, image, leftLineFlex, rightLineFlex}) => {
    return (
      <li>
        <a href="https://moviebay.netlify.app/">
          <div className="menu-item-wrapper">
            <div className={`line left flex-${leftLineFlex}`}>
              {/* <div className="mask"></div> */}
            </div>
            <div className="title">
              <h2><div className="text">{title}</div></h2>
            <div className="thumbnail">
              <img src={image} alt="model portrait" />
              {/* <div className="mask"></div> */}
            </div>
            <div className="floating-image">
              <img src={image}  alt="" />
            </div>
            <div className={`line right flex-${rightLineFlex}`}>
              {/* <div className="mask right"></div> */}
            </div>
            </div>
          </div>
        </a>
    </li>
    )
  }