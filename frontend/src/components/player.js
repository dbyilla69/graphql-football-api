import React from 'react';
import { Row, Box } from "./styled";

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
