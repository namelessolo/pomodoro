import type { FC } from 'react';
import styled from 'styled-components';

const size = 600;
const stroke = 40;
const progress = 100;
const circle = size / 2;
const radius = circle - stroke;
const arcLength = 2 * 3.14 * radius;
const arcOffset = (arcLength * (100 - progress)) / 100;

const Wrapper = styled.svg`
  rotate: -90deg;
  width: ${size}px;
  height: ${size}px;
  & circle {
    cx: ${circle}px;
    cy: ${circle}px;
    r: ${radius}px;
    fill: transparent;
    stroke-width: ${stroke}px;
  }
  & .svg-indicator-track {
    stroke: black;
  }
  & .svg-indicator-indication {
    stroke: green;
    stroke-dasharray: ${arcLength}px;
    stroke-dashoffset: ${arcOffset}px;
  }
`;

const Circle: FC = () => {
  return (
    <Wrapper>
      <svg className='svg-indicator'>
        <circle className='svg-indicator-track' />
        <circle className='svg-indicator-indication' />
      </svg>
    </Wrapper>
  );
};

export default Circle;
