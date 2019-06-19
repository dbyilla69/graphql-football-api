import React, {Fragment} from 'react'
import styled from 'styled-components';
const Title = styled.div`
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 12px;
  font-size: 100 %;
`;
const TableHeader = () => {
  return (
    <Fragment>
    <Title />
    <Title>Player Name</Title>
    <Title>Jersey Number</Title>
    <Title>Position</Title>
    <Title>Height</Title>
    <Title>Weight</Title>
    </Fragment>);
}

export default TableHeader;
