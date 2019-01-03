import React, { Component } from 'react';
// import Logo from '../../../static/images/bootup-logo.png';
import Name from '../../static/images/bootup-name.png';

export default class Topbar extends Component {
    constructor(props){
        super(props);
        this.setState({
            search: ''
        })
    }

    render(){
        return(
            <div class="top-bar">
                <div className="logo-container">
                    <img className="top-bar-name" src={Name} alt=""/>
                </div>
                <form className="search-form" action="">
                    <label className="search-label">
                        <input className="search-input" type="text" name="search" value="Search"/>
                        <input className="search-submit" type="submit" value="submit" name="submit"/>
                    </label>
                </form>
                <div className="quick-menu-container">
                    <img src="http://via.placeholder.com/40x40" alt=""/>
                    <img src="http://via.placeholder.com/40x40" alt=""/>
                    <img src="http://via.placeholder.com/40x40" alt=""/>
                    <img src="http://via.placeholder.com/40x40" alt=""/>
                </div>
            </div>
        )
    }
}