export const themes = {
  dark: {
    primaryBg: '#0a0e27',
    secondaryBg: '#151b3d',
    accent: '#00d9ff',
    secondaryAccent: '#7c3aed',
    textPrimary: '#f0f4ff',
    textSecondary: '#a0aec0',
    border: '#2d3561',
  },
  light: {
    primaryBg: '#f8fafc',
    secondaryBg: '#f1f5f9',
    accent: '#0066cc',
    secondaryAccent: '#6d28d9',
    textPrimary: '#1e293b',
    textSecondary: '#64748b',
    border: '#cbd5e1',
  },
} as const;

export type ThemeMode = 'dark' | 'light';
