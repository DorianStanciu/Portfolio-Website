import React, { Component, Fragment } from 'react';
import './Resume.css';
import Sidebar from '../sidebar/Sidebar';
import SectionHeader from '../section-header/SectionHeader';

class Resume extends Component {

    render() {
        const headerTitle = 'Resume';
        return (

            <Fragment>
                
            <div className='resume'>

                <Sidebar />
                <SectionHeader headerTitle={headerTitle}/>
                <div className='resume-divs'>
                    <div className='skills'>
                        <h3>Skills</h3>
                        <div className='skills-content'>
                            <div className='skills-div1'>
                            <h5><i class="far fa-caret-square-right"></i>Front End</h5>
                            <p>HTML5 CSS3 JAVASCRIPT</p>
                            <p>REACT REDUX</p>
                            <p>SASS RESPONSIVE WEB DESIGN</p>
                            </div>
                            <div className='skills-div2'>
                            <h5><i class="far fa-caret-square-right"></i>Back End</h5>
                            <p>PHP</p>
                            <p>MYSQL</p>
                            </div>
                            <div className='skills-div3'>
                            <h5><i class="far fa-caret-square-right"></i>Other</h5>
                            <p>GIT</p>
                            <p>GITHUB</p>
                            <p>SEO</p>
                            </div>
                        </div>
                    </div>
                    <div className='experience'>
                        <h3>Experience</h3>
                        <div className='experience-content'>
                        <h5><i class="far fa-caret-square-right"></i>Freelance Web Developer</h5>
                        <p>2019 - Present</p>
                        <p>Created modern websites for different companies and clients around the world</p>
                        <p>Managed content, SEO, domain and hosting as well as maintenance and updates for the websites created</p>
                        <p>Designed unique UI/UX experiences for businesses and professionals</p>
                        <p>Delivered websites aimed towards converting visitors into customers</p>
                        </div>
                    </div>
                </div>
                <div className='resume-bottom'>
                    
                </div>
            </div>

            </Fragment>
        )
    }
}

export default Resume;
