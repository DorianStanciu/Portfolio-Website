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
                        <p>I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.</p>
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
            </div>

            </Fragment>

        )
    }
}
export default About;