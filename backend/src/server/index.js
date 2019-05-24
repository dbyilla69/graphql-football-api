import {
  GraphQLServer
} from 'graphql-yoga';
import axios from './axiosUrl';
// Scalar types - String, Boolean, Int, Float, ID


// Type definitions (schema)
const typeDefs = `
    type Query {
         players: [Player!]!
          currentTeam:[CurrentTeam]
    }

    type Player {
        id: ID!
        firstName: String!
        lastName: String!
        birthDate:String
        jerseyNumber: Int
        primaryPosition:String
        height:String
        weight:Int
        currentTeam:[CurrentTeam]
    }

    type CurrentTeam{
      id:ID
      abbreviation: String
    }
`;

// Resolvers
const resolvers = {
  Query: {
    players: async () => {
      const res = await axios
        .get(`/players.json?team=was`);
      return Object.values(res.data.players).map(player => player.player);
    },
    currentTeam: async () => {
      const res = await axios
        .get(`/players.json?team=was`);
      return Object.values(res.data.players).map(player => player.player.currentTeam);
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