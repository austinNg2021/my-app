import React from "react";

import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://api-football-v1.p.rapidapi.com/v3/teams/statistics',
  params: {league: '39', season: '2020', team: '33'},
  headers: {
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    'X-RapidAPI-Key': '86d24b8778msha4c916f312307cbp121557jsn1964e94e86ac'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});