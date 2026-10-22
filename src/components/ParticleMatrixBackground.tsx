import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  alpha: number;
  color: string;
}

interface CodeToken {
  x: number;
  y: number;
  vx: number;
  vy: number;
  text: string;
  alpha: number;
  size: number;
}

const CODE_WORDS = [
  'ISO/IEC 25010:2023',
  'ISO/IEC 25019:2023',
  'ISO/IEC/IEEE 12207:2026',
  'ISO 9001:2026',
  'CMMI V3.0',
  'IEEE 730-2026',
  'ISO/IEC 27001:2022',
  'NIST SSDF v1.1',
  'OWASP ASVS 5.0.0',
  'ISO/IEC 42001:2023',
  'ISO/IEC 5338:2023',
  'ISO/IEC 25059:2023',
  'ISO/IEC/IEEE 29119',
  'ISO/IEC 29110',
  'ISO/IEC 5055:2021',
  'WCAG 2.2',
  'IEC 62304 / ISO 26262',
  'Security vs Safety'
];

export const ParticleMatrixBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initElements();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const particles: Particle[] = [];
    const tokens: CodeToken[] = [];

    const colors = ['#38bdf8', '#818cf8', '#34d399', '#c084fc', '#60a5fa'];

    const initElements = () => {
      particles.length = 0;
      tokens.length = 0;

      // Adjust particle count for screen size
      const count = Math.min(Math.floor((width * height) / 14000), 75);

      for (let i = 0; i < count; i++) {
        const radius = Math.random() * 2 + 1;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius,
          baseRadius: radius,
          alpha: Math.random() * 0.5 + 0.2,
          color: colors[Math.floor(Math.random() * colors.length)]
        });
      }

      // Add floating subtle code tokens
      const tokenCount = Math.min(Math.floor(width / 130), 12);
      for (let i = 0; i < tokenCount; i++) {
        tokens.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          text: CODE_WORDS[Math.floor(Math.random() * CODE_WORDS.length)],
          alpha: Math.random() * 0.2 + 0.12,
          size: Math.floor(Math.random() * 3) + 10 // 10-12px
        });
      }
    };

    initElements();

    let lastTime = performance.now();

    const animate = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // Delta time check to keep motion gentle
      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      ctx.clearRect(0, 0, width, height);

      // Mouse interactive aura
      if (mouse.x > 0 && mouse.y > 0) {
        const aura = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius
        );
        aura.addColorStop(0, 'rgba(56, 189, 248, 0.08)');
        aura.addColorStop(0.5, 'rgba(129, 140, 248, 0.03)');
        aura.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = aura;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render & update code tokens
      ctx.font = '11px "JetBrains Mono", monospace';
      for (let i = 0; i < tokens.length; i++) {
        const t = tokens[i];
        t.x += t.vx * 60 * delta;
        t.y += t.vy * 60 * delta;

        if (t.x < -100) t.x = width + 50;
        if (t.x > width + 100) t.x = -50;
        if (t.y < -50) t.y = height + 50;
        if (t.y > height + 50) t.y = -50;

        // Mouse reaction on code tokens
        const dx = mouse.x - t.x;
        const dy = mouse.y - t.y;
        const dist = Math.hypot(dx, dy);
        let extraAlpha = 0;
        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius);
          t.x -= (dx / dist) * force * 1.5;
          t.y -= (dy / dist) * force * 1.5;
          extraAlpha = force * 0.35;
        }

        ctx.fillStyle = `rgba(148, 163, 184, ${Math.min(t.alpha + extraAlpha, 0.7)})`;
        ctx.fillText(t.text, t.x, t.y);
      }

      // Render & connect particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx * 60 * delta;
        p.y += p.vy * 60 * delta;

        // Wrap around edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse interaction: soft repel + highlight
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);

        let currentRadius = p.baseRadius;
        let currentAlpha = p.alpha;

        if (dist < mouse.radius) {
          const force = (1 - dist / mouse.radius);
          // Push away slightly
          p.x -= (dx / dist) * force * 2.2;
          p.y -= (dy / dist) * force * 2.2;
          currentRadius = p.baseRadius + force * 2;
          currentAlpha = Math.min(p.alpha + force * 0.6, 0.9);
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = currentAlpha;
        ctx.fill();
        ctx.globalAlpha = 1;

        // Connect with nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distBetween = Math.hypot(p.x - p2.x, p.y - p2.y);
          const maxDist = 110;

          if (distBetween < maxDist) {
            const lineAlpha = (1 - distBetween / maxDist) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
