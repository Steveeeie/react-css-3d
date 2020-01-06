import React from 'react';
import styled, { css } from 'styled-components';
import useScene from '../hooks/useScene';
import transform from '../mixins/transform';

const texture = ({ ambientColor, occlusion, occluded, shaded, texture }) => {
  const images = [];
  const sizes = [];
  const positions = [];

  if (occlusion.includes('top')) {
    images.push(
      `linear-gradient(to bottom, rgba(${ambientColor.r}, ${ambientColor.g}, ${ambientColor.b}, ${occluded.strength}) 0%, rgba(${ambientColor.r}, ${ambientColor.g}, ${ambientColor.b}, 0) ${occluded.size}px)`
    );
    positions.push('center');
    sizes.push('100%');
  }

  if (occlusion.includes('bottom')) {
    images.push(
      `linear-gradient(to top, rgba(${ambientColor.r}, ${ambientColor.g}, ${ambientColor.b}, ${occluded.strength}) 0%, rgba(${ambientColor.r}, ${ambientColor.g}, ${ambientColor.b}, 0) ${occluded.size}px)`
    );
    positions.push('center');
    sizes.push('100%');
  }

  if (occlusion.includes('left')) {
    images.push(
      `linear-gradient(to right, rgba(${ambientColor.r}, ${ambientColor.g}, ${ambientColor.b}, ${occluded.strength}) 0%, rgba(${ambientColor.r}, ${ambientColor.g}, ${ambientColor.b}, 0) ${occluded.size}px)`
    );
    positions.push('center');
    sizes.push('100%');
  }

  if (occlusion.includes('right')) {
    images.push(
      `linear-gradient(to left, rgba(${ambientColor.r}, ${ambientColor.g}, ${ambientColor.b}, ${occluded.strength}) 0%, rgba(${ambientColor.r}, ${ambientColor.g}, ${ambientColor.b}, 0) ${occluded.size}px)`
    );
    positions.push('center');
    sizes.push('100%');
  }

  if (shaded && texture.shade) {
    images.push(
      `linear-gradient(rgba(${ambientColor.r}, ${ambientColor.g}, ${
        ambientColor.b
      }, ${texture.shade * shaded.strength}) 0%, rgba(${ambientColor.r}, ${
        ambientColor.g
      }, ${ambientColor.b}, ${texture.shade * shaded.strength}) 100%)`
    );
    positions.push('center');
    sizes.push('100%');
  }

  if (texture.image) {
    images.push(`url(${texture.image})`);
    positions.push(`${texture.position || 'center'}`);
    sizes.push(`${texture.size || '100%'}`);
  }

  return css`
    background-color: ${texture.color || '#d8730b'};
    background-image: ${images.join(', ')};
    background-position: ${positions.join(', ')};
    background-size: ${sizes.join(', ')};
    clip-path: ${texture.clipPath};
    image-rendering: ${texture.filter === 'pixelated' &&
      'crisp-edges'}; /* Firefox */
    image-rendering: ${texture.filter === 'pixelated' && 'pixelated'};
  `;
};

const Container = styled.div`
  ${({ ambientColor, occluded, size, shadow, showBackface }) => css`
    ${transform};
    height: ${size.y}px;
    width: ${size.x}px;
    position: absolute;
    transform-style: preserve-3d;

    ${shadow &&
      css`
        &:before {
          content: '';
          backface-visibility: ${showBackface ? 'visible' : 'hidden'};
          box-shadow: 0 0 ${occluded.size}px ${occluded.size / 2}px
            rgba(
              ${ambientColor.r},
              ${ambientColor.g},
              ${ambientColor.b},
              ${occluded.strength}
            );
          transform: rotateY(180deg);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      `};

    &:after {
      ${texture};
      content: '';
      backface-visibility: ${showBackface ? 'visible' : 'hidden'};
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  `}
`;

function Plane({ ...rest }) {
  const { ambientColor, occluded, shaded } = useScene();
  return (
    <Container
      ambientColor={ambientColor}
      occluded={occluded}
      shaded={shaded}
      {...rest}
    />
  );
}

Plane.defaultProps = {
  occlusion: [],
  position: {
    x: '-50%',
    y: '-50%'
  },
  size: {
    x: 128,
    y: 128
  }
};

export default Plane;
