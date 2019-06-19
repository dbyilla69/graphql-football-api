import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Wrapper } from './components/styled';
import Player from './components/player';
import TableHeader from './components/tableHeader';
import { CURRENT_TEAM_QUERY } from './components/queries';

class CurrentTeam extends Component {
  state = { team: undefined, season: "latest" };

  handleChange = e => {
    this.setState({ team: e.target.value });
  };

  render() {
    const { team } = this.state;
    return (
      <Query query={CURRENT_TEAM_QUERY} variables={{ team }}>
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return `Error! ${error}`;
          if (!data.currentTeam) return <p>No Current Players Found</p>;
          const { currentTeam } = data;
          console.log(data.currentTeam);

          return (
            <div>
              <select value={team} onChange={this.handleChange}>
                <option>Please Select a team</option>
                <option value='ARI'>Arizona Cardinals</option>
                <option value='ATL'>Atlanta Falcons</option>
                <option value='BAL'>Baltimore Ravens</option>
                <option value='BUF'>Buffalo Bills</option>
                <option value='CAR'>Carolina Panthers</option>
                <option value='CHI'>Chicago Bears</option>
                <option value='CIN'>Cincinnati Bengals</option>
                <option value='CLE'>Cleveland Browns</option>
                <option value='DAL'>Dallas Cowboys</option>
                <option value='DEN'>Denver Broncos</option>
                <option value='DET'>Detroit Lions</option>
                <option value='GB'>Green Bay Packers</option>
                <option value='HOU'>Houston Texans</option>
                <option value='IND'>Indianapolis Colts</option>
                <option value='JAX'>Jacksonville Jaquars</option>
                <option value='KC'>Kansas City Chiefs</option>
                <option value='LAC'>Los Angeles Chargers</option>
                <option value='LA'>Los Angeles Rams</option>
                <option value='MIA'>Miami Dolphins</option>
                <option value='MIN'>Minnesota Vikings</option>
                <option value='NE'>New England Patriots</option>
                <option value='NO'>New Orleans Saints</option>
                <option value='NYG'>New York Giants</option>
                <option value='NYJ'>New York Jets</option>
                <option value='OAK'>Oakland Raiders</option>
                <option value='PHI'>Philadelphia Eagles</option>
                <option value='PIT'>Pittsburgh Steelers</option>
                <option value='SF'>San Francisco 49ers</option>
                <option value='SEA'>Seattle Seahawks</option>
                <option value='TB'>Tampa Bay Bucks</option>
                <option value='TEN'>Tennessee Titans</option>
                <option value='WAS'>Washington Redskins</option>
              </select>
              {team && (
                <Wrapper>
                  <TableHeader />
                  {currentTeam.map(player => (
                    <Player
                      key={player.id}
                      image={player.image}
                      firstName={player.firstName}
                      lastName={player.lastName}
                      jerseyNumber={player.jerseyNumber}
                      primaryPosition={player.primaryPosition}
                      height={player.height}
                      weight={player.weight}
                    />
                  ))}
                </Wrapper>
              )}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default CurrentTeam;
