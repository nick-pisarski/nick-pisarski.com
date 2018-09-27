import React, { Component } from 'react';

import "./Section.css"


class Section extends Component{

    state = {
        showContent: true,
    }

    componentDidMount(){
        const {showContent} = this.props;
        if(showContent === false) this.setState({showContent});
    }

    _toggleDisplay = () => {
        const {showContent} = this.state;
        this.setState({showContent: !showContent});
    }

    _getClassName = () => {
        const classes = ['Section'];
        if(this.props.className) classes.push(this.props.className)
        return classes.join(' ');
    }

    _getContent = () => {
        return this.state.showContent 
            ? (<div className='content'>{this.props.children}</div>)
            : null;
    }

    _getToggleButton = () => {
        if(this.props.disableShowContent) return;
        return (<div className="toggle" style={{cursor: 'pointer', fontWeight:'bold'}} onClick={e => this._toggleDisplay()}>
                    {this.state.showContent ? 'hide' : 'show'}
                </div>)
    }

    render() {
        return (
            <div className={this._getClassName()}>
                <div className="title_container">
                    <h4 className='title' title={this.props.title}>{this.props.title}</h4>
                    {this._getToggleButton()}
                </div>
                {this._getContent()}
            </div>
        );
    };

}

export default Section;