import React, {useState, useEffect} from "react";
import {withRouter, Link} from "react-router-dom"
import Menu from '../Menu/Menu'
import './Header.scss';
//withRouter gives us an access to "history" prop, to determine whether url was changed

const Header = ({history}) => {
    console.log(withRouter)
    //State for menu button:
    const [state, setState] = useState({
        // initial represents the initial load of the webiste, runs only 1 time:
        initial: false,
        //when we click on the hamburger menu: 
        clicked: null,
        // menuName will change when the menu is open into "close"
        menuName: 'Menu'
    })
    //state for disabled button:
    const [disabled, setDisabled] = useState(false)

    //use effect for page changes: 
    useEffect(() => {
        //listen for page changes: 
        //getting rid of the open menu and setting the name back to "Menu"
        history.listen(() => {
            setState({
                clicked: false, menuName: 'Menu'
            })
        })
    })
    //click the button:
    const handleMenu = () => {
        //every time we click the buttonv we want disabledMenu function to run
        disabledMenu()
        //This runs only once on the very first loading:
        // INITIAL LOAD: 
        if  (state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: "Close"
            })
        } 
        /// the next conditions are toggle menu: 
        else if (state.clicked === true) {
            setState({
                // toggle: 
                clicked: !state.clicked,
                menuName: 'Menu',
            })
        } else if (state.clicked === false) {
            setState({
                // toggle: 
                clicked: !state.clicked,
                menuName: 'Close',
            })
        }
    }

    // determine if menu buttton should be disabled
    const disabledMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1200)
    }

  return (
  <header>
      <div className="container">
          <div className="wrapper">
              <div className="inner-header">
                  <div className="logo">
                      <Link to="/">MAGDA</Link>
                  </div>
                  <div className="menu">
                      <button disabled={disabled} onClick={handleMenu}>Menu</button>
                  </div>
              </div>
          </div>
      </div>
        {/* passing state as a prop to access it in Menu component: */}
      <Menu state={state}/>
  </header>
  )
};
export default withRouter(Header);