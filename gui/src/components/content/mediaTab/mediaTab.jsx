import React from 'react';
import MediaListItem from './mediaListItem'

export default function MediaTab(props){

    return(
        <div className="media-section-container">
            <div className="media-list-section">
                <ul className="media-list">
                    <MediaListItem />
                </ul>
            </div>
        </div>
    )

}