import { Variants } from 'framer-motion'

export type Direction = 'up' | 'down' | 'none'

export const slideVerticalVariants: Variants = {
  initial: (dir: Direction) => ({
    y: dir === 'down' ? '-100vh' : dir === 'up' ? '100vh' : '0%',
    opacity: 0,
    scale: 0.98,
    position: 'absolute',
    width: '100%',
  }),
  animate: {
    y: '0%',
    opacity: 1,
    scale: 1,
    position: 'relative',
    width: '100%',
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: (dir: Direction) => ({
    y: dir === 'down' ? '100vh' : dir === 'up' ? '-100vh' : '0%',
    opacity: 0,
    scale: 0.98,
    position: 'absolute',
    width: '100%',
    transition: {
      duration: 0.35,
      ease: [0.4, 0, 0.2, 1],
    },
  }),
}
