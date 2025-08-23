"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface AnimatedTextProps {
    children: React.ReactNode
    delay?: number
    isAnimating?: boolean
    className?: string
}

export function AnimatedText({ children, delay = 0, isAnimating = false, className = "" }: AnimatedTextProps) {
    const [key, setKey] = useState(0)

    useEffect(() => {
        if (isAnimating) {
            setKey(prev => prev + 1)
        }
    }, [isAnimating])

    return (
        <AnimatePresence mode="wait" key={key}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                    duration: 0.3,
                    delay: delay,
                    ease: "easeOut"
                }}
                className={className}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}
