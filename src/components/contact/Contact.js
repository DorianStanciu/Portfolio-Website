import React, { Component, Fragment } from 'react';
import SectionHeader from '../section-header/SectionHeader';
import Sidebar from '../sidebar/Sidebar';
import './Contact.css';
import ContactForm from './contactForm/ContactForm';

class Contact extends Component {
    render() {
        const headerTitle = 'Contact Me';
        return (
            <Fragment>
            <div className='contact'>
                <Sidebar />
                <SectionHeader headerTitle={headerTitle}/>
                <div className='contact-content'>
                    <div className='contact-left'>
                    <ContactForm />
                    </div>
                    <div className='contact-right'>
                        <h3>Contact Info</h3>
                        <h5>Feel free to contact me for any kind of project.</h5>
                        <div className='contact-right-divs'>
                        <div className='contact-right-div1'>
                        <i class="fas fa-user-check"></i>
                        <br />
                        <i class="fas fa-map-marker-alt"></i>
                        <br />
                        <i class="fas fa-phone"></i>
                        <br />
                        <i class="far fa-envelope"></i>
                        </div>
                        <div className='contact-right-div2'>
                        <h4>Name</h4>
                        <p>Dorian Stanciu</p>
                        <h4>Location</h4>
                        <p>Wolverhampton, United Kingdom</p>
                        <h4>Call Me</h4>
                        <p>07459856818</p>
                        <h4>Email Me</h4>
                        <p>contact@dorianstanciu.com</p>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='contact-bottom'>
                    
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Contact;
