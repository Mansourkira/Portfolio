"use client"

import { useState, useEffect } from "react"

export function useLocale() {
    const [locale, setLocale] = useState("en")

    useEffect(() => {
        // Get locale from localStorage or default to "en"
        const savedLocale = localStorage.getItem("locale")
        if (savedLocale) {
            setLocale(savedLocale)
        }
    }, [])

    const switchLocale = (newLocale: string) => {
        setLocale(newLocale)
        localStorage.setItem("locale", newLocale)
    }

    return { locale, switchLocale }
}
