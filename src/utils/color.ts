import hexRgb from 'hex-rgb';

export const hexToRgba = (color: string, alpha: number = 1): string => {
  const [r, g, b] = hexRgb(color, {
    format: 'array',
  });
  const a = alpha > 1 ? 1 : alpha < 0 ? 0 : alpha;
  return `rgba(${[r, g, b].join()},${a})`;
};
