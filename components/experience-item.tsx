"use client"

import { Card, CardContent } from "@/components/ui/card"

interface ExperienceItemProps {
    year: string
    name: string
    company: string
    role: string
    type: string
    location: string
    logo: string
    description: string
}

export function ExperienceItem({
    year,
    name,
    company,
    role,
    type,
    location,
    logo,
    description
}: ExperienceItemProps) {
    return (
        <Card className="p-6 border-l-4 border-l-primary/20 hover:border-l-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer">
            <CardContent className="p-0">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-xl shrink-0">
                        {logo}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h3 className="font-semibold text-lg mb-1">{name}</h3>
                                <p className="text-primary font-medium">{company}</p>
                                <p className="text-sm text-muted-foreground">{role}</p>
                            </div>
                            <div className="text-right">
                                <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                                    {year}
                                </span>
                                <p className="text-xs text-muted-foreground mt-1">{type}</p>
                                <p className="text-xs text-muted-foreground">{location}</p>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
