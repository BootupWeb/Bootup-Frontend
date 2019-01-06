import React from 'react';
import CampaignDetails from './campaignDetails';
import QuickDetails from './quickDetails';
import FounderDetails from './founderDetails';
import MediaDetails from './mediaDetails';

export default function Details(props){

    return(
        <div>
            <CampaignDetails />
            <QuickDetails />
            <FounderDetails />
            <MediaDetails />
        </div>
    )

}