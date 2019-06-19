import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { Wrapper } from './styled';
import Player from './player';
import TableHeader from './tableHeader';
import { TEAM_QUERY } from './queries';

class Team extends Component {

  handleChange = e => {
    this.setState({ team: e.target.value });
  };

  render() {
    return (
      <Query query={TEAM_QUERY} >
        {({ loading, error, data }) => {
          if (loading) return null;
          if (error) return `Error! ${error}`;
          if (!data.players) return <p>No Current Players Found</p>;
          const { players } = data;
          console.log(data.players);

          return (
                <Wrapper>
                  <TableHeader />
              {players.map(player => (
                    <Player
                      key={player.id}
                  image={player.officialImageSrc}
                      firstName={player.firstName}
                      lastName={player.lastName}
                      jerseyNumber={player.jerseyNumber}
                      primaryPosition={player.primaryPosition}
                      height={player.height}
                      weight={player.weight}
                    />
                  ))}
                </Wrapper>
          );
        }}
      </Query>
    );
  }
}

export default Team;
