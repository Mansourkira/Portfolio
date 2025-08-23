"use client"

import { Button } from "@/components/ui/button"
import { Download, FileText } from "lucide-react"

interface ResumeDownloadProps {
    title: string
    description: string
    button: string
}

export function ResumeDownload({ title, description, button }: ResumeDownloadProps) {
    const handleDownload = () => {
        // You can replace this URL with your actual resume PDF
        const resumeUrl = "/resume.pdf"

        // Create a temporary link element
        const link = document.createElement("a")
        link.href = resumeUrl
        link.download = "Ben-Mansour-Mansour-Resume.pdf"
        link.target = "_blank"

        // Append to body, click, and remove
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div className="text-center space-y-4 p-8 bg-muted/30 rounded-2xl border-2 border-dashed border-muted-foreground/20">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <FileText className="w-8 h-8 text-primary" />
            </div>
            <div className="space-y-2">
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-muted-foreground max-w-md mx-auto">{description}</p>
            </div>
            <Button
                onClick={handleDownload}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
                <Download className="w-4 h-4 mr-2" />
                {button}
            </Button>
        </div>
    )
}
