import { GraphQLServer } from 'graphql-yoga';
import axios from './axiosUrl';
// Scalar types - String, Boolean, Int, Float, ID

// Type definitions (schema)
const typeDefs = `
    type Query {
         players: [Player]
         currentTeam(team: String):[CurrentTeam]
    }

    type Player {
        id: ID
        firstName: String
        lastName: String
        birthDate:String
        jerseyNumber: Int
        primaryPosition:String
        height:String
        weight:Int 
        officialImageSrc:String

    }

    type CurrentTeam{
      id: ID
      team: String
      firstName: String
      lastName: String
      birthDate:String
      jerseyNumber: Int
      primaryPosition:String
      height:String
      weight:Int
      image:String
    }
`;

// Resolvers
const resolvers = {
  Query: {
    players: async () => {
      const res = await axios.get(`/players.json?team=hou&&season=latest`);
      return Object.values(res.data.players).map(p => p.player);
    },
    currentTeam: async (parent, args, ctx, info) => {
      const { team, season } = args;
      const res = await axios.get(
        `/players.json?team=${team}&&?season=${season}`
      );
      return Object.values(res.data.players).map(p => ({
        id: p.player.id,
        firstName: p.player.firstName,
        lastName: p.player.lastName,
        jerseyNumber: p.player.jerseyNumber,
        primaryPosition: p.player.primaryPosition,
        height: p.player.height,
        weight: p.player.weight,
        team: p.player.currentTeam.abbreviation,
        image: p.player.officialImageSrc
      }));
    }
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => {
  console.log('The server is up!');
});
