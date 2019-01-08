import React, { Component } from 'react';
// import Logo from '../../../static/images/bootup-logo.png';
import Styling from '../../css/TopBar/Topbar.css';
import Name from '../../static/images/bootup-name.png';

import { Row, Col } from 'antd';

export default class Topbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            search: ''
        }
    }

    render(){
        return(
            <div className="top-bar-container">
                <Row className={Styling.topBarContainer}>
                    <Col className={Styling.imageContainer} span={6}>
                        <img className={Styling.nameImage} src={Name} alt=""/>
                    </Col>
                    <Col span={12}></Col>
                    <Col span={6}></Col>
                </Row>
                <form className="search-form" action="">
                    <label className="search-label">
                        <input className="search-input" type="text" name="search" value="Search"/>
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