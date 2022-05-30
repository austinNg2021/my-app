/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import styles from './style.module.css';
import { render } from "react-dom";
import reportWebVitals from './reportWebVitals';
import Dropdown from './Dropdown';
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
        leagueData: []
      };
      this.hideComponent = this.hideComponent.bind(this);
    }
  
    componentWillMount(){
      this.getLeagueData()
    }
    getLeagueData(){
      fetch('league.json'
      ,{
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      }
      )
        .then(response => {
          console.log(response)
          return response.json();
        })
        .then(myJson => {
          this.setState({leagueData: myJson.response})
          console.log(myJson);
        });
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
        <div className={styles.header} >
        <div >
          {/* {showLeague && <Dropdown style={{color:"blue"}} onClick={() => this.hideComponent("showHideDemo2")}/>} */}
          {/* <Dropdown label={"league"} value={""} options={this.state.leagueData.map(leagueObj => {return { value: leagueObj.name, label:leagueObj.name }} )} onChange={() => this.hideComponent("showHideDemo2")} /> */}
          {/* {this.state.leagueData.map((leagueObj,key) => {
          return <div>{leagueObj.league.name}-{leagueObj.country.name}-{leagueObj.seasons.map(seasonObj=> seasonObj.year+",")}</div>
        })} */}
        
          <select className='leagueDrop'>
            <option>Select League</option>
            {this.state.leagueData.map((leagueObj,key) => {
            return <option>{leagueObj.league.name}</option>
            
        })}
        </select>
        <select className='seasonDrop'>
            <option>Select Year</option>
            {this.state.leagueData.map((leagueObj,key) => {
            return <option>{leagueObj.seasons.year}</option>
            
        })}
        </select>
          
          {/* <div style={{display: "inline"}}>
          {showSeason && <Dropdown2 />}  
                      
          </div> */}
          <div className={styles.buttonDiv } >  
            <Button onClick={() => this.hideComponent("showHideDemo2")} variant="primary">Button #1</Button>
          </div>
        </div>
        {this.state.leagueData.map((leagueObj,key) => {
          return <div>{leagueObj.league.name}-{leagueObj.country.name}-{leagueObj.seasons.map(seasonObj=> seasonObj.year+",")}</div>
        })}
        <div style={{display:"inline"}}>
          <div className={styles.listview} style={{height: "100%",width:"50%"}}>
            <div >
              <h2>Column 1</h2>
              
              <p>Some text..</p>
            </div>
            <br style={{clear:"both"}}/>
            <div >
              <h2>Column 2</h2>
              <p>Some text..</p>
            </div>

            <div >
              <h2>Column 3</h2>
              <p>Some text..</p>
            </div>
            <div>
              <h2>Column 4</h2>
              <p>Some text..</p>
            </div>
          </div>
            <div style={{height: "100%",width:"50%"}}>
              Content
            </div>
          </div>
        </div>
        
      );
    }
  }
  
  render(<App />, document.getElementById("root"));