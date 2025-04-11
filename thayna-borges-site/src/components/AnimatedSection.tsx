'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import { ElementType, ReactNode } from 'react'

interface AnimatedSectionProps extends HTMLMotionProps<'section'> {
  children: ReactNode
  as?: ElementType
  className?: string
}

export default function AnimatedSection({
  children,
  as: Tag = 'section',
  className = '',
  ...rest
}: AnimatedSectionProps) {
  const MotionTag = motion(Tag) as ElementType

  return (
    <MotionTag
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      className={className}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
