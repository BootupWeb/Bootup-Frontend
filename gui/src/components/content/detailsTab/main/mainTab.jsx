import React, { Component } from 'react';
import Story from './story'

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

                </div>
            </div>
        )
    }
}