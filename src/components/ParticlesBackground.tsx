import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";
import { useTheme } from "@/hooks/useTheme";
import { useIsMobile } from "@/hooks/useIsMobile";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);
  const { theme } = useTheme();
  const isMobile = useIsMobile();

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: false,
      background: { color: { value: "transparent" } },
      fpsLimit: isMobile ? 30 : 60,
      particles: {
        color: { value: theme === "light" ? "hsl(175, 50%, 30%)" : "hsl(175, 45%, 42%)" },
        links: {
          color: theme === "light" ? "hsl(175, 50%, 30%)" : "hsl(175, 45%, 42%)",
          distance: 150,
          enable: true,
          opacity: isMobile ? 0.12 : theme === "light" ? 0.25 : 0.15,
          width: 1,
        },
        move: {
          enable: true,
          speed: isMobile ? 0.4 : 0.6,
          direction: "none" as const,
          outModes: { default: "bounce" as const },
        },
        number: {
          density: { enable: true },
          value: isMobile ? 35 : theme === "light" ? 70 : 50,
        },
        opacity: { value: theme === "light" ? 0.4 : 0.3 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: theme === "light" ? 4 : 3 } },
      },
      detectRetina: !isMobile,
    }),
    [theme, isMobile]
  );

  if (!init) return null;

  return <Particles id="tsparticles" key={`${theme}-${isMobile}`} options={options} className="absolute inset-0 z-0" />;
};

export default ParticlesBackground;
