#!/usr/bin/env tsx
/**
 * Accessibility contrast checker for design tokens
 * WCAG 2.1 AA requires:
 * - Normal text: 4.5:1
 * - Large text: 3:1
 * - UI components: 3:1
 */

const colors = {
  white: '#FFFFFF',
  black: '#111827',
  primary: '#2563EB',
  secondary: '#6B7280',
  accent: '#F59E0B',
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
};

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) throw new Error(`Invalid hex color: ${hex}`);
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
}

function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    c /= 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  const l1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const l2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return Number(((lighter + 0.05) / (darker + 0.05)).toFixed(2));
}

function checkContrast(fg: string, bg: string, name: string): void {
  const ratio = getContrastRatio(fg, bg);
  const passAA = ratio >= 4.5;
  const passAALarge = ratio >= 3;
  const status = passAA ? '✅' : passAALarge ? '⚠️' : '❌';
  console.log(`${status} ${name}: ${ratio}:1 (${passAA ? 'AA Pass' : passAALarge ? 'AA Large Only' : 'Fail'})`);
}

console.log('🎨 RanDee Marketplace - Color Contrast Checker\n');
console.log('WCAG 2.1 AA Requirements:\n- Normal text: ≥ 4.5:1\n- Large text: ≥ 3:1\n- UI components: ≥ 3:1\n');

console.log('Primary color combinations:');
checkContrast(colors.white, colors.primary, 'White on Primary');
checkContrast(colors.black, colors.primary, 'Black on Primary');

console.log('\nSecondary color combinations:');
checkContrast(colors.white, colors.secondary, 'White on Secondary');
checkContrast(colors.black, colors.secondary, 'Black on Secondary');

console.log('\nAccent color combinations:');
checkContrast(colors.white, colors.accent, 'White on Accent');
checkContrast(colors.black, colors.accent, 'Black on Accent');

console.log('\nStatus color combinations:');
checkContrast(colors.white, colors.success, 'White on Success');
checkContrast(colors.white, colors.warning, 'White on Warning');
checkContrast(colors.white, colors.danger, 'White on Danger');

console.log('\nText on background:');
checkContrast(colors.black, colors.white, 'Black on White');

console.log('\n✨ All critical contrasts should pass AA (≥ 4.5:1)');
