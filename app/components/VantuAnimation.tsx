import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export const VantuAnimation: React.FC = () => {
    const frame = useCurrentFrame();
    const { durationInFrames } = useVideoConfig();

    // A very subtle breathing animation (opacity and scale)
    const progress = frame / durationInFrames;

    // Opacity oscillates smoothly between 0.7 and 0.95
    const opacity = interpolate(
        Math.sin(progress * Math.PI * 2), // 1 full cycle over the duration
        [-1, 1],
        [0.6, 0.95]
    );

    // Scale slowly drifts up
    const scale = interpolate(
        progress,
        [0, 1],
        [1, 1.05]
    );

    return (
        <AbsoluteFill style={{ backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', overflow: 'hidden' }}>
            <h1
                style={{
                    fontSize: '25vw',
                    fontWeight: 900,
                    color: '#FF4D22',
                    margin: 0,
                    lineHeight: 1,
                    letterSpacing: '-0.05em',
                    opacity: opacity,
                    transform: `scale(${scale})`,
                    fontFamily: 'Montserrat, system-ui, -apple-system, sans-serif'
                }}
            >
                VANTU
            </h1>
        </AbsoluteFill>
    );
};
