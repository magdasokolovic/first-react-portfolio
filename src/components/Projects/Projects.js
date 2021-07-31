import React from "react";
import './Projects.scss'
import {motion} from "framer-motion"
import data from './projects.json'


//transiton:
const transition = {duration: .8, ease: [0.6, -0.05, 0.01, 0.9]}
//VARIANTS
const titleSlideUp = {
  initial: {y: 200}, 
  animate: {y: 0}
}

          // <div className='container'>
            //<div className='wrapper'> 
            // </div>
          // </div>


export default function Projects() {
    return (
            <>
              <p className='projects-text'>
                my projects:
              </p>
              <div className="projects">
                <div className="menu">
                  <div className="container-menu">
                    <div className="menu-inner">
                      <motion.ul 
                        // variants={}
                        initial="initial"animate="animate"
                        exit="exit"
                      >
                       {data.map(list=>(
                         <List key={list.id} title={list.title} image={list.src} leftLineFlex={list.leftLineFlex} rightLineFlex={list.rightLineFlex}
                         thumbnail={list.thumbnailPosition} link={list.link}
                         />
                       ))}
                      </motion.ul>
                    </div>
                  </div>
                </div>
              </div>
            </>
              
    );
  }

  const List = ({title, image, leftLineFlex, rightLineFlex, thumbnailPosition, link}) => {
    return (
      <motion.li>
        <a href={link}>
          <div className="menu-item-wrapper">
            <div className={`line left flex-${leftLineFlex}`}>
              {/* <div className="mask"></div> */}
            </div>
            <div className="title">
              <h2><motion.div variants={titleSlideUp} className="text">{title}</motion.div></h2>
            <div className="thumbnail" style={{left: thumbnailPosition}}>
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
    </motion.li>
    )
  }