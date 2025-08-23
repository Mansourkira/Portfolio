"use client"

import { useState, useEffect } from "react"

export function useLocale() {
    const [locale, setLocale] = useState("en")
    const [isAnimating, setIsAnimating] = useState(false)

    useEffect(() => {
        // Get locale from localStorage or default to "en"
        const savedLocale = localStorage.getItem("locale")
        if (savedLocale) {
            setLocale(savedLocale)
        }
    }, [])

    const switchLocale = async (newLocale: string) => {
        if (isAnimating || newLocale === locale) return

        setIsAnimating(true)

        // Wait for fade out animation
        await new Promise(resolve => setTimeout(resolve, 150))

        // Update locale
        setLocale(newLocale)
        localStorage.setItem("locale", newLocale)

        // Wait for fade in animation
        await new Promise(resolve => setTimeout(resolve, 150))

        setIsAnimating(false)
    }

    return { locale, switchLocale, isAnimating }
}
