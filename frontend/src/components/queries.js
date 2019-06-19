import gql from 'graphql-tag';

export const CURRENT_TEAM_QUERY = gql`
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
