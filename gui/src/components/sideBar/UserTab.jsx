import React from 'react';

export default function UserTab(props){

    return(
        <div className="usertab-contrainer">
            <div className="user-details">
                <div className="profile-pic-container">
                    <img src="http://via.placeholder.com/80x80" alt=""/>
                </div>
                <div className="user-profile-details">
                    <span>Username</span> <br/>
                    <span>Founder</span> <br/>
                    <span>Company Name</span> <br/>
                </div>
            </div>
        </div>
    )

}