import styled from 'styled-components';

export const Row = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(6, minmax(50px, 1fr));
`;

export const Box = styled.div`
  background-color: #c7c7c724;
  color: #444;
  border-radius: 5px;
  padding: 12px;
  font-size: 100%;
`;

export const Title = styled.div`
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 12px;
  font-size: 100 %;
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(50px, 1fr));
  background-color: #fff;
  color: #444;
  max-width: 800px;
`;
