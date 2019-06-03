import { GraphQLServer } from 'graphql-yoga';
import axios from './axiosUrl';
// Scalar types - String, Boolean, Int, Float, ID

const transformPlayerResponse = details => ({
  id: p.player.id,
  firstName: p.player.firstName,
  lastName: p.player.lastName,
  birthDate: p.player.birthDate,
  jerseyNumber: p.player.jerseyNumber,
  primaryPosition: p.player.primaryPosition,
  height: p.player.height,
  weight: p.player.weight,
  abbreviation: p.player.abbreviation
});

// Type definitions (schema)
const typeDefs = `
    type Query {
         players: [Player]
          currentTeam(id:String!):[CurrentTeam]
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

    }
`;

// Resolvers
const resolvers = {
  Query: {
    players: async () => {
      const res = await axios.get(`/players.json?team=was`);
      return Object.values(res.data.players).map(p => p.player);
    },
    currentTeam: async (parent, args, ctx, info) => {
      const { id } = args;
      const res = await axios.get(`/players.json?team=${id}`);
      return Object.values(res.data.players).map(p => ({
        firstName: p.player.firstName,
        lastName: p.player.lastName,
        jerseyNumber: p.player.jerseyNumber,
        primaryPosition: p.player.primaryPosition,
        height: p.player.height,
        weight: p.player.weight,
        team: p.player.currentTeam.abbreviation
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
