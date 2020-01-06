import { css } from 'styled-components';

const transform = ({ rotation, position }) => {
  let transforms = [];

  if (position) {
    if (position.x) {
      transforms.push(`translateX(${position.x})`);
    }
    if (position.y) {
      transforms.push(`translateY(${position.y})`);
    }
    if (position.z) {
      transforms.push(`translateZ(${position.z})`);
    }
  }

  if (rotation) {
    if (rotation.x) {
      transforms.push(`rotateX(${rotation.x}deg)`);
    }
    if (rotation.y) {
      transforms.push(`rotateY(${rotation.y}deg)`);
    }
    if (rotation.z) {
      transforms.push(`rotateZ(${rotation.z}deg)`);
    }
  }

  return css`
    transform: ${transforms.join(' ')};
  `;
};

export default transform;
