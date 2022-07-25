import React, { Component } from 'react';
import './index.css';
import styles from './style.module.css';
import { render } from "react-dom";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {apiCall, API } from './util/apiCall';
import Table from 'react-bootstrap/Table';

export default class Result extends Component{
    render(){
        const {showStat, statData} = this.props;
        return(
            <div>
            {showStat && <div style={{display:"inline-block",height:"100%"}}>
            {statData && Object.keys(statData).length > 0 && (<div  style={{width:"100%"}}>
                
                  <div>
                  League: {statData.league.name}
                </div>
                  <div>
                  <p>Team: {statData.team.name}</p>
                  </div>
                  <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Fixture</th>
                        <th>Home</th>
                        <th>Away</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Wins</td>
                        <td>{statData.fixtures.wins.home}</td>
                        <td>{statData.fixtures.wins.away}</td>
                        <td>{statData.fixtures.wins.total}</td>
                    </tr>
                    <tr>
                        <td>Losses</td>
                        <td>{statData.fixtures.loses.home}</td>
                        <td>{statData.fixtures.loses.away}</td>
                        <td>{statData.fixtures.loses.total}</td>
                    </tr>
                    <tr>
                        <td>Draw</td>
                        <td>{statData.fixtures.draws.home}</td>
                        <td>{statData.fixtures.draws.away}</td>
                        <td>{statData.fixtures.draws.total}</td>
                    </tr>
                    </tbody>
                  </Table>
                </div>
                
            )}
            </div>
            }
            </div>
        )
    }
}