import React from 'react';
import PlayerList from './player-list';
import Select from './select';
// import styled from 'styled-components';

// const AppWrapper = styled.div `
//   text-align: center;
// `

function App() {
  return (
    <div>
      <Select/>
      <PlayerList/>
    </div>
  );
}

export default App;
