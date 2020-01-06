import React from 'react';
import useScene from '../hooks/useScene';
import Group from './Group';
import Plane from './Plane';

function Box({
  culled,
  pivotPosition: pivotPositionOverride,
  reversed,
  shadows: consumerShadows,
  size: consumerSize,
  texture,
  textureBack,
  textureBottom,
  textureFront,
  textureLeft,
  textureRight,
  textureTop,
  ...rest
}) {
  const { shaded, occluded } = useScene();

  const planes = ['front', 'back', 'top', 'bottom', 'left', 'right'].filter(
    plane => !culled.includes(plane)
  );

  function getOccludedEdges(array) {
    return array
      .map(item => {
        if (!occluded) return false;
        if (reversed) {
          return planes.includes(item.side) ? item.edge : false;
        } else {
          return consumerShadows.includes(item.side) ? item.edge : false;
        }
      })
      .filter(edge => edge);
  }

  const size =
    typeof consumerSize === 'object'
      ? consumerSize
      : { x: consumerSize, y: consumerSize, z: consumerSize };

  const pivotPosition = { x: 'center', y: 'center', z: 'center', ...pivotPositionOverride };

  const pivotDifferenceX = {
    start: -size.x / 2,
    center: 0,
    end: size.x / 2
  }[pivotPosition.x];

  const pivotDifferenceY = {
    start: -size.y / 2,
    center: 0,
    end: size.y / 2
  }[pivotPosition.y];

  const pivotDifferenceZ = {
    start: -size.z / 2,
    center: 0,
    end: size.z / 2
  }[pivotPosition.z];

  const occlusions = {
    front: getOccludedEdges([
      { edge: 'top', side: 'top' },
      { edge: 'bottom', side: 'bottom' },
      { edge: 'left', side: 'left' },
      { edge: 'right', side: 'right' }
    ]),
    back: getOccludedEdges([
      { edge: 'top', side: 'top' },
      { edge: 'bottom', side: 'bottom' },
      { edge: 'left', side: 'left' },
      { edge: 'right', side: 'right' }
    ]),
    top: getOccludedEdges([
      { edge: 'top', side: 'back' },
      { edge: 'bottom', side: 'front' },
      { edge: 'left', side: reversed ? 'right' : 'left' },
      { edge: 'right', side: reversed ? 'left' : 'right' }
    ]),
    bottom: getOccludedEdges([
      { edge: 'top', side: 'front' },
      { edge: 'bottom', side: 'back' },
      { edge: 'left', side: reversed ? 'right' : 'left' },
      { edge: 'right', side: reversed ? 'left' : 'right' }
    ]),
    right: getOccludedEdges([
      { edge: 'top', side: 'top' },
      { edge: 'bottom', side: 'bottom' },
      { edge: 'left', side: reversed ? 'back' : 'front' },
      { edge: 'right', side: reversed ? 'front' : 'back' }
    ]),
    left: getOccludedEdges([
      { edge: 'top', side: 'top' },
      { edge: 'bottom', side: 'bottom' },
      { edge: 'left', side: reversed ? 'front' : 'back' },
      { edge: 'right', side: reversed ? 'back' : 'front' }
    ])
  };

  const positions = {
    front: {
      x: `calc(-50% + ${pivotDifferenceX}px)`,
      y: `calc(-50% + ${pivotDifferenceY}px)`,
      z: `${size.z / 2 + pivotDifferenceZ}px`
    },
    back: {
      x: `calc(-50% + ${pivotDifferenceX}px)`,
      y: `calc(-50% + ${pivotDifferenceY}px)`,
      z: `-${size.z / 2 - pivotDifferenceZ}px`
    },
    top: {
      x: `calc(-50% + ${pivotDifferenceX}px)`,
      y: `calc(-50% - ${size.y / 2 - pivotDifferenceY}px)`,
      z: `${pivotDifferenceZ}px`
    },
    bottom: {
      x: `calc(-50% + ${pivotDifferenceX}px)`,
      y: `calc(-50% + ${size.y / 2 + pivotDifferenceY}px)`,
      z: `${pivotDifferenceZ}px`
    },
    right: {
      x: `calc(-50% + ${size.x / 2 + pivotDifferenceX}px)`,
      y: `calc(-50% + ${pivotDifferenceY}px)`,
      z: `${pivotDifferenceZ}px`
    },
    left: {
      x: `calc(-50% - ${size.x / 2 - pivotDifferenceX}px)`,
      y: `calc(-50% + ${pivotDifferenceY}px)`,
      z: `${pivotDifferenceZ}px`
    }
  };

  const rotations = {
    front: { x: 0, y: reversed ? 180 : 0, z: 0 },
    back: { x: 0, y: reversed ? 0 : 180, z: 0 },
    top: { x: 90, y: reversed ? 180 : 0, z: 0 },
    bottom: { x: 270, y: reversed ? 180 : 0, z: 0 },
    right: { x: 0, y: reversed ? 270 : 90, z: 0 },
    left: { x: 0, y: reversed ? 90 : 270, z: 0 }
  };

  const shadows = {
    front: !reversed && consumerShadows.includes('front'),
    back: !reversed && consumerShadows.includes('back'),
    top: !reversed && consumerShadows.includes('top'),
    bottom: !reversed && consumerShadows.includes('bottom'),
    left: !reversed && consumerShadows.includes('left'),
    right: !reversed && consumerShadows.includes('right')
  };

  const sizes = {
    front: { x: size.x, y: size.y },
    back: { x: size.x, y: size.y },
    top: { x: size.x, y: size.z },
    bottom: { x: size.x, y: size.z },
    right: { x: size.z, y: size.y },
    left: { x: size.z, y: size.y }
  };

  const textures = {
    front: {
      ...texture,
      ...textureFront,
      shade: shaded ? (reversed ? 0.6 : 0.2) : 0
    },
    back: {
      ...texture,
      ...textureBack,
      shade: shaded ? (reversed ? 0.2 : 0.6) : 0
    },
    top: {
      ...texture,
      ...textureTop,
      shade: shaded ? (reversed ? 0.4 : 0) : 0
    },
    bottom: {
      ...texture,
      ...textureBottom,
      shade: shaded ? (reversed ? 0 : 0.4) : 0
    },
    right: {
      ...texture,
      ...textureRight,
      shade: shaded ? (reversed ? 0.4 : 0.4) : 0
    },
    left: {
      ...texture,
      ...textureLeft,
      shade: shaded ? (reversed ? 0.4 : 0.4) : 0
    }
  };

  return (
    <Group {...rest}>
      {planes.map(plane => (
        <Plane
          key={plane}
          occlusion={occlusions[plane]}
          position={positions[plane]}
          rotation={rotations[plane]}
          shadow={shadows[plane]}
          size={sizes[plane]}
          texture={textures[plane]}
        />
      ))}
    </Group>
  );
}

Box.defaultProps = {
  culled: [],
  shadows: [],
  size: 128
};

export default Box;
