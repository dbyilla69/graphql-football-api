import axios from '../axiosUrl';

// const transformResponse = (details) => ({
//   player: details.players.map(player => player.player)
// });


// const Query = {
//   // players: () => {
//   //   return axios
//   //       .get(`/players.json?team=was`)
//   //     .then(res => console.log('api', transformResponse(res.data) ));
//   // }
//   players: (parent, args, ctx, info){
//     return players;
//   }
// };

export {
  Query as
  default
};