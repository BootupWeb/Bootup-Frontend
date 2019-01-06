import React from 'react';

export default function CampaignDetauls(props){

    return(
        <div className="campaign-details-container">
            <div classname="campaign-detail-section">
                <span className="campaign-name">Name</span> <br/>
                <span className="campaign-established">(1993)</span> <br/>
            </div>
            <div classname="campaign-detail-section">
                <span className="campaign-category">Category</span> <br/>
                <span className="campaign-platform">Platform</span> <br/>
            </div>
            <div classname="campaign-detail-section">
                <span className="campaign-progress">Progress</span> <br/>
                <span className="campaign-status">Status</span> <br/>
            </div>
        </div>
    )

}