import React, { Component } from 'react';
// import Logo from '../../../static/images/bootup-logo.png';
import Name from '../../static/images/bootup-name.png';

export default class Topbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }
    
    currentSearch(e){
        console.log(e.target.value)
    }

    searchRecords(){
        // search the database for all campagins containing the word that is searched
        // create a small window that has quick search with a debouncer 
        // submit / enter shoudl change what is showin in the content if they click on a tab
        // enter button should re render with a full search results
    }

    render(){
        return(
            <div className="top-bar">
                <div className="logo-container">
                    <img className="top-bar-name" src={Name} alt=""/>
                </div>
                <form className="search-form" action="">
                    <label className="search-label">
                        <input onChange={(e) => {this.currentSearch(e)}} className="search-input" type="text" name="search"
                        />
                        {/* <input className="search-submit" type="submit" value="submit" name="submit"/> */}
                    </label>
                </form>
                <div className="quick-menu-container">
                    <img src="http://via.placeholder.com/40x40" alt="" className="quick-activity"/>
                    <img src="http://via.placeholder.com/40x40" alt="" className="quick-messages"/>
                    <img src="http://via.placeholder.com/40x40" alt="" className="quick-profile"/>
                    <img src="http://via.placeholder.com/40x40" alt="" className="quick-logout"/>
                </div>
            </div>
        )
    }
}