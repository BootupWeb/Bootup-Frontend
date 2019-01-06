import React from 'react';
import Campaign from './campaign';
import Quick from './quick';
import Founder from './founder';
import Media from './media';

export default function Details(props){

    return(
        <div>
            <Campaign />
            <Quick />
            <Founder />
            <Media />
        </div>
    )

}