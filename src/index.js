/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import styles from './style.module.css';
import { render } from "react-dom";
import reportWebVitals from './reportWebVitals';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    constructor() {
      super();
      this.state = {
        name: "React",
        showLeague: false,
        showSeason: false,
        showInfo: true,
        selectedLeague: "",
        selectedSeason: 0,
        leagueData: [],
        statData: [],
        selectedLeagueSeason: []
      };
      this.handleLeagueChange = this.handleLeagueChange.bind(this);
      this.handleSeasonsChange = this.handleSeasonsChange.bind(this);
      this.hideComponent = this.hideComponent.bind(this);
    }
  
    componentWillMount(){
      this.getLeagueData()
      this.getStatsData()
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
          this.setState({leagueData: myJson.response, showLeague: true})
          console.log(myJson);
        });
    }
    getStatsData(){
      fetch('statistics.json'
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
          this.setState({statData: myJson.response, showStat: true})
          console.log(myJson);
          console.log(myJson.response);
        });
    }
    
    handleSeasonsChange(event){
      this.setState({selectedSeason: event.target.value});
      const selectedSeason = this.state.leagueData.filter((statsObj) => statsObj.league.name === event.target.value)
      if(selectedSeason.length > 0){
        this.setState({selectedSeason:selectedSeason[0].league.name,showInfo:true})
      }
      else{
        this.setState({showInfo:false})
      }
    }
    handleLeagueChange(event){
      const selectedLeague = this.state.leagueData.filter((leagueObj) => leagueObj.league.name === event.target.value)
      console.log(selectedLeague)
      if(selectedLeague.length > 0){
        this.setState({selectedLeague:selectedLeague[0].league.name, selectedLeagueSeason:selectedLeague[0].seasons,showSeason : true})
      }
      else{
        this.setState({selectedLeague:"", selectedLeagueSeason:[], showSeason:false})
      }
      
    }
    handleInfoChange(event){
      this.setState({selectedSeason: event.target.value});
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
        case "showHideInfo":
          this.setState({ showInfo: !this.state.showSeason });
          break;
        
        default:
          null;
      }
    }
    render() {
      const { showLeague, showSeason, showInfo} = this.state;
      return (
        <div className={styles.header} >
        <div >
          {/* {showLeague && <Dropdown style={{color:"blue"}} onClick={() => this.hideComponent("showHideDemo2")}/>} */}
          {/* <Dropdown label={"league"} value={""} options={this.state.leagueData.map(leagueObj => {return { value: leagueObj.name, label:leagueObj.name }} )} onChange={() => this.hideComponent("showHideDemo2")} /> */}
          {/* {this.state.leagueData.map((leagueObj,key) => {
          return <div>{leagueObj.league.name}-{leagueObj.country.name}-{leagueObj.seasons.map(seasonObj=> seasonObj.year+",")}</div>
        })} */}
        
          {showLeague && <select onChange={this.handleLeagueChange} className='leagueDrop'>
            <option>Select League</option>
            {this.state.leagueData.map((leagueObj,key) => {
            return <option key={key}>{leagueObj.league.name}</option>
            
        })}
        </select>
    }
        {showSeason &&<select onChange={this.handleSeasonsChange}  className='seasonDrop'>
            <option>Select Year</option>
            {this.state.selectedLeagueSeason.map((seasonObj,key) => {
            return <option key={key}>{seasonObj.year}</option>
            
        })}
        </select>
    }
          {/* <div style={{display: "inline"}}>
          {showSeason && <Dropdown2 />}  
                      
          </div> */}
          <div className={styles.buttonDiv } >  
            <Button onClick={() => this.hideComponent("showHideInfo")} variant="primary">Button #1</Button>
          </div>
        </div>
        {/* {this.state.leagueData.map((leagueObj,key) => {
          return <div>{leagueObj.league.name}-{leagueObj.country.name}-{leagueObj.seasons.map(seasonObj=> seasonObj.year+",")}</div>
        })} */}
        var arr = []
        {console.log("434")}
        {console.log(this.state.leagueData)}
        {console.log(this.state.statData)}

        <div style={{display:"inline"}}>
          <div className={styles.listview} style={{height: "100%",width:"50%"}}>
            
          {this.state.statData.map((teamObj,key) => {
          return <div style={{width:"40%"}}>
              <div className={styles.optionImg}>
               <img style={{height:"auto",width:"auto"}} src={teamObj.league.logo} alt="Logo"></img>
             </div>
              <div className={styles.optionImg}>
              {teamObj.league.name}
              </div>
             </div>
        })}
          </div>
            <div>
              Content
            </div>
          </div>
        </div>
        
      );
    }
  }
  
  render(<App />, document.getElementById("root"));