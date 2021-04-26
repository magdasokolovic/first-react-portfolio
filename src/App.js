import React, {useState, useEffect} from 'react'
import './App.scss';
import Header from './components/Header'
import Books from './components/Books'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects'
import './components/Home.scss'


// import Lottie from 'lottie-web'
// import animationData from './components/lotties/kiss-of-the-heart';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  // const [loading, setLoading] = useState(false)

  // const defaultOptions = {
  //   loop: true,
  //   autoplay: true,
  //   animationData: animationData,
  //   rendererSettings: {
  //     preserveAspectRatio: "xMidYMid slice"
  //   }
  // }
  // will run only one time
  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 3000)
  // }, [])

  return (
    <Router>
      <div className="App">
          {/* {loading ? 
            <Lottie 
              options={defaultOptions}
              height={400}
              width={400}
              loading={loading}
            />
            
          : 
            <> */}
              <Header />

              <div className="container">
                <div className="wrapper">
                  <div className="home">
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/books" component={Books} />
                      <Route exact path="/projects" component={Projects} />
                      <Route exact path="/contact" component={Contact} />
                    </Switch>
                  </div>
                </div>
              </div>
            {/* </>
        } */}
       
      </div>
    </Router>
  );
}


export default App;
