/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import './index.css';
import styles from './style.module.css';
import { render } from "react-dom";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {apiCall, API } from './util/apiCall';

class App extends Component {
    constructor() {
      super();
      this.state = {
        name: "React",
        showLeague: false,
        showSeason: false,
        showInfo: false,
        showStat: false,
        selectedLeague: "",
        selectedSeason: 0,
        selectedTeam: "",
        leagueData: [],
        teamsData: [],
        statData: null,
        selectedLeagueSeason: []
      };
      this.handleLeagueChange = this.handleLeagueChange.bind(this);
      this.handleSeasonsChange = this.handleSeasonsChange.bind(this);
      this.hideComponent = this.hideComponent.bind(this);
      this.handleStatChange = this.handleStatChange.bind(this);
      this.handleTeamClicks = this.handleTeamClicks.bind(this);
    }
  
    componentWillMount(){
      this.getLeagueData()
      this.getStatsData()
    }
    async getLeagueData(){
      const result = await apiCall(API.leagues);
      this.setState({leagueData: result.response,showLeague: true})
    }
    async getStatsData(){
      const result = await apiCall(API.stats(this.state.selectedLeague,this.state.selectedSeason,this.state.selectedTeam));
      this.setState({statData: result.response,showStat: true})
      console.log(result.response.statData)
    }
    async getTeamsInfo(){
      const result = await apiCall(API.teams(this.state.selectedLeague,this.state.selectedSeason));
      this.setState({teamsData: result.response,showLeague: true})
    }
    
    handleSeasonsChange(event){
      this.setState({selectedSeason: event.target.value});
    }
    handleTeamClicks(teamId){
      this.setState({selectedTeam:teamId},() => this.getStatsData());
      
    }
    handleLeagueChange(event){
      const selectedLeague = this.state.leagueData.filter((leagueObj) => leagueObj.league.id == event.target.value)
      console.log(selectedLeague)
      if(selectedLeague.length > 0){
        this.setState({selectedLeague:selectedLeague[0].league.id, selectedLeagueSeason:selectedLeague[0].seasons,showSeason : true})
      }
      else{
        this.setState({selectedLeague:"", selectedLeagueSeason:[], showSeason:false})
      }
      
    }
    handleInfoChange(event){
      this.setState({selectedSeason: event.target.value});
    }
    handleStatChange(event){
      this.setState({selectedSeason: event.target.value});
    }

    
    
    hideComponent(name) {
      console.log(name);
      this.getTeamsInfo();
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
        case "showHideStat":
            this.setState({ showStat: !this.state.showStat });
            break;
        default:
          null;
      }
    }
    render() {
      
      const { showLeague, showSeason, showInfo, showStat, leagueData,statData,teamsData} = this.state;
      var arr = []
        console.log("434")
        console.log(leagueData)
        console.log(statData)
      return (
        <div className={styles.header} >
        <div >
          {showLeague && <select onChange={this.handleLeagueChange} className='leagueDrop'>
            <option>Select League</option>
            {this.state.leagueData && this.state.leagueData.map((leagueObj,key) => {
            return <option key={key} value={leagueObj.league.id}>{leagueObj.league.name}</option>
            
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
          {showSeason && <div className={styles.buttonDiv } >  
            <Button onClick={() => this.hideComponent("showHideInfo")} variant="primary">Search</Button>
          </div>}
        </div>
        <div style={{display:"flex"}}>
          <div className={styles.listview} style={{height: "100%",width:"40%",display:"inline-block"}}>
            
          {teamsData.map((teamObj,key) => {
          return <div className={styles.leagueListElement} onClick={() => this.handleTeamClicks(teamObj.team.id)}>
              <div className={styles.optionImg}>
               <img style={{display:"inline-block"}} src={teamObj.team.logo} alt="Logo"></img>
               <p className={styles.optionText}>{teamObj.team.name}</p>
             </div>

             </div>
        })}
          </div>
          {showStat && <div style={{display:"inline-block",height:"100%"}}>
            {statData && Object.keys(statData).length > 0 && (<div  style={{width:"100%"}}>
                  <div>
                  League: {statData.league.name}
                </div>
                  <div>
                  <p>Team: {statData.team.name}</p>
                  </div>
                  <div style={{display:"inline-block",height:"100%",padding:"5px"}}>
                    <p>Fixture</p>
                    <p>Wins</p>
                    <p>Draws</p>
                    <p>Losses</p>
                  </div>
                  <div style={{display:"inline-block",height:"100%",padding:"5px"}}>
                    <p>Home</p>
                    <p>{statData.fixtures.wins.home}</p>
                    <p>{statData.fixtures.draws.home}</p>
                    <p>{statData.fixtures.loses.home}</p>
                  </div>
                  <div style={{display:"inline-block",height:"100%",padding:"5px"}}>
                    <p>Away</p>
                    <p>{statData.fixtures.wins.away}</p>
                    <p>{statData.fixtures.draws.away}</p>
                    <p>{statData.fixtures.loses.away}</p>
                  </div>
                  <div style={{display:"inline-block",height:"100%",padding:"5px"}}>
                    <p>Total</p>
                    <p>{statData.fixtures.wins.total}</p>
                    <p>{statData.fixtures.draws.total}</p>
                    <p>{statData.fixtures.loses.total}</p>
                  </div>
                </div>
            )}
            </div>}
          </div>

        </div>
        
        
      );
    }
  }
  
  render(<App />, document.getElementById("root"));