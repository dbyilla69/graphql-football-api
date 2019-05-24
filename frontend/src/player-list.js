import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
  {
    players {
      id
      firstName
      lastName
      jerseyNumber
    }
  }
`;

class PlayerList extends React.Component {
  state = {};
  render() {
    return (
      <Query query={query} variables={{ id: this.props.id }}>
        {({ error, loading, data }) => {
          if (error) return <p>Error!</p>;
          if (loading) return <p>Loading...</p>;
          if (!data.players) return <p>No Players Found</p>;
          const { players } = data;
          console.log(data.players);

          return (
            <div>
              {players.map(player => (
                <div key={player.id}>
                  <span>{player.firstName}</span> <span>{player.lastName}</span>
                  <span>{player.jerseyNumber}</span>
                </div>
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default PlayerList;
