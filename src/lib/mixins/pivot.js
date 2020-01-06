import { css } from 'styled-components';

const pivot = ({ showPivot }) => css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform-origin: 50%;
  transform-style: preserve-3d;

  ${showPivot &&
    css`
      box-shadow: 0 0 5px 5px yellow;
    `};
`;

export default pivot;
