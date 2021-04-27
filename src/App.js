import React from 'react'
// , {useState, useEffect} 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.scss';
import Header from './components/Header'
import Books from './components/Books'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects'
// import Loading from './componenets/Loading'
import './components/Home.scss'


function App() {
  
  // const [loading, setLoading] = useState(true)

  
  //     useEffect(() => {
  //             setTimeout(() => {
  //                 setLoading(false)
  //         }, 3000)
  //     })

  return (
    <Router>
      <div className="App">
          {/* {loading ? 
            <Loading loading={loading} />
          :  */}
            {/* <> */}
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
