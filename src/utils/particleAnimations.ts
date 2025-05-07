
export interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color?: string;
}

export const initializeParticles = (
  canvas: HTMLCanvasElement,
  count: number,
  particleSize: number = 2,
  particleColor?: string,
  speed: number = 0.3
): Particle[] => {
  const particles: Particle[] = [];
  
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * particleSize + particleSize / 2,
      speedX: (Math.random() - 0.5) * speed,
      speedY: (Math.random() - 0.5) * speed,
      opacity: Math.random() * 0.3 + 0.1, // More subtle opacity
      color: particleColor,
    });
  }
  
  return particles;
};

export const drawParticles = (
  ctx: CanvasRenderingContext2D,
  particles: Particle[]
): void => {
  particles.forEach((p) => {
    const color = p.color || "255, 255, 255";
    const rgb = color.startsWith('#') 
      ? hexToRgb(color)
      : color;
    
    ctx.fillStyle = `rgba(${rgb}, ${p.opacity})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    // Update position
    p.x += p.speedX;
    p.y += p.speedY;

    // Bounce off edges
    if (p.x < 0 || p.x > ctx.canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > ctx.canvas.height) p.speedY *= -1;
  });
};

// Helper function to convert hex to rgb
const hexToRgb = (hex: string): string => {
  const rgb = hex.replace(/^#/, '').match(/.{1,2}/g);
  if (!rgb) return "255, 255, 255";
  
  const r = parseInt(rgb[0], 16);
  const g = parseInt(rgb[1], 16);
  const b = parseInt(rgb[2], 16);
  
  return `${r}, ${g}, ${b}`;
};
