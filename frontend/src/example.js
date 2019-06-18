import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(50px, 1fr));
  background-color: #fff;
  color: #444;
  max-width: 800px;
`;

const Row = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(6, minmax(50px, 1fr));
`;

const Title = styled.div`
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 12px;
  font-size: 100 %;
`;
const Box = styled.div`
  background-color: #c7c7c724;
  color: #444;
  border-radius: 5px;
  padding: 12px;
  font-size: 100%;
`;

const CURRENT_TEAM_QUERY = gql`
  query CurrentTeam($team: String) {
    currentTeam(team: $team) {
      id
      team
      firstName
      lastName
      jerseyNumber
      primaryPosition
      height
      weight
      image
    }
  }
`;

class CurrentTeam extends Component {
  state = { team: null };
  handleChange = e => {
    const { value } = e.target;
    console.log({ value });

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
                  <Title />
                  <Title>Player Name</Title>
                  <Title>Jersey Number</Title>
                  <Title>Position</Title>
                  <Title>Height</Title>
                  <Title>Weight</Title>
                  {currentTeam.map(player => (
                    <Row key={player.id}>
                      <Box>
                        <img
                          src={player.image}
                          alt='pic'
                          style={{ height: 40, width: 40 }}
                        />
                      </Box>
                      <Box>
                        {player.firstName} {player.lastName}
                      </Box>
                      <Box>{player.jerseyNumber}</Box>
                      <Box>{player.primaryPosition}</Box>
                      <Box>{player.height}</Box>
                      <Box>{player.weight}</Box>
                    </Row>
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
