import React, { Component } from 'react';
import './PortfolioContent.css';
import Project1 from './project1.png';
import Project2 from './project2.png';
import Project3 from './project3.png';

class PortfolioContent extends Component {
    render() {
        return (
            <div className='PortfolioContent'>
                <div className='project'>
                    <div className='project-left'>
                    <img src={Project1} />
                    </div>
                    <div className='project-right'>
                    <h3>This is a website that I created for a new restaurant in Galati, Romania</h3>
                    <p>HTML5 CSS3 Javascript Jquery Responsive Web Design SEO</p>
                    <a href='http://clubnauticmonaco.com/indexEN.html' target='get_blank'><button>View Live Project</button></a>
                    <a href='https://github.com/dorianski/clubnauticmonaco'
                    target='get_blank'><button>View Code</button></a>
                    </div>
                </div>

                <div className='project'>
                    <div className='project-left'>
                    <img src={Project2} />
                    </div>
                    <div className='project-right'>
                    <h3>This is a website that I created for a new dentist office in Galati, Romania</h3>
                    <p>HTML5 CSS3 Javascript Jquery Responsive Web Design SEO</p>
                    <a href='http://nelurugina.ro/indexEN.html' target='get_blank'><button>View Live Project</button></a>
                    <a href='https://github.com/dorianski/nelurugina'
                    target='get_blank'><button>View Code</button></a>
                    </div>
                </div>

                <div className='project'>
                    <div className='project-left'>
                    <img src={Project3} />
                    </div>
                    <div className='project-right'>
                    <h3>This is a website that a created for a Software Development company based in Cluj-Napoca , Romania (Temporarily hosted on webhost000.com)</h3>
                    <p>HTML5 CSS3 Javascript Jquery Responsive Web Design SEO</p>
                    <a href='http://dorianproject1.000webhostapp.com/indexen.html' target='get_blank'><button>View Live Project</button></a>
                    <a href='https://github.com/dorianski/JAVAGEMENT-Software-Company'
                    target='get_blank'><button>View Code</button></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default PortfolioContent;
