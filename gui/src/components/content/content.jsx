import React, { Component } from 'react';
import Details from './detailsTab/details';
import Media from './mediaTab/mediaTab';
import Main from './main/mainTab'

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
                <Main />
            </div>
        )

    }

}