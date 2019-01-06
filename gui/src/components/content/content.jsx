import React, { Component } from 'react';
import Details from './detailsTab/details';
import Media from './detailsTab/mediaTab/mediaTab';

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
                <Media />
            </div>
        )

    }

}