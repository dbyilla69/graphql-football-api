import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(6, minmax(50px, 1fr));
`;

const Box = styled.div`
  background-color: #c7c7c724;
  color: #444;
  border-radius: 5px;
  padding: 12px;
  font-size: 100%;
`;

const Player = ({image, firstName, lastName, jerseyNumber, primaryPosition, height, weight}) => {
  return (<Row>
    <Box>
      <img
        src={image}
        alt='pic'
        style={{ height: 40, width: 40 }}
      />
    </Box>
    <Box>
      {firstName} {lastName}
    </Box>
    <Box>{jerseyNumber}</Box>
    <Box>{primaryPosition}</Box>
    <Box>{height}</Box>
    <Box>{weight}</Box>
  </Row> );
}

export default Player;
