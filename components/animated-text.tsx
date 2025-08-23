"use client"

import { motion } from "framer-motion"
import { useReducedMotion } from "framer-motion"

interface AnimatedTextProps {
    children: React.ReactNode
    className?: string
    delay?: number
}

export function AnimatedText({ children, className, delay = 0 }: AnimatedTextProps) {
    const shouldReduceMotion = useReducedMotion()

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: delay,
            }}
        >
            {children}
        </motion.div>
    )
}
