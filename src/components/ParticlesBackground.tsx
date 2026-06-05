import { useEffect, useRef, useCallback } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useIsMobile } from "@/hooks/useIsMobile";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

const ParticlesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const isMobile = useIsMobile();

  const configRef = useRef({
    count: isMobile ? 25 : 40,
    linkDist: 150,
    speed: isMobile ? 0.3 : 0.45,
    // Store HSL components separately so we can build valid hsla() strings
    hue: 175,
    sat: theme === "light" ? 50 : 45,
    lum: theme === "light" ? 30 : 55, // Brighter in dark mode
    linkOpacity: isMobile ? 0.15 : theme === "light" ? 0.25 : 0.4, // Higher opacity in dark mode
    dotOpacity: theme === "light" ? 0.4 : 0.65, // Higher opacity in dark mode
    maxRadius: theme === "light" ? 4 : 3,
  });

  // Keep config in sync without re-running the main effect
  useEffect(() => {
    configRef.current = {
      count: isMobile ? 25 : 40,
      linkDist: 150,
      speed: isMobile ? 0.3 : 0.45,
      hue: 175,
      sat: theme === "light" ? 50 : 45,
      lum: theme === "light" ? 30 : 55,
      linkOpacity: isMobile ? 0.15 : theme === "light" ? 0.25 : 0.4,
      dotOpacity: theme === "light" ? 0.4 : 0.65,
      maxRadius: theme === "light" ? 4 : 3,
    };
  }, [theme, isMobile]);

  const createParticles = useCallback((w: number, h: number, count: number, speed: number, maxR: number): Particle[] => {
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: 1 + Math.random() * (maxR - 1),
      });
    }
    return particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId = 0;
    let particles: Particle[] = [];
    let lastFrame = 0;
    const targetInterval = 1000 / 30; // 30 fps cap

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      canvas.width = vw * dpr;
      canvas.height = vh * dpr;
      canvas.style.width = `${vw}px`;
      canvas.style.height = `${vh}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cfg = configRef.current;
      particles = createParticles(vw, vh, cfg.count, cfg.speed, cfg.maxRadius);
    };

    const draw = (now: number) => {
      animId = requestAnimationFrame(draw);

      // Skip frame if not enough time elapsed (30fps cap)
      if (now - lastFrame < targetInterval) return;
      lastFrame = now;

      // Pause when tab hidden
      if (document.hidden) return;

      const w = canvas.width / (window.devicePixelRatio || 1);
      const h = canvas.height / (window.devicePixelRatio || 1);
      const cfg = configRef.current;

      ctx.clearRect(0, 0, w, h);

      // Move particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        // Wrap around edges
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
      }

      // Draw connection lines
      const linkDist2 = cfg.linkDist * cfg.linkDist;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 < linkDist2) {
            const opacity = cfg.linkOpacity * (1 - Math.sqrt(dist2) / cfg.linkDist);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(${cfg.hue}, ${cfg.sat}%, ${cfg.lum}%, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw dots
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${cfg.hue}, ${cfg.sat}%, ${cfg.lum}%, ${cfg.dotOpacity})`;
        ctx.fill();
      }
    };

    resize();

    window.addEventListener("resize", resize);

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [createParticles, theme, isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};

export default ParticlesBackground;
