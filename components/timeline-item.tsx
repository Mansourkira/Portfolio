"use client"



interface TimelineItemProps {
    year: string
    name: string
    role: string
    type: string
    logo?: string
}

export function TimelineItem({ year, name, role, type, logo }: TimelineItemProps) {
    return (
        <div className="flex gap-6">
            <div className="flex flex-col items-center">
                <div className="w-3 h-3 bg-primary rounded-full"></div>
                <div className="w-0.5 h-full bg-border mt-2"></div>
            </div>
            <div className="flex-1 pb-6">
                <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                        {logo && (
                            <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                                <span className="text-xs font-medium">{logo}</span>
                            </div>
                        )}
                        <div>
                            <h3 className="font-semibold">{name}</h3>
                            <p className="text-sm text-muted-foreground">{role}</p>
                        </div>
                    </div>
                    <div className="text-right">
                        <span className="text-sm font-medium text-primary">{year}</span>
                        <p className="text-xs text-muted-foreground">{type}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
