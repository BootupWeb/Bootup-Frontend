import React from 'react';
import FounderListItem from './founderListItem';

export default function Founder(props){

    return(
        <div classname="founder-details-container">
            <div className="founder-list-content">
                <ul className="founder-list">
                    <FounderListItem />
                </ul>
            </div>
        </div>
    )

}