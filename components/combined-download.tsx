"use client"

import { Button } from "@/components/ui/button"
import { Download, FileText, Briefcase } from "lucide-react"

interface CombinedDownloadProps {
    resumeTitle: string
    resumeDescription: string
    resumeButton: string
    skillsTitle: string
    skillsDescription: string
    skillsButton: string
    locale: string
}

export function CombinedDownload({
    resumeTitle,
    resumeDescription,
    resumeButton,
    skillsTitle,
    skillsDescription,
    skillsButton,
    locale
}: CombinedDownloadProps) {
    const handleResumeDownload = () => {
        const resumeUrl = locale === "fr"
            ? "/FR_Mansour_FullStackDeveloper.pdf"
            : "/EN_Mansour_FullStackDeveloper.pdf"

        const link = document.createElement("a")
        link.href = resumeUrl
        link.download = locale === "fr"
            ? "Mansour_Developpeur_FullStack_CV.pdf"
            : "Mansour_FullStack_Developer_Resume.pdf"
        link.target = "_blank"

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    const handleSkillsDownload = () => {
        const skillsUrl = locale === "fr"
            ? "/Skills_Portfolio_FR.pdf"
            : "/Skills_Portfolio_EN.pdf"

        const link = document.createElement("a")
        link.href = skillsUrl
        link.download = locale === "fr"
            ? "Mansour_Portfolio_Competences.pdf"
            : "Mansour_Skills_Portfolio.pdf"
        link.target = "_blank"

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <div className="text-center space-y-4 p-6 bg-muted/30 rounded-xl border-2 border-dashed border-muted-foreground/20 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <FileText className="w-6 h-6 text-primary" />
            </div>

            <div className="space-y-3">
                <h3 className="text-lg font-semibold">Download Documents</h3>
                <p className="text-sm text-muted-foreground">Get my complete professional documents</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Button
                    onClick={handleResumeDownload}
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform duration-200"
                >
                    <Download className="w-3 h-3 mr-2" />
                    {resumeButton}
                </Button>
                <Button
                    onClick={handleSkillsDownload}
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform duration-200"
                >
                    <Download className="w-3 h-3 mr-2" />
                    {skillsButton}
                </Button>
            </div>
        </div>
    )
}
