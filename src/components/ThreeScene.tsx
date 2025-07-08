import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    
    mountRef.current.appendChild(renderer.domElement);

    // Create floating geometric shapes
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.OctahedronGeometry(0.8),
      new THREE.TetrahedronGeometry(0.9),
      new THREE.IcosahedronGeometry(0.7),
    ];

    const materials = [
      new THREE.MeshBasicMaterial({ 
        color: 0x00ffff, 
        wireframe: true,
        transparent: true,
        opacity: 0.6
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x9945ff, 
        wireframe: true,
        transparent: true,
        opacity: 0.4
      }),
      new THREE.MeshBasicMaterial({ 
        color: 0x0099ff, 
        wireframe: true,
        transparent: true,
        opacity: 0.5
      }),
    ];

    const meshes: THREE.Mesh[] = [];

    // Create multiple floating objects
    for (let i = 0; i < 20; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = materials[Math.floor(Math.random() * materials.length)];
      const mesh = new THREE.Mesh(geometry, material);

      // Random positioning
      mesh.position.x = (Math.random() - 0.5) * 50;
      mesh.position.y = (Math.random() - 0.5) * 30;
      mesh.position.z = (Math.random() - 0.5) * 30;

      // Random rotation speed
      mesh.userData = {
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02,
        },
        floatSpeed: Math.random() * 0.02 + 0.01,
        floatOffset: Math.random() * Math.PI * 2,
      };

      meshes.push(mesh);
      scene.add(mesh);
    }

    // Add particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1000;
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 100;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00ffff,
      size: 0.5,
      transparent: true,
      opacity: 0.3,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Position camera
    camera.position.z = 20;

    // Animation loop
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);

      // Rotate and float meshes
      meshes.forEach((mesh) => {
        mesh.rotation.x += mesh.userData.rotationSpeed.x;
        mesh.rotation.y += mesh.userData.rotationSpeed.y;
        mesh.rotation.z += mesh.userData.rotationSpeed.z;

        // Floating motion
        mesh.position.y += Math.sin(Date.now() * mesh.userData.floatSpeed + mesh.userData.floatOffset) * 0.01;
      });

      // Slowly rotate particles
      particles.rotation.y += 0.001;

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose of geometries and materials
      geometries.forEach(geo => geo.dispose());
      materials.forEach(mat => mat.dispose());
      particleGeometry.dispose();
      particleMaterial.dispose();
      
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 -z-10 opacity-30"
      style={{ pointerEvents: 'none' }}
    />
  );
};