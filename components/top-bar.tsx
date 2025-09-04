"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

interface TopBarProps {
    messages: {
        locale: {
            current: string
            switch: string
        }
    }
    onLocaleSwitch?: () => void
}

export function TopBar({ messages, onLocaleSwitch }: TopBarProps) {
    return (
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container max-w-5xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Globe className="h-5 w-5" />
                        <span className="font-semibold">MansourDev</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={onLocaleSwitch}
                        >
                            <Globe className="h-4 w-4 mr-2" />
                            {messages.locale.current}
                        </Button>
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}
