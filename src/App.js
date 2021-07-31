import React, {useState, useEffect} from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import './App.scss';
import Header from './components/Header/Header'
import Books from './components/Books/Books'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Loading from './components/Loading'
import useMousePosition from './hooks/useMousePosition';
import {motion} from "framer-motion"

function App() {
  
  const [loading, setLoading] = useState(true)
  const {x, y} = useMousePosition()
  const [cursorHovered, setCursorHovered] = useState(false)
  
      useEffect(() => {
              setTimeout(() => {
                  setLoading(false)
          }, 1000)
      })

  return (
    <HashRouter>
      <div className="App">
          {loading ? 
            <Loading loading={loading} />
            :  
             <>
             <motion.div
              animate={{
                x: x - 16,
                y: y - 16,
                scale: cursorHovered ? 1.2 : 1,
                opacity: cursorHovered ? 0.8 : 0
              }}
              transition={{ease: "linear", duration: 0.2}}
              
              className="cursor"></motion.div>
              <Header setCursorHovered={setCursorHovered}/>
                  <div className="home">
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/books" component={Books} />
                      {/* <Route exact path="/projects" component={Projects} /> */}
                      <Route exact path="/projects">
                        <Projects x={x} y={y} setCursorHovered={setCursorHovered}/>
                      </Route>
                      <Route exact path="/contact" component={Contact} />
                    </Switch>
                  </div>
            </>
        }
       
      </div>
    </HashRouter>
  );
}


export default App;
