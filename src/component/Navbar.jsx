import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './Navbar.css';


class Navbar extends Component {
    state = {clicked: false}

    handleClicked = () => {
        this.setState({clicked: !this.state.clicked})
    }
  render () {
      return (
 <nav className='NavbarItems'>
     <h1 className="navbar-logo">CRYPTO <i className="fas fa-circle-dollar"></i> </h1>
     <div className="menu-icon" onClick={this.handleClicked}>
         <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
     </div>
     {/* HERE WE MAP THROUGH OUR MENU ITEMS TO RENDER THE LINKS IN A LIST FORM */}
     
     <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
         {MenuItems.map((item, index) => {
             return (
                  <li key={index}>
                      <Link className={item.cName} to={item.path}>
                      {item.title}
                      </Link>
                      </li>
             )
         })}
        
     </ul>
 </nav>
      )
  }
}

export default Navbar