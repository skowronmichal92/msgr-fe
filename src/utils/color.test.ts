import { hexToRgba } from './color';

describe('getHexToRgbaString', () => {
  it('should return rgba(63,81,181,0.75) from hex #3f51b5 and alpha 0.75', () => {
    const rgba = hexToRgba('#3f51b5', 0.75);
    expect(rgba).toBe('rgba(63,81,181,0.75)');
  });

  it('should return rgba(245,0,87,1) from hex #f50057', () => {
    const rgba = hexToRgba('#f50057');
    expect(rgba).toBe('rgba(245,0,87,1)');
  });

  it('should return rgba(170,255,238,.25) from short hex #afe and alpha 0.25', () => {
    const rgba = hexToRgba('#afe', 0.25);
    expect(rgba).toBe('rgba(170,255,238,0.25)');
  });

  it('should throw error from invalid hex "test"', () => {
    expect(() => {
      hexToRgba('test');
    }).toThrowError('Expected a valid hex string');
  });

  it('should return rgba(245,209,66,1) from hex #f5d142 and alpha 3.14', () => {
    const rgba = hexToRgba('#f5d142', 3.14);
    expect(rgba).toBe('rgba(245,209,66,1)');
  });

  it('should return rgba(245,209,66,0) from hex #f5d142 and alpha -1', () => {
    const rgba = hexToRgba('#f5d142', -1);
    expect(rgba).toBe('rgba(245,209,66,0)');
  });
});
