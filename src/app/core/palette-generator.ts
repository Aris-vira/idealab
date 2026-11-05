import { Palette, PaletteScheme } from './models';

interface SchemeLayout {
  hues: number[];
  saturation: number[];
  lightness: number[];
}

const SCHEME_LAYOUTS: Record<PaletteScheme, SchemeLayout> = {
  analogous: { hues: [-40, -20, 0, 20, 40], saturation: [65, 70, 75, 70, 60], lightness: [30, 45, 60, 75, 88] },
  complementary: { hues: [0, 0, 0, 180, 180], saturation: [55, 70, 80, 70, 60], lightness: [24, 42, 62, 58, 88] },
  triadic: { hues: [0, 120, 240, 0, 120], saturation: [60, 70, 75, 65, 50], lightness: [30, 50, 70, 45, 85] },
  split: { hues: [0, 150, 210, 0, 210], saturation: [65, 70, 70, 50, 60], lightness: [28, 50, 68, 82, 40] },
  monochromatic: { hues: [0, 0, 0, 0, 0], saturation: [40, 55, 70, 85, 30], lightness: [18, 35, 55, 75, 92] },
};

function jitter(value: number, amount: number): number {
  return value + (Math.random() * 2 - 1) * amount;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function hslToHex(hue: number, saturation: number, lightness: number): string {
  const s = clamp(saturation, 0, 100) / 100;
  const l = clamp(lightness, 0, 100) / 100;
  const h = ((hue % 360) + 360) % 360;
  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const segment = h / 60;
  const x = chroma * (1 - Math.abs((segment % 2) - 1));
  const m = l - chroma / 2;

  let rgb: [number, number, number];
  if (segment < 1) rgb = [chroma, x, 0];
  else if (segment < 2) rgb = [x, chroma, 0];
  else if (segment < 3) rgb = [0, chroma, x];
  else if (segment < 4) rgb = [0, x, chroma];
  else if (segment < 5) rgb = [x, 0, chroma];
  else rgb = [chroma, 0, x];

  const toHex = (channel: number) => Math.round((channel + m) * 255).toString(16).padStart(2, '0');
  return `#${rgb.map(toHex).join('')}`.toUpperCase();
}

export function generatePalette(scheme: PaletteScheme): Palette {
  const layout = SCHEME_LAYOUTS[scheme];
  const baseHue = Math.random() * 360;

  const colors = layout.hues.map((offset, index) =>
    hslToHex(
      baseHue + offset + (Math.random() * 2 - 1) * 6,
      jitter(layout.saturation[index], 4),
      jitter(layout.lightness[index], 4),
    ),
  );

  return { scheme, colors };
}

export function readableTextColor(hex: string): string {
  const value = hex.replace('#', '');
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? '#1A1915' : '#FFFFFF';
}
