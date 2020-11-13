import React, { Component } from 'react';
import './Socials.css';

class Socials extends Component {
    render() {
        return (
            <div className='socials'>
                <ul className="social-links">
                    <li><a href="https://www.facebook.com/stanciu.dorian.37" target="get_blank"><i className="fa fa-facebook-square"></i></a></li>
                    <li><a href="https://www.instagram.com/stanciudorian/" target="get_blank"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="https://twitter.com/StanciuDorian" target="get_blank"><i className="fa fa-twitter-square"></i></a></li>
                    <li><a href="https://github.com/dorianski" target="get_blank"><i className="fa fa-github-square"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/dorian-stanciu-3577b11a0/" target="get_blank"><i className="fab fa-linkedin"></i></a></li>
                </ul>
            </div>
        )
    }
}

export default Socials;





