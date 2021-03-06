import PropTypes from 'prop-types';
import React from 'react';
import styled, { keyframes } from 'styled-components';

const propTypes = {
  rows: PropTypes.number,
};

const range = num => Array.from(Array(num).keys());
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - (min + 1))) + min;
};

const PlaceholderRows = ({ rows = 6 }) => (
  <Wrapper>
    {range(rows).map((idx) => {
      return (
        <Row key={`placeholder_row_${idx}`}>
          <Cell>
            <LoadingPlaceholder w={getRandomInt(4, 10)} />
          </Cell>
        </Row>
      );
    })}
  </Wrapper>
);

const bgAnim = keyframes`
  0% { background-color: #f5f5f5; }
  50% { background-color: #eee }
  100% { background-color: #f5f5f5; }
`;
const LoadingPlaceholder = styled.div`
  height: 20px;
  width: ${props => props.w * 10}%;
  border-radius: 3px;
  animation: ${bgAnim} 3s linear infinite;
`;
const Cell = styled.div`
  padding: 0px 8px;
  flex: 1;
`;
const Row = styled.div`
  font-size: 0.9rem;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
`;

PlaceholderRows.propTypes = propTypes;

export default PlaceholderRows;
