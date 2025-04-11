'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useRef, useEffect, useState, ReactNode, useMemo } from 'react'
import { routeOrder } from '@/utils/routeOrder'
import { slideVerticalVariants, Direction } from '@/utils/pageTransitionVariants'

interface Props {
  children: ReactNode
}

export default function PageTransitionWrapper({ children }: Props) {
  const pathname = usePathname()
  const previousPath = useRef(pathname)
  const [isFirstLoad, setIsFirstLoad] = useState(true)

  // Evita animação no primeiro load
  useEffect(() => {
    const timer = setTimeout(() => setIsFirstLoad(false), 40)
    return () => clearTimeout(timer)
  }, [])

  // Determina a direção da animação
  const direction = useMemo<Direction>(() => {
    const currentIndex = routeOrder.indexOf(previousPath.current)
    const nextIndex = routeOrder.indexOf(pathname)
    previousPath.current = pathname

    if (currentIndex === -1 || nextIndex === -1 || currentIndex === nextIndex) return 'none'
    return nextIndex > currentIndex ? 'down' : 'up'
  }, [pathname])

  if (isFirstLoad) return <>{children}</>

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <AnimatePresence mode="wait" custom={direction} initial={false}>
        <motion.div
          key={pathname}
          custom={direction}
          variants={slideVerticalVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
