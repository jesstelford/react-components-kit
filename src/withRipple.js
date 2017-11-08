import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
const withRipple = (Comp) => {
  return class RippleProvider extends Component {
    static propTypes = {
      wrapperStyles: PropTypes.object,
    };

    static defaultProps = {
      wrapperStyles: {},
    };

    render() {
      const { wrapperStyles, ...rest } = this.props;
      return (
        <RippleWrapper style={wrapperStyles}>
          <Comp {...rest} />
        </RippleWrapper>
      );
    }
  };
};
/* eslint-enable react/prefer-stateless-function */

const RippleWrapper = styled.div`
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  display: inline-block;
  align-self: flex-start;

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #000 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10,10);
    opacity: 0;
    transition: transform .5s, opacity 1s;
  }

  &:active:after {
    transform: scale(0,0);
    opacity: .2;
    transition: 0s;
  }

  &:focus-within {
    outline: auto;
  }
`;

export default withRipple;
