
import React, { Component } from 'react';
import { render } from "react-dom";
import { Button } from 'react-bootstrap';
import './index.css';
import styles from './style.module.css';
// import * as React from 'react';




export default class Header extends Component{
      render() {
      const { showLeague,selectedLeagueSeason, showSeason, leagueData,statData, handleSeasonsChange, handleLeagueChange, hideComponent} = this.props;
      var arr = []
        console.log("434")
        console.log(leagueData)
        console.log(statData)
      return(
        <div >
        {showLeague && <select onChange={handleLeagueChange} className='leagueDrop'>
          <option>Select League</option>
          {leagueData && leagueData.map((leagueObj,key) => {
          return <option key={key} value={leagueObj.league.id}>{leagueObj.league.name}</option>
          
      })}
      </select>
  }
      {showSeason &&<select onChange={handleSeasonsChange}  className='seasonDrop'>
          <option>Select Year</option>
          {selectedLeagueSeason.map((seasonObj,key) => {
          return <option key={key}>{seasonObj.year}</option>
          
      })}
      </select>
  }
        {showSeason && <div className={styles.buttonDiv } >  
          <Button onClick={() => hideComponent("showHideInfo")} variant="primary">Search</Button>
        </div>}
      </div>
      )
    }
  } 

    // export default Header;