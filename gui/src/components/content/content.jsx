import React, { Component } from 'react';
import CampaignDetails from './detailsTab/campaignDetails';

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
                <CampaignDetails />
            </div>
        )

    }

}