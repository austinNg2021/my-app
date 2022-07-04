
export const API = {
    leagues: "https://v3.football.api-sports.io/leagues",
    teams: (leagues, season) => `https://v3.football.api-sports.io/teams?league=${leagues}&season=${season}`,
    stats: (league,season,team) => `https://v3.football.api-sports.io/teams/statistics?season=${season}&team=${team}&league=${league}`,

}

export async function apiCall(apiUrl) {
    try {
        const response = await fetch(apiUrl, {
            "method": "GET",
            "headers": {
              "x-rapidapi-host": "v3.football.api-sports.io",
              "x-rapidapi-key": "30806e93843238878ba6992561dbc3bf"
            }
          });
          const data = await response.json();
          console.log(data);
          return data;
        //   .then(response => {
        //     console.log(response);
        //   })
        //   .catch(err => {
        //     console.log(err);
        //   });
    } catch (error) {
        
    }
}