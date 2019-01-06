import React, { Component } from 'react';
import CampaignDetails from './detailsTab/campaignDetails';
import QuickDetails from './detailsTab/quickDetails';
import FounderDetails from './detailsTab/founderDetails';

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
                <QuickDetails />
                <FounderDetails />
            </div>
        )

    }

}