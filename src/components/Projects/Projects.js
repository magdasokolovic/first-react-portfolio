import React, {useState, useRef, useEffect} from "react";
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

const parent = {
  animate: {transition: {
    staggerChildren: 0.1,
    delayChildren: 1,
  }}
}
const lineGrow = {
  initial: {width: "100%"},
  animate: {width: 0},
}



export default function Projects({x, y}) {
    return (
            <div className='project-container'>
                <p className='container'>
                  my projects:
                </p>
                <div className="projects">
                  <div className="menu">
                    <div className="container-menu">
                      <div className="menu-inner">
                        <motion.ul 
                          variants={parent}
                          initial="initial"animate="animate"
                          exit="exit"
                        >
                        {data.map(list=>(
                          <List key={list.id} title={list.title} image={list.src} leftLineFlex={list.leftLineFlex} rightLineFlex={list.rightLineFlex}
                          thumbnail={list.thumbnailPosition} link={list.link}
                          x={x}
                          y={y}
                          offset={list.offset}
                          />
                        ))}
                        </motion.ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>     
    );
  }

  const List = ({title, image, leftLineFlex, rightLineFlex, thumbnailPosition, link, x, y, offset}) => {

    const list = useRef()
    const [hoverState, setHoverState] = useState(false)
    const [listPosition, setListPosition] = useState({
      top: 0, left: 0
    })

    useEffect(()=>{
      setListPosition({
        top: list.current.getBoundingClientRect().top,
        left: list.current.getBoundingClientRect().left

      })
    }, [hoverState])

    return (
      <li ref={list}>
        <a href={link}>
          <div className="menu-item-wrapper">
            <div className={`line left flex-${leftLineFlex}`}>
              <motion.div variants={lineGrow} transition={{...transition, duration: 1}} className="mask"></motion.div>
            </div>
            <motion.div className="title"
              onHoverStart={()=>setHoverState(true)}
              onHoverEnd={()=>setHoverState(false)}

            >
              <h2><motion.div variants={titleSlideUp} transition={transition} className="text">{title}</motion.div></h2>
            </motion.div>
            <div className="thumbnail" style={{left: thumbnailPosition}}>
              <img src={image} alt="model portrait" />
              <motion.div variants={lineGrow} transition={{...transition, duration: 1}} className="mask"></motion.div>
            </div>
            <motion.div 
            initial={{opacity: 0}}
            animate={{
              opacity: hoverState ? 1 : 0,
              x: x - listPosition.left + offset,
              y: y - listPosition.top,
            }}
            transition={{
              ease: "easeOut"
            }}
            className="floating-image">
              <img src={image}  alt="" />
            </motion.div>
            <div className={`line right flex-${rightLineFlex}`}>
              <motion.div variants={lineGrow} transition={{...transition, duration: 1}} className="mask right"></motion.div>
            </div>
            
          </div>
        </a>
    </li>
    )
  }

  // const Panels = () =>{
  //   return (
  //     <>
  //       <motion.div initial={{height: 0}} animate={{height: [0, window.innerHeight,0], bottom: [null, 0, 0]}} 
  //       exit={{height: [0, window.innerHeight,0], top: [null, 0, 0]}}  transition={{...transition, duration: 2, times: [0, .5, 1]}} className="left-panel-background"></motion.div>
  //       <motion.div initial={{height: 0}} animate={{height: [0, window.innerHeight,0], bottom: [0, 0, window.innerHeight]}} 
  //       exit={{height: [0, window.innerHeight,0], bottom: [null, 0, 0]}} 
  //       transition={{...transition, duration: 2, times: [0, .5, 1]}}  className="right-panel-background" ></motion.div>

  //     </>
  //   )
  // }