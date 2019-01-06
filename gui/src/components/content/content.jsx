import React, { Component } from 'react';
import Details from './detailsTab/details';

export default class Content extends Component {

    constructor(props){
        super(props);
        this.state = {
            details: '',
            slug: '',
        }
    }

    render(){

        return(
            <div className="details-container">
                <Details />
            </div>
        )

    }

}