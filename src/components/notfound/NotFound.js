import React, { Fragment } from 'react';
import Sidebar from '../sidebar/Sidebar';
import SectionHeader from '../section-header/SectionHeader';
import './NotFound.css';

export const NotFound = () => {

    const headerTitle= 'Not Found';
    return (
        <Fragment>
        <div className='notfound'>
            <Sidebar />
            <SectionHeader headerTitle={headerTitle} />
            <p className='lead'>The page you are looking for does not exist.</p>
        </div>
        </Fragment>
    )
}

export default NotFound;