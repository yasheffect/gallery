"use client";

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useVideoTexture } from '@react-three/drei';
import * as THREE from 'three';

const WebGLShader = {
  uniforms: {
    uTime: { value: 0 },
    uTexture: { value: null },
    uDistort: { value: 0 },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform float uTime;
    uniform sampler2D uTexture;
    uniform float uDistort;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;
      
      // Liquid distortion effect
      if (uDistort > 0.0) {
        float wave = sin(uv.y * 10.0 + uTime * 2.0) * 0.05 * uDistort;
        float wave2 = cos(uv.x * 8.0 + uTime * 1.5) * 0.05 * uDistort;
        uv.x += wave;
        uv.y += wave2;
      }
      
      vec4 tex = texture2D(uTexture, uv);
      gl_FragColor = tex;
    }
  `
};

const BackgroundMesh = ({ creativeMode }: { creativeMode: boolean }) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const texture = useVideoTexture('https://cdn.coverr.co/videos/coverr-waves-crashing-on-the-beach-2983/1080p.mp4'); // Placeholder video
  
  // Create shader material
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: WebGLShader.vertexShader,
      fragmentShader: WebGLShader.fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uTexture: { value: texture },
        uDistort: { value: 0 },
      },
    });
  }, [texture]);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      // Smoothly interpolate the distortion value
      const targetDistort = creativeMode ? 1.0 : 0.0;
      materialRef.current.uniforms.uDistort.value += (targetDistort - materialRef.current.uniforms.uDistort.value) * 0.05;
    }
  });

  return (
    <mesh scale={[16, 9, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <primitive object={material} ref={materialRef} attach="material" />
    </mesh>
  );
};

export const WebGLBackground = ({ creativeMode }: { creativeMode: boolean }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <BackgroundMesh creativeMode={creativeMode} />
      </Canvas>
    </div>
  );
};
