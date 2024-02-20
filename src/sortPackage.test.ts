import { sortPackage } from './sortPackage'; // Adjust the import path based on your file structure

describe('sortPackage Function', () => {

  test('should classify a standard package correctly', () => {
    expect(sortPackage(30, 30, 30, 5)).toBe('STANDARD');
  });

  test('should classify a bulky package correctly', () => {
    expect(sortPackage(150, 30, 30, 10)).toBe('SPECIAL');
    expect(sortPackage(100, 100, 100, 5)).toBe('SPECIAL');
  });

  test('should classify a heavy package correctly', () => {
    expect(sortPackage(30, 30, 30, 20)).toBe('SPECIAL');
  });

  test('should classify a heavy and bulky package as rejected', () => {
    expect(sortPackage(150, 150, 150, 20)).toBe('REJECTED');
  });

  test('should throw error for negative values', () => {
    expect(() => sortPackage(-10, 30, 30, 10)).toThrow('Invalid input. All parameters must be valid positive numbers.');
  });

  test('should classify a package with zero dimensions as STANDARD', () => {
    expect(sortPackage(0, 30, 30, 10)).toBe('STANDARD');
  });

  test('should handle non-integer values correctly', () => {
    expect(sortPackage(30.5, 30.5, 30.5, 19.5)).toBe('STANDARD');
  });

  test('should throw error for non-numeric inputs', () => {
    // @ts-ignore to test runtime errors
    expect(() => sortPackage('100', 100, 100, 20)).toThrow('Invalid input. All parameters must be valid positive numbers.');
  });

  test('should throw error for infinite values', () => {
    expect(() => sortPackage(Infinity, 200, 150, 10)).toThrow('Invalid input. All parameters must be valid positive numbers.');
  });

});

