import { GraphQLServer } from 'graphql-yoga'

// Scalar types - String, Boolean, Int, Float, ID

// Demo user data
const users = [{
    id: '1',
    name: 'Andrew',
    email: 'andrew@example.com',
    age: 27
}, {
    id: '2',
    name: 'Sarah',
    email: 'sarah@example.com'
}, {
    id: '3',
    name: 'Mike',
    email: 'mike@example.com'
}]

const posts = [{
    id: '10',
    title: 'GraphQL 101',
    body: 'This is how to use GraphQL...',
    published: true,
    author: '1'
}, {
    id: '11',
    title: 'GraphQL 201',
    body: 'This is an advanced GraphQL post...',
    published: false,
    author: '1'
}, {
    id: '12',
    title: 'Programming Music',
    body: '',
    published: false,
    author: '2'
}]

const players = [
    {
        player: {
            id: 8343,
            firstName: 'Tyrell',
            lastName: 'Adams',
            primaryPosition: 'LB',
            alternatePositions: [],
            jerseyNumber: 44,
            currentTeam: {
                id: 64,
                abbreviation: 'HOU'
            },
            currentRosterStatus: 'ROSTER',
            currentInjury: null,
            height: '6\'2"',
            weight: 228,
            birthDate: '1992-04-10',
            age: 26,
            birthCity: null,
            birthCountry: null,
            rookie: false,
            highSchool: null,
            college: null,
            handedness: null,
            officialImageSrc: null,
            socialMediaAccounts: [],
            currentContractYear: null,
            drafted: null,
            externalMappings: []
        },
        teamAsOfDate: {
            id: 64,
            abbreviation: 'HOU'
        }
    },
    {
        player: {
            id: 14693,
            firstName: 'Jordan',
            lastName: 'Akins',
            primaryPosition: 'TE',
            alternatePositions: [],
            jerseyNumber: null,
            currentTeam: {
                id: 64,
                abbreviation: 'HOU'
            },
            currentRosterStatus: 'ROSTER',
            currentInjury: null,
            height: '6\'3"',
            weight: 237,
            birthDate: '1992-04-19',
            age: 26,
            birthCity: 'Locust Grove, GA',
            birthCountry: 'USA',
            rookie: true,
            highSchool: null,
            college: null,
            handedness: null,
            officialImageSrc: null,
            socialMediaAccounts: [],
            currentContractYear: null,
            drafted: null,
            externalMappings: []
        },
        teamAsOfDate: {
            id: 64,
            abbreviation: 'HOU'
        }
    }
]
// Type definitions (schema)
const typeDefs = `
    type Query {
        users(query: String): [User!]!
        posts(query: String): [Post!]!
        me: User!
        post: Post!
         players: [Player!]!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
        posts: [Post!]!
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
        author: User!
    }
    type Player {
        id: ID!
        firstName: String!

    }
`

// Resolvers
const resolvers = {
    Query: {
        users(parent, args, ctx, info) {
            if (!args.query) {
                return users
            }

            return users.filter((user) => {
                return user.name.toLowerCase().includes(args.query.toLowerCase())
            })
        },
        players(parent, args, ctx, info){
            const example = Object.values(players).map(player => player.player)
            return example;
        },
        posts(parent, args, ctx, info) {
            if (!args.query) {
                return posts
            }

            return posts.filter((post) => {
                const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase())
                const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase())
                return isTitleMatch || isBodyMatch
            })
        },
        me() {
            return {
                id: '123098',
                name: 'Mike',
                email: 'mike@example.com'
            }
        },
        post() {
            return {
                id: '092',
                title: 'GraphQL 101',
                body: '',
                published: false
            }
        }
    },
    Post: {
        author(parent, args, ctx, info) {
            return users.find((user) => {
                return user.id === parent.author
            })
        }
    },
    User: {
        posts(parent, args, ctx, info) {
            return posts.filter((post) => {
                return post.author === parent.id
            })
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log('The server is up!')
})

// import { GraphQLServer, PubSub } from 'graphql-yoga';
// import Query from './resolvers/Query';

// const pubsub = new PubSub();

// const server = new GraphQLServer({
//   typeDefs: './src/schema.graphql',
//   resolvers: {
//     Query
//   },
//   context: {
//     pubsub
//   }
// });

// server.start(() => {
//   console.log('The server is up!');
// });
