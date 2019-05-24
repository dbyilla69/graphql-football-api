import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

const Container = styled.div`
  margin: 2rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(5, 0.5fr);
  grid-template-rows: 1rem;
  border-style: outset;
`;
const Cell = styled.span`
  color: #5c2b2f;
  font-size: 1rem;
  text-align: left;
`;

const query = gql`
  {
    players {
      id
      firstName
      lastName
      jerseyNumber
      primaryPosition
      height
      weight
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
                <Container key={player.id}>
                  <Cell>{player.jerseyNumber}</Cell>
                  <Cell>
                    {player.firstName} {player.lastName}
                  </Cell>
                  <Cell>{player.primaryPosition}</Cell>
                  <Cell>{player.height}</Cell>
                  <Cell>{player.weight}</Cell>
                </Container>
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

export default PlayerList;
