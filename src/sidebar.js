import React, { Component } from 'react';
import './index.css';
import styles from './style.module.css';
import { render } from "react-dom";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {apiCall, API } from './util/apiCall';
import ListGroup from 'react-bootstrap/ListGroup';

export default class SideBar extends Component{
    render(){
        const {teamsData, handleTeamClicks} = this.props;
        return(
            <div className={styles.listview} style={{height: "100%",width:"40%",display:"inline-block"}}>
           {teamsData.map((teamObj,key) => {
          return <ListGroup as="ul"  onClick={() => handleTeamClicks(teamObj.team.id)}>
            <ListGroup.Item>
            <img style={{display:"inline-block"}} src={teamObj.team.logo} alt="Logo"></img>
            <p className={styles.optionText}>{teamObj.team.name}</p>
            </ListGroup.Item>
          </ListGroup>
        })}
            </div>
        //   <div className={styles.listview} style={{height: "100%",width:"40%",display:"inline-block"}}>
            
        //   {teamsData.map((teamObj,key) => {
        //   return <div className={styles.leagueListElement} onClick={() => handleTeamClicks(teamObj.team.id)}>
        //       <div className={styles.optionImg}>
        //        <img style={{display:"inline-block"}} src={teamObj.team.logo} alt="Logo"></img>
        //        <p className={styles.optionText}>{teamObj.team.name}</p>
        //      </div>

        //      </div>
        // })}
        //   </div>
        );
    }
}