import React, { Component, Fragment } from 'react';
import './About.css';
import Sidebar from '../sidebar/Sidebar';
import SectionHeader from '../section-header/SectionHeader';
import Avatar from './avatar.jpg';

class About extends Component {


    render() {
        const headerTitle = 'About';
        return (

            <Fragment>

            <div className='about'>
                <Sidebar />
                <SectionHeader headerTitle={headerTitle}/>
                <div className='about-content'>
                    <div className='about-left'>
                        <img src={Avatar} />
                    </div>
                    <div className='about-right'>
                        <h3>Who am I?</h3>
                        <h2>I'm Dorian Stanciu, Freelance Web Developer</h2>
                        <p>Hi there! I'm Dorian Stanciu, front end web developer. I'm a well organised person, problem solver, I pay a lot of attention to small details because I think that's the main difference between a good website and a GREAT website. I currently work with React.js and php but I'm always excited to learn new technologies!</p>
                        <hr />
                        <div className='about-right-wrapper'>
                        <div className='about-right-div1'>
                            <p><span>Name: </span>Dorian Stanciu</p>
                            <p><span>Telephone: </span>07459856818</p>
                        </div>
                        <div className='about-right-div2'>
                            <p><span>Email: </span>contact@dorianstanciu.com</p>
                            <p><span>From: </span>Wolverhampton, UK</p>
                        </div>
                        </div>
                        <div className='socials-about'>
                        <ul className="social-links-about">
                        <li><a href="https://www.facebook.com/stanciu.dorian.37" target="get_blank"><i  className="fa fa-facebook-square"></i></a></li>
                        <li><a href="https://www.instagram.com/stanciudorian/" target="get_blank"><i    className="fa fa-instagram"></i></a></li>
                        <li><a href="https://twitter.com/StanciuDorian" target="get_blank"><i   className="fa fa-twitter-square"></i></a></li>
                        <li><a href="https://github.com/dorianski" target="get_blank"><i className="fa  fa-github-square"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/dorian-stanciu-3577b11a0/"     target="get_blank"><i className="fab fa-linkedin"></i></a></li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className='about-bottom'></div>
            </div>

            </Fragment>

        )
    }
}
export default About;