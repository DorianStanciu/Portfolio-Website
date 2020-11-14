import React, { Component, Fragment } from 'react';
import Navbar from './nav/Navbar';
import Socials from './Socials';
import './Home.css';
import Typewriter from './typewriter/Typewriter';

class Home extends Component {
    render() {
    return (

        <Fragment>

        <div className='home'>
            <div className='home-wrapper fullscreen-bg'>
            <iframe src="https://www.youtube.com/embed/KR97TgpMyrc?autoplay=1&mute=1&muted=1&loop=1&autoplay=1&playlist=KR97TgpMyrc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; stopMovieOnBlur:false" allowfullscreen></iframe>
            </div>
            <Navbar />
            <h1 id='titleh1'>Dorian Stanciu</h1>
            <Socials />
            <Typewriter />
        </div>

        </Fragment>
    )
    }
}

export default Home;



