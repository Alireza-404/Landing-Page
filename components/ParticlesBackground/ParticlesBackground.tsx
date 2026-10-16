"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 115;

const vertexShader = `
  attribute float aSize;
  attribute float aAlpha;

  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vColor = color;
    vAlpha = aAlpha;

    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    float depth = max(1.0, -mvPosition.z);
    gl_PointSize = clamp(aSize * (35.0 / depth), 2.0, 15.0);
  }
`;

const fragmentShader = `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    vec2 uv = gl_PointCoord - 0.5;
    float d = length(uv);

    if (d > 0.5) discard;

    // Bright center, soft edge and subtle outer glow.
    float core = 1.0 - smoothstep(0.04, 0.20, d);
    float body = 1.0 - smoothstep(0.12, 0.43, d);
    float glow = exp(-d * 10.0) * 0.22;

    float alpha = (core * 0.8 + body * 0.42 + glow) * vAlpha;

    gl_FragColor = vec4(vColor, alpha);
  }
`;

function Particles() {
  const points = useRef<THREE.Points>(null);

  const geometry = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const alphas = new Float32Array(PARTICLE_COUNT);

    const palette = [
      new THREE.Color("#ffffff"),
      new THREE.Color("#e8f4ff"),
      new THREE.Color("#c9e4f5"),
      new THREE.Color("#53db78"),
    ].map((color) => color.convertSRGBToLinear());

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const i3 = i * 3;

      positions[i3] = (Math.random() - 0.5) * 25;
      positions[i3 + 1] = (Math.random() - 0.5) * 16;
      positions[i3 + 2] = (Math.random() - 0.5) * 12;

      // Mostly white and icy blue, with occasional green accents.
      const roll = Math.random();
      const colorIndex =
        roll < 0.07 ? 3 : roll < 0.35 ? 2 : roll < 0.62 ? 1 : 0;

      const color = palette[colorIndex];

      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      // Clearly visible particles, with a few larger focal points.
      const sizeRoll = Math.random();
      sizes[i] =
        sizeRoll < 0.15
          ? 5.5 + Math.random() * 2.5
          : sizeRoll < 0.5
            ? 3.5 + Math.random() * 2
            : 2.4 + Math.random() * 1.8;

      alphas[i] = 0.58 + Math.random() * 0.38;
    }

    const geo = new THREE.BufferGeometry();

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
    geo.setAttribute("aAlpha", new THREE.BufferAttribute(alphas, 1));

    return geo;
  }, []);

  useFrame((_, delta) => {
    if (!points.current) return;

    const dt = Math.min(delta, 0.05);

    points.current.rotation.y += dt * 0.009;
    points.current.rotation.x += dt * 0.002;
  });

  return (
    <points ref={points} geometry={geometry} frustumCulled>
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        vertexColors
        transparent
        depthWrite={false}
        uniforms={{}}
        toneMapped={false}
      />
    </points>
  );
}

export default function ParticlesBackground() {
  return (
    <Canvas
      className="pointer-events-none absolute inset-0 -z-10"
      camera={{ position: [0, 0, 14], fov: 65 }}
      dpr={[1, 1.25]}
      frameloop="always"
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "low-power",
      }}
    >
      <Particles />
    </Canvas>
  );
}
