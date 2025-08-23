"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface SocialLink {
    name: string
    url: string
    icon?: string
}

interface SocialRowProps {
    links: SocialLink[]
}

export function SocialRow({ links }: SocialRowProps) {
    return (
        <div className="flex flex-wrap justify-center gap-4">
            {links.map((link, index) => (
                <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    asChild
                    className="min-w-[200px]"
                >
                    <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                    >
                        {link.icon && <span className="text-lg">{link.icon}</span>}
                        {link.name}
                        <ExternalLink className="h-4 w-4" />
                    </a>
                </Button>
            ))}
        </div>
    )
}
