import React from 'react';

export default function MediaListItem(props){

    return(
        <div className="media-list-items">
            <li clssName="media-item">
                <img className="media-image" src="http://via.placeholder.com/200x200" alt=""/> <br/>
                <span className="media-caption">Caption</span>
            </li> <br/>
            <li clssName="media-item">
                <img className="media-image" src="http://via.placeholder.com/200x200" alt=""/> <br/>
                <span className="media-caption">Caption</span>
            </li> <br/>
            <li clssName="media-item">
                <img className="media-image" src="http://via.placeholder.com/200x200" alt=""/> <br/>
                <span className="media-caption">Caption</span>
            </li> <br/>
        </div>
    )

}