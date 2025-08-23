"use client"

interface Language {
    name: string
    level: string
}

interface LanguagesSectionProps {
    title: string
    items: Language[]
}

export function LanguagesSection({ title, items }: LanguagesSectionProps) {
    return (
        <div className="space-y-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <div className="grid grid-cols-2 gap-4">
                {items.map((language, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <span className="font-medium">{language.name}</span>
                        <span className="text-sm text-primary bg-primary/10 px-2 py-1 rounded-full">
                            {language.level}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
