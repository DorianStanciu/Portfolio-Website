import React, { Component } from 'react';
import './SectionHeader.css';
import { Link } from 'react-router-dom';

class SectionHeader extends Component {

    render(){
        const headerTitle = '';
        return (
                <div className='section-header'>
                    <h2>{this.props.headerTitle}</h2>
                    <hr id='section-hr'/>
                    <Link to='/'><button><i class="fas fa-times"></i></button></Link>
                </div>
        )
    }
}

export default SectionHeader;
