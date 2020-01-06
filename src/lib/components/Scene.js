import React, { createContext } from 'react';
import styled, { css } from 'styled-components';
import pivot from '../mixins/pivot';

export const SceneContext = createContext();

/*
  isWebkit - Used to apply a hidden drop-shadow filter in webkit browsers only.
  For some reason this prevents depth fighting issues where faces flicker in
  webkit browsers but causes depth fighting to happen in non-webkit browsers 🤷.
*/

const isWebkit = /(webkit)/.test(navigator.userAgent.toLowerCase());

const OuterContainer = styled.div`
  ${({ backgroundColor, height, width }) => css`
    background-color: ${backgroundColor};
    overflow: hidden;
    position: relative;
    height: ${height};
    width: ${width};
  `}
`;

const Container = styled.div`
  ${({ ambientColor, shadow, perspective }) => css`
    ${pivot}
    perspective: ${perspective + 'px'};

    ${isWebkit &&
      css`
        filter: drop-shadow(
          0 8px 8px
            rgba(
              ${ambientColor.r},
              ${ambientColor.g},
              ${ambientColor.b},
              ${shadow ? 0.5 : 0}
            )
        );
      `};
  `}
`;

function Scene({
  ambientColor,
  children,
  shaded,
  shadow,
  occluded,
  perspective,
  ...rest
}) {
  return (
    <SceneContext.Provider value={{ ambientColor, shaded, occluded }}>
      <OuterContainer {...rest}>
        <Container
          ambientColor={ambientColor}
          shadow={shadow}
          perspective={perspective}
        >
          {children}
        </Container>
      </OuterContainer>
    </SceneContext.Provider>
  );
}

Scene.defaultProps = {
  ambientColor: { r: 0, g: 0, b: 0 },
  backgroundColor: 'black',
  height: '800px',
  occluded: {
    size: 0,
    strength: 0
  },
  perspective: 2000,
  shaded: { strength: 0 },
  width: '100%'
};

export default Scene;
