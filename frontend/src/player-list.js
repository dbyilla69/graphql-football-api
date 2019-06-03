import React from 'react';
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
  grid-template-columns: repeat(5, minmax(50px, 1fr));
`;

const Title = styled.div`
  background-color: #5c2b2f;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150 %;
`;
const Box = styled.div`
  background-color: #c7c7c7;
  color: #444;
  border-radius: 5px;
  padding: 20px;
  font-size: 100%;
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
      currentTeam {
        id
        abbreviation
      }
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
            <Wrapper>
              <Title>Player Name</Title>
              <Title>Jersey Number</Title>
              <Title>Position</Title>
              <Title>Height</Title>
              <Title>Weight</Title>
              <Title>Team</Title>
              {players.map(player => (
                <Row key={player.id}>
                  <Box>
                    {player.firstName} {player.lastName}
                  </Box>
                  <Box>{player.jerseyNumber}</Box>
                  <Box>{player.primaryPosition}</Box>
                  <Box>{player.height}</Box>
                  <Box>{player.weight}</Box>
                  <Box>{player.currentTeam.abbreviation}</Box>
                </Row>
              ))}
            </Wrapper>
          );
        }}
      </Query>
    );
  }
}

export default PlayerList;
