import React, {useState, useEffect} from 'react'
import {HashRouter, Switch, Route} from 'react-router-dom'
import './sass/main.scss';
import Header from './components/Header'
import Contact from './components/Contact'
import Home from './components/Home'
import Projects from './components/Projects/Projects'
import Loading from './components/Loading'


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
                  <Header/>
                  <div className="home">
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/projects" component={Projects} />
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
