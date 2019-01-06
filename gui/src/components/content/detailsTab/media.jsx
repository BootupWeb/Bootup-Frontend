import React from 'react';

export default function Media(props){
    // two sizes are 650x432 && 1920x1080
    return(
        <div className="media-details-container">
            <div className="media-content">
                <img className="media-image" src="http://via.placeholder.com/650x432" alt=""/> <br/> 
                <img className="media-video" src="http://via.placeholder.com/650x432" alt=""/> <br/>
                <span className="meida-url">www.omarjandali.com</span>
            </div>
        </div>
    )

}