import React from 'react';
import { animated, useSpring } from 'react-spring';
import { Scene, Group, Box } from '../../lib';

function Example2() {
  const props = useSpring({
    to: async next => {
      while (1) {
        await next({ transform: 'rotateX(-25deg) rotateY(-30deg)' });
        await next({ transform: 'rotateX(-25deg) rotateY(30deg)' });
      }
    },
    from: { transform: 'rotateX(-25deg) rotateY(-30deg)' },
    config: { duration: 6000 }
  });

  return (
    <>
      <Scene
        ambientColor={{ r: 20, g: 90, b: 140 }}
        backgroundColor="#5bb3ea"
        shadow
        shaded={{
          strength: 1.5
        }}
        occluded={{
          size: 12,
          strength: 0.2
        }}
        perspective={2000}
      >
        <Group as={animated.div} style={props}>
          <Group rotation={{ y: -45 }}>
            {/* Monitor */}
            <Group
              position={{ x: '-134px', y: '32px', z: '-64px' }}
              rotation={{ y: -20 }}
            >
              <Box
                pivotPosition={{ y: 'end' }}
                position={{ y: '-72px' }}
                size={{ x: 4, y: 64, z: 96 }}
                texture={{ color: 'white' }}
              />
              <Box
                pivotPosition={{ y: 'end' }}
                position={{ y: '-70px', x: '-8px' }}
                size={{ x: 8, y: 66, z: 16 }}
                shadows={['bottom']}
                texture={{ color: 'white' }}
              />
              <Box
                shadows={['bottom']}
                size={{ x: 32, y: 4, z: 48 }}
                texture={{ color: 'white' }}
              />
            </Group>

            {/* Desk */}
            <Group position={{ x: '-134px', y: '40px' }}>
              <Box
                shadows={['bottom', 'left']}
                size={{ x: 96, y: 8, z: 256 }}
                texture={{ color: 'white' }}
              />
              <Box
                culled={['bottom']}
                shadows={['left']}
                size={{ x: 4, y: 32, z: 80 }}
                position={{ y: '20px', z: '80px', x: '50px' }}
                texture={{ color: 'white' }}
              />
              <Box
                culled={['bottom']}
                shadows={['left']}
                size={{ x: 4, y: 32, z: 80 }}
                position={{ y: '54px', z: '80px', x: '50px' }}
                texture={{ color: 'white' }}
              />
              <Box
                shadows={['bottom', 'left']}
                size={{ x: 96, y: 107, z: 8 }}
                position={{ y: '58px', z: '42px' }}
                texture={{ color: 'white' }}
              />
              <Box
                shadows={['bottom', 'left']}
                size={{ x: 96, y: 107, z: 8 }}
                position={{ y: '58px', z: '-118px' }}
                texture={{ color: 'white' }}
              />
              <Box
                shadows={['bottom', 'left']}
                size={{ x: 96, y: 107, z: 8 }}
                position={{ y: '58px', z: '118px' }}
                texture={{ color: 'white' }}
              />
            </Group>

            {/* Carpet */}
            <Box
              shadows={['bottom']}
              size={{ x: 128, y: 1, z: 256 }}
              position={{ y: '150px', x: '100px' }}
              texture={{ color: 'white' }}
            />

            {/* Book Shelf */}
            <Group position={{ x: '64px', y: '-96px', z: '-158px' }}>
              <Box
                shadows={['back']}
                size={{ x: 200, y: 6, z: 48 }}
                texture={{ color: 'white' }}
              />
              <Box
                shadows={['back']}
                size={{ x: 200, y: 6, z: 48 }}
                position={{ y: '64px' }}
                texture={{ color: 'white' }}
              />
              <Box
                shadows={['back', 'bottom']}
                size={{ x: 8, y: 48, z: 32 }}
                pivotPosition={{ y: 'end' }}
                position={{ x: '-90px', y: '12px' }}
                texture={{ color: 'white' }}
              />
              <Box
                shadows={['back', 'bottom']}
                size={{ x: 8, y: 48, z: 32 }}
                pivotPosition={{ y: 'end' }}
                position={{ x: '-76px', y: '12px' }}
                texture={{ color: 'white' }}
              />
              <Box
                shadows={['back']}
                size={{ x: 8, y: 48, z: 32 }}
                pivotPosition={{ y: 'end', x: 'start' }}
                position={{ x: '-64px', y: '12px' }}
                rotation={{ z: -30 }}
                texture={{ color: 'white' }}
              />
              <Box
                shadows={['back', 'bottom']}
                size={{ x: 8, y: 48, z: 32 }}
                pivotPosition={{ y: 'end' }}
                position={{ x: '-32px', y: '12px' }}
                texture={{ color: 'white' }}
              />
              <Box
                shadows={['back', 'bottom']}
                size={{ x: 48, y: 8, z: 32 }}
                pivotPosition={{ y: 'end' }}
                position={{ x: '16px', y: '-12px' }}
                texture={{ color: 'white' }}
              />
              <Box
                shadows={['bottom']}
                size={{ x: 48, y: 8, z: 32 }}
                pivotPosition={{ y: 'end' }}
                rotation={{ y: -10 }}
                position={{ x: '32px', y: '-22px' }}
                texture={{ color: 'white' }}
              />
            </Group>

            {/* Small Picture Frames */}
            <Group position={{ x: '-180px', y: '-54px', z: '154px' }}>
              <Box
                shadows={['left']}
                size={{ x: 4, y: 48, z: 48 }}
                position={{ y: '-64px' }}
                texture={{ color: 'white' }}
              />
              <Box
                shadows={['left']}
                size={{ x: 4, y: 48, z: 48 }}
                texture={{ color: 'white' }}
              />
              <Box
                shadows={['left']}
                size={{ x: 4, y: 48, z: 48 }}
                position={{ y: '64px' }}
                texture={{ color: 'white' }}
              />
            </Group>

            {/* Large Picture Frame */}
            <Box
              shadows={['back']}
              size={{ x: 72, y: 72, z: 4 }}
              position={{ x: '-108px', y: '-64px', z: '-180px' }}
              texture={{ color: 'white' }}
            />

            {/* Room Window */}
            <Group position={{ x: '-190px', y: '-48px', z: '8px' }}>
              <Box
                reversed
                culled={['front', 'left']}
                position={{ x: '-8px' }}
                size={{ x: 6, y: 112, z: 112 + 64 }}
                texture={{ color: 'white' }}
              />
              <Box
                reversed
                culled={['front']}
                size={{ x: 12, y: 128, z: 128 + 64 }}
                texture={{ color: 'white' }}
                textureLeft={{
                  clipPath: `polygon(0% 0%,0% 100%,8px 100%,8px 8px,calc(100% - 8px ) 8px,calc(100% - 8px ) calc(100% - 8px ),8px calc(100% - 8px ),8px 100%,100% 100%,100% 0%)`
                }}
              />
            </Group>

            {/* Room Cutout */}
            <Box
              reversed
              culled={['top', 'right', 'front']}
              position={{ x: '8px', y: '-8px', z: '8px' }}
              size={{ x: 256 + 128, y: 256 + 64, z: 256 + 128 }}
              texture={{ color: 'white' }}
              textureLeft={{
                clipPath: `polygon(0% 0%,0% 100%,96px 100%,96px 56px,calc(100% - 96px ) 56px,calc(100% - 96px ) 184px,64px 184px,64px 100%,100% 100%,100% 0%)`
              }}
            />

            {/* Room Outter */}
            <Box
              culled={['back', 'left', 'bottom']}
              size={{ x: 256 + 128 + 16, y: 256 + 64 + 16, z: 256 + 128 + 16 }}
              texture={{
                color: 'white'
              }}
              textureTop={{
                clipPath: `polygon(100% 0%, 100% 16px, 16px 16px, 16px 100%, 0% 100%, 0% 0%)`
              }}
              textureFront={{
                clipPath: `polygon(0 0, 16px 0, 16px calc(100% - 16px), 100% calc(100% - 16px), 100% 100%, 0 100%)`
              }}
              textureRight={{
                clipPath: `polygon(calc(100% - 16px) 0%, 100% 0%, 100% 100%, 0% 100%, 0% calc(100% - 16px), calc(100% - 16px) calc(100% - 16px))`
              }}
            />
          </Group>
        </Group>
      </Scene>
    </>
  );
}

export default Example2;
