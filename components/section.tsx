"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useReducedMotion } from "framer-motion"

interface SectionProps {
    children: React.ReactNode
    className?: string
}

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut" as const,
        },
    },
}

export function Section({ children, className }: SectionProps) {
    const shouldReduceMotion = useReducedMotion()

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>
    }

    return (
        <motion.div className={className} variants={containerVariants} initial="hidden" animate="visible">
            {Array.isArray(children) ? (
                children.map((child, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        {child}
                    </motion.div>
                ))
            ) : (
                <motion.div variants={itemVariants}>{children}</motion.div>
            )}
        </motion.div>
    )
}
