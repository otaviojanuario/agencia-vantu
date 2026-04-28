"use client";

import { useEffect, useRef } from "react";

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    // Posições do Mouse
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        // Suporte a Telas Retina
        const dpr = window.devicePixelRatio || 1;
        canvas.width = parent.clientWidth * dpr;
        canvas.height = parent.clientHeight * dpr;
        ctx.scale(dpr, dpr);
        canvas.style.width = `${parent.clientWidth}px`;
        canvas.style.height = `${parent.clientHeight}px`;
        
        // Setup inicial das posições do mouse ao meio
        if (targetX === 0 && targetY === 0) {
           mouseX = parent.clientWidth / 2;
           mouseY = parent.clientHeight / 2;
           targetX = mouseX;
           targetY = mouseY;
        }
      }
    };

    window.addEventListener("resize", resize);
    resize();

    // Criação das Partículas (Distribuição numa Esfera 3D)
    // Reduzido para 350 para garantir performance fluida (60 FPS) em todas as telas
    const particleCount = 350;
    const particles: {phi: number, theta: number, radius: number, size: number, color: string}[] = [];

    for (let i = 0; i < particleCount; i++) {
       const phi = Math.acos((Math.random() * 2) - 1);
       const theta = Math.random() * Math.PI * 2;
       const radius = 250 + Math.random() * 250; 
       
       const isPurple = Math.random() > 0.35; 
       const alpha = (Math.random() * 0.4) + 0.3; // Aumentado alpha base para compensar falta de blur
       
       particles.push({
         phi,
         theta,
         radius,
         size: Math.random() * 1.5 + 0.8, // Leve aumento de tamanho
         color: isPurple ? `rgba(53, 27, 172, ${alpha})` : `rgba(239, 71, 26, ${alpha})`,
       });
    }

    let rotationX = 0;
    let rotationY = 0;

    const render = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const width = parent.clientWidth;
      const height = parent.clientHeight;

      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      rotationY += 0.001 + (mouseX - width / 2) * 0.00001; 
      rotationX += 0.0005 + (mouseY - height / 2) * 0.00001; 

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2 + (mouseX - width / 2) * 0.03;
      const cy = height / 2 + (mouseY - height / 2) * 0.03;

      particles.forEach((p) => {
         let x = p.radius * Math.sin(p.phi) * Math.cos(p.theta);
         let y = p.radius * Math.cos(p.phi);
         let z = p.radius * Math.sin(p.phi) * Math.sin(p.theta);

         const tempY = y * Math.cos(rotationX) - z * Math.sin(rotationX);
         let tempZ = y * Math.sin(rotationX) + z * Math.cos(rotationX);
         y = tempY;
         z = tempZ;

         const tempX = x * Math.cos(rotationY) + z * Math.sin(rotationY);
         tempZ = -x * Math.sin(rotationY) + z * Math.cos(rotationY);
         x = tempX;
         z = tempZ;

         const perspective = 700;
         const scale = perspective / (perspective + z); 

         if (scale < 0) return; 

         const screenX = cx + x * scale;
         const screenY = cy + y * scale;

         const currentSize = p.size * scale;
         
         ctx.globalAlpha = Math.min(1, Math.max(0, scale - 0.2)); 

         // Partícula sólida rápida de renderizar (Sem shadowBlur para otimização extema)
         ctx.beginPath();
         ctx.arc(screenX, screenY, Math.max(0.1, currentSize), 0, 2 * Math.PI);
         ctx.fillStyle = p.color;
         ctx.fill();
      });

      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-auto w-full h-full"
    />
  );
}
