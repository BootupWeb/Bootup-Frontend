import React from 'react';
import CampaignDetails from './campaignDetails';
import QuickDetails from './quickDetails';
import FounderList from './founderList';
import MediaDetails from './mediaDetails';

export default function Details(props){

    return(
        <div>
            <CampaignDetails />
            <QuickDetails />
            <FounderList />
            <MediaDetails />
        </div>
    )

}