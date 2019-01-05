import React from 'react';

export default function CategoryTab(props){

    return(
        <div className="category-container">
            <div className="featured-category">
                <ul className="category-list">
                    <li className="category-item">Banking</li> <br/>
                    <li className="category-item">Financial</li> <br/>
                    <li className="category-item">Medical</li> <br/>
                    <li className="category-item">Energy</li> <br/>
                    <li className="category-item">BioTech</li> <br/>
                    <li className="category-item">Education</li> <br/>
                    <li className="category-item">Transportation</li> <br/>
                    <li className="category-item">Emerging</li> 
                </ul>
                <ul className="category-list">
                    <li classname="category-item">More</li>
                </ul>
            </div>
        </div>
    )

}