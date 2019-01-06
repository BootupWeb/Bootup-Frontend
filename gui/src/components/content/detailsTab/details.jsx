import React from 'react';
import CampaignDetails from './campaignDetails';
import QuickDetails from './quickDetails';
import FounderList from './founderList';
import MediaDetails from './mediaDetails';
import MediaTab from './mediaTab/mediaTab'

export default function Details(props){

    return(
        <div>
            <CampaignDetails />
            <QuickDetails />
            <FounderList />
            <MediaDetails />
            <MediaTab />
        </div>
    )

}