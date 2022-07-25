
import React, { Component } from 'react';
import { render } from "react-dom";
import { Button,Dropdown  } from 'react-bootstrap';
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
        <div style={{display:"flex",padding:"20px"}}>
        {showLeague && <div style={{padding:"0px 20px"}}>Select League : <select onChange={handleLeagueChange} className='leagueDrop'>
          <option>Select League</option>
          {leagueData && leagueData.map((leagueObj,key) => {
          return <option key={key} value={leagueObj.league.id}>{leagueObj.league.name}</option>
          
      })}
      </select></div>
  }
  {/* {showLeague && <Dropdown onSelect={handleLeagueChange} className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          Select League:
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {leagueData && leagueData.map((leagueObj,key) => {
            return <Dropdown.Item key={key} eventKey={leagueObj.league.id}>{leagueObj.league.name}</Dropdown.Item>
          })}
        </Dropdown.Menu>
      </Dropdown>
} */}
      {showSeason && <div style={{padding:"0px 20px"}}>Select Season: <select onChange={handleSeasonsChange}  className='seasonDrop'>
          <option>Select Year</option>
          {selectedLeagueSeason.map((seasonObj,key) => {
          return <option key={key}>{seasonObj.year}</option>
          
      })}
      </select></div>
  }
  {/* {showSeason && <Dropdown onSelect={handleSeasonsChange} className="d-inline mx-2">
        <Dropdown.Toggle id="dropdown-autoclose-true">
          Select Season:
        </Dropdown.Toggle>
        
        <Dropdown.Menu>
        {selectedLeagueSeason.map((seasonObj,key) => {
          
          return <Dropdown.Item key={key} eventKey={seasonObj.league.id}>{seasonObj.year}</Dropdown.Item>
      })}
        </Dropdown.Menu>
      </Dropdown>
} */}
        {showSeason && <div className={styles.buttonDiv } >  
          <Button onClick={() => hideComponent("showHideInfo")} variant="primary">Search</Button>
        </div>}
      </div>
      )
    }
  } 

    // export default Header;