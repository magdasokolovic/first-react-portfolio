import React, {useState, useEffect} from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import './App.scss';
import Header from './components/Header/Header'
// import Books from './components/Books/Books'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Loading from './components/Loading'
// import useMousePosition from './hooks/useMousePosition';
// import {motion} from "framer-motion"

function App() {
  
  const [loading, setLoading] = useState(true)
  
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
              {/* <Header setCursorHovered={setCursorHovered}/> */}
                  <Header/>
                  <div className="home">
                    <Switch>
                      <Route exact path="/" component={Home} />
                      {/* <Route exact path="/books" component={Books} /> */}
                      {/* <Route exact path="/projects" component={Projects} /> */}
                      <Route exact path="/projects">
                        {/* <Projects x={x} y={y} setCursorHovered={setCursorHovered}/> */}
                        <Projects/>
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
