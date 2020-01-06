import React from 'react';
import { Scene, Group, Box } from '../../lib';

function Example1() {
  return (
    <>
      <Scene
        ambientColor={{ r: 170, g: 70, b: 120 }}
        backgroundColor="#ed64a1"
        shadow
        shaded={{
          strength: 1.5
        }}
        occluded={{
          size: 10,
          strength: 0.2
        }}
      >
        <Group rotation={{ x: -45, y: -45 }}>
          <Box
            pivotPosition={{ x: 'end', y: 'start', z: 'end' }}
            position={{ x: '22px', y: '-124px', z: '22px' }}
            shadows={['back', 'bottom', 'left']}
            size={50}
            texture={{ color: 'white' }}
          />
          <Box
            pivotPosition={{ x: 'end', y: 'start', z: 'end' }}
            position={{ x: '22px', y: '-22px', z: '22px' }}
            shadows={['back', 'bottom', 'left']}
            size={100}
            texture={{ color: 'white' }}
          />
          <Box
            reversed
            culled={['top', 'right', 'front']}
            pivotPosition={{ x: 'end', y: 'start', z: 'end' }}
            position={{ x: '20px', y: '-20px', z: '20px' }}
            size={{ x: 200, y: 200, z: 200 }}
            texture={{ color: 'white' }}
          />
          <Box
            culled={['back', 'left', 'bottom']}
            pivotPosition={{ x: 'end', y: 'start', z: 'end' }}
            size={{ x: 220, y: 220, z: 220 }}
            texture={{
              color: 'white'
            }}
            textureTop={{
              clipPath: `polygon(100% 0%, 100% 20px, 20px 20px, 20px 100%, 0% 100%, 0% 0%)`
            }}
            textureFront={{
              clipPath: `polygon(0 0, 20px 0, 20px calc(100% - 20px), 100% calc(100% - 20px), 100% 100%, 0 100%)`
            }}
            textureRight={{
              clipPath: `polygon(calc(100% - 20px) 0%, 100% 0%, 100% 100%, 0% 100%, 0% calc(100% - 20px), calc(100% - 20px) calc(100% - 20px))`
            }}
          />
        </Group>
      </Scene>
    </>
  );
}

export default Example1;
