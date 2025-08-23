"use client"

import { Card, CardContent } from "@/components/ui/card"

interface EducationItemProps {
    year: string
    name: string
    institution: string
    location: string
    logo: string
}

export function EducationItem({
    year,
    name,
    institution,
    location,
    logo
}: EducationItemProps) {
    return (
        <Card className="p-6 border-l-4 border-l-primary/20 hover:border-l-primary/40 transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-0">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-xl shrink-0">
                        {logo}
                    </div>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                            <div>
                                <h3 className="font-semibold text-lg mb-1">{name}</h3>
                                <p className="text-primary font-medium">{institution}</p>
                                <p className="text-sm text-muted-foreground">{location}</p>
                            </div>
                            <div className="text-right">
                                <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                                    {year}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
