import React, {Fragment} from 'react'
import { Title } from "./styled";

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
