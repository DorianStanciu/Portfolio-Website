import React, { Component, Fragment } from 'react';
import './Portfolio.css';
import Sidebar from '../sidebar/Sidebar';
import SectionHeader from '../section-header/SectionHeader';
import PortfolioContent from './portfolio-content/PortfolioContent';
import PortfolioDevelopment from './portfolio-development/PortfolioDevelopment';
import PortfolioFreelance from './portfolio-freelance/PortfolioFreelance';

class Portfolio extends Component {

    state = {
        currentPortfolio: <PortfolioContent />,
        dynamicColor1: '#009e66',
        dynamicColor2: 'white',
        dynamicColor3: 'white'
    }

    allHandler = () => {
    this.setState({currentPortfolio:<PortfolioContent/>});
    this.setState({dynamicColor1: '#009e66'});
    this.setState({dynamicColor2: 'white'});
    this.setState({dynamicColor3: 'white'});
    }

    freelanceHandler = () => {
        this.setState({currentPortfolio: <PortfolioFreelance/>});
        this.setState({dynamicColor1: 'white'});
        this.setState({dynamicColor2: '#009e66'});
        this.setState({dynamicColor3: 'white'});
    }

    developmentHandler = () => {
        this.setState({currentPortfolio: <PortfolioDevelopment/>});
        this.setState({dynamicColor1: 'white'});
        this.setState({dynamicColor2: 'white'});
        this.setState({dynamicColor3: '#009e66'});
    }

    render() {
        const headerTitle = 'Portfolio';
        return (

            <Fragment>

            <div className='portfolio'>
                <Sidebar />
                <SectionHeader headerTitle={headerTitle}/>
                <div className='filter'>
                    <button id='btn1' onClick={this.allHandler} style={{color:this.state.dynamicColor1}}>All</button>
                    <button onClick={this.freelanceHandler} style={{color:this.state.dynamicColor2}}>Freelance</button>
                    <button onClick={this.developmentHandler} style={{color:this.state.dynamicColor3}}>Development</button>
                </div>
                {this.state.currentPortfolio}
            </div>

        </Fragment>
        )
    }
}

export default Portfolio;

