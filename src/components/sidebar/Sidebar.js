import React, { Component } from 'react';
import './Sidebar.css';
import { MenuItemsSide } from './MenuItemsSide';
import { Link } from 'react-router-dom';

class Sidebar extends Component {

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return(

        <div class='side-navbar'>
        <nav className='side-navbar-items'>
        <ul className={this.state.clicked ? 'nav-menu-side active' : 'nav-menu-side'}>
            {MenuItemsSide.map((item, index) => {
                return (
                    <li key={index}>
                        <Link className={item.cName} to={item.url}>{item.title}</Link>
                    </li>
                )
            })}
        </ul>
        </nav>
        </div>
        )
        }
    }

        export default Sidebar;