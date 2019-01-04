import React from 'react';
import UserTab from './UserTab';
import CategoryTab from './CategoryTab';
import CampaignTab from './CampaignTab';
import Legal from './Legal';

export default function SideBar(props){

    return(
        <div className="sidebar-container">
            <UserTab />
            {/* <CategoryTab />
            <CampaignTab />
            <Legal /> */}
        </div>
    )

}