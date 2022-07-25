/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import './index.css';
import styles from './style.module.css';
import { render } from "react-dom";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {apiCall, API } from './util/apiCall';
import Header from './header.js';
import Mock from './mock.js';
import Sidebar from './sidebar.js'
import Result from './result.js'
function Car() {
  return <h2>Hi, I am a Car!</h2>;
}
export const mock =Mock;   
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
      
      const { showLeague, showSeason, showInfo, showStat, leagueData,statData,teamsData, selectedLeagueSeason, handleTeamClicks} = this.state;
      var arr = []

      return (

        <body>
        <div className={styles.header} >
          <Header showLeague={showLeague} showSeason={showSeason} leagueData={leagueData} statData={statData} handleSeasonsChange={this.handleSeasonsChange} handleLeagueChange={this.handleLeagueChange} selectedLeagueSeason={selectedLeagueSeason} hideComponent={this.hideComponent}/>
        <div >

        </div>
        <div style={{display:"flex"}}>

          <Sidebar teamsData={teamsData} handleTeamClicks={this.handleTeamClicks}/>
          <Result statData={statData} showStat={showStat}/>

          </div>

        </div>
        
        </body>
      );
    }
  }
  // render(<Car />,document.getElementById("root"));
  render(<App />, document.getElementById("root"));