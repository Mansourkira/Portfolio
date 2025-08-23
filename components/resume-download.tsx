"use client"

import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"

interface ResumeDownloadProps {
    title: string
    description: string
    button: string
    locale: string
}

export function ResumeDownload({ title, description, button, locale }: ResumeDownloadProps) {
    const handleDownload = () => {
        // Determine which PDF to download based on current locale
        const resumeUrl = locale === "fr"
            ? "/FR_Mansour_FullStackDeveloper.pdf"
            : "/EN_Mansour_FullStackDeveloper.pdf"

        // Create a temporary link element
        const link = document.createElement("a")
        link.href = resumeUrl
        link.download = locale === "fr"
            ? "Mansour_Developpeur_FullStack_CV.pdf"
            : "Mansour_FullStack_Developer_Resume.pdf"
        link.target = "_blank"

        // Append to body, click, and remove
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div className="text-center space-y-3 p-6 bg-muted/30 rounded-xl border-2 border-dashed border-muted-foreground/20 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <FileText className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-2">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">{description}</p>
            </div>
            <Button
                onClick={handleDownload}
                size="default"
                className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform duration-200"
            >
                <Download className="w-4 h-4 mr-2" />
                {button}
            </Button>
        </div>
    )
}
