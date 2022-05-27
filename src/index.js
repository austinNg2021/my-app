/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { render } from "react-dom";
import reportWebVitals from './reportWebVitals';
import Dropdown from './List.js';
import Dropdown2 from './List2.js';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor() {
      super();
      this.state = {
        name: "React",
        showLeague: true,
        showSeason: true,
      };
      this.hideComponent = this.hideComponent.bind(this);
    }
  
    hideComponent(name) {
      console.log(name);
      switch (name) {
        case "showHideDemo1":
          this.setState({ showLeague: !this.state.showLeague });
          break;
        case "showHideDemo2":
          this.setState({ showSeason: !this.state.showSeason });
          break;
        
        default:
          null;
      }
    }
  
    render() {
      const { showLeague, showSeason} = this.state;
      return (
        <div style={{display: "inline"}}>
          {showLeague && <Dropdown onClick={() => this.hideComponent("showHideDemo2")}/>}
          
          
          
          <div style={{display: "inline"}}>
          {showSeason && <Dropdown2 />}  
                      
          </div>
          <div style={{display: "inline",alignItems:"right"}}>  
            <Button onClick={() => this.hideComponent("showHideDemo2")} variant="primary">Button #1</Button>
          </div>
        </div>
      );
    }
  }
  
  render(<App />, document.getElementById("root"));