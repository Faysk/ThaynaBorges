import { theme } from './src/theme'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: theme.colors.primary,
        'primary-hover': theme.colors.primaryHover,
        accent: theme.colors.accent,
        bg: theme.colors.bg,
        'bg-dark': theme.colors.bgDark,
        text: theme.colors.text,
        'text-muted': theme.colors.textMuted,
        'text-heading': theme.colors.textHeading,
        border: theme.colors.border,
        focus: theme.colors.focus,
      },
    },
  },
  plugins: [],
}
