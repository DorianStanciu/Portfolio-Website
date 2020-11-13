import React, { Component } from 'react';
import './Typewriter.css';

const options = ['Web Developer', 'Freelancer'];

class Typewriter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      currentItemIndex: 0
    };
    this.type = this.type.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }
  
    componentDidMount() {
    this._isMounted = true;
    this.type(this.state.currentItemIndex);
  }

  type(currentItemIndex) {
    this._isMounted && this.setState({ currentItemIndex }, () => {
      this.show(options[currentItemIndex]);
    });
  }

  show(target) {
    let charCount = 0;
    this.timer = setInterval(() => {
      this._isMounted && this.setState({ text: target.substr(0, charCount) }, () => {
        if(charCount === target.length ) {
          clearInterval(this.timer);
          setTimeout(() => this.hide(target), 1000);
        }
        charCount++;
      });
    },100);
  }

  hide(target) {
    let charCount = target.length;
    this.timer = setInterval(() => {
      this._isMounted && this.setState({ text: target.substr(0, charCount) }, () => {
        if( charCount === 0 ) {
          clearInterval(this.timer);
          let currentItemIndex = this.state.currentItemIndex + 1;
          if(currentItemIndex === options.length) currentItemIndex = 0 ;
          setTimeout(() => this.type(currentItemIndex), 1000);
        }
        charCount--;
      });
    },50);
  }

  componentWillUnmount() {
    this._isMounted = false;
    clearInterval(this.timer)
  }

    render() {
        return (
            <div className="typewriter">
            <div className="typewriter__type">
              <h3>I'm a {this.state.text}</h3>
            </div>
            <div className="typewriter__cursor"/>
          </div>
        )
    }
}

export default Typewriter;

