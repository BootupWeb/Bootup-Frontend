import React, { Component } from 'react';
import Topbar from './topBar/Topbar';
import SideBar from './sideBar/Sidebar'
import Axios from 'axios';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      details: {},
    }
    Axios.defaults.baseURL = "http://127.0.0.1:8000/api/"
  }

  componentDidMount(){
    this.fetchDetails();
  }

  fetchDetails(){
    Axios.get('campaign/details/')
      .then((data) => {
        console.log(data.data)
      })
      .catch((err) => {
        console.log('fetching details error: ' + err)
      })
  }

  render() {
    return (
      <div className="App">
        <Topbar />
        <SideBar />
        Hello
      </div>
    );
  }
}

