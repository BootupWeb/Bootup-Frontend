import React from 'react';

export default function CampaignTab(props){

    return(
        <div className="campaign-tab-container">
            <div className="campaign-content">
                <div className="featured-image-container">
                    <img className="featured-image" src="http://via.placeholder.com/250x120" alt=""/>
                </div>
                <div className="campaign-summary">
                    <span className="campagin-name">Name</span> <br/>
                    <span className="campaign-category">category</span> <br/>
                    <span className="campaign-slug">slug</span> 
                </div>
                <div className="asking-container">
                    <div classname="asking-content">
                        <span className="asking-equity">equity</span> <br/>
                        <span className="asking-amount">amount</span>
                    </div>
                </div>
            </div>
        </div>
    )

}