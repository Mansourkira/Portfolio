"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

interface TopBarProps {
    messages: {
        locale: {
            current: string
            switch: string
        }
    }
}

export function TopBar({ messages }: TopBarProps) {
    return (
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container max-w-5xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Globe className="h-5 w-5" />
                        <span className="font-semibold">Portfolio</span>
                    </div>
                    <Button variant="outline" size="sm">
                        <Globe className="h-4 w-4 mr-2" />
                        {messages.locale.current}
                    </Button>
                </div>
            </div>
        </header>
    )
}
