import React, { useState } from 'react';
import {db} from './firebase';
import './ContactForm.css';

const ContactForm = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection('contacts').add({
            name:name,
            email:email,
            message:message,
        })
        .then(() => {
            alert('Message has been submitted');
            setLoader(false);
        })
        .catch((error) => {
            alert(error.message);
            setLoader(false);
        });

        setName('');
        setEmail('');
        setMessage('');
    };


    return (
        <form className='form' onSubmit={handleSubmit}>
            <h3>Contact form</h3>
            <br />

            <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
            <br />

            <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <br />

            <textarea placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <br />

            <button type='submit' style={{background: loader ? '#ccc' : '#009e66'}}>Send Message</button>
        </form>
    )
}

export default ContactForm;
