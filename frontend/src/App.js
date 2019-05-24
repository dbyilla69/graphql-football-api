import React from 'react';
import PlayerList from './player-list';
import styled from 'styled-components';

const AppWrapper = styled.div `
  text-align: center;
`

function App() {
  return (
    <AppWrapper>
      <PlayerList/>
    </AppWrapper>
  );
}

export default App;
