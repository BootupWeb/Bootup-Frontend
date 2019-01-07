import React, { Component } from 'react';
import Story from './story';
import Update from './update';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            story: '',
            updated: ''
        }
    }

    render(){
        return(
            <div className="main-container">
                <div className="main-content">
                    <Story />
                    <Update />
                </div>
            </div>
        )
    }
}