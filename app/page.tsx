"use client"

import { useEffect, useState } from "react"
import { TopBar } from "@/components/top-bar"
import { Section } from "@/components/section"
import { TimelineItem } from "@/components/timeline-item"
import { SocialRow } from "@/components/social-row"
import { Separator } from "@/components/ui/separator"
import { useLocale } from "@/components/hooks/use-locale"
import messages from "@/lib/messages.json"

export default function HomePage() {
  const { locale } = useLocale()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const t = messages[locale as keyof typeof messages]

  return (
    <div className="min-h-screen bg-background">
      <TopBar messages={t} />

      <main className="container max-w-5xl mx-auto px-6 py-16 space-y-24">
        {/* About Section */}
        <Section className="space-y-8">
          <div className="grid md:grid-cols-[1fr_300px] gap-8 items-start">
            <div className="space-y-6">
              <h1 className="text-2xl font-semibold">{t.about.title}</h1>
              <p className="text-[17px] leading-relaxed tracking-tight text-muted-foreground">{t.about.body}</p>
            </div>
            <div className="md:text-right">
              <p className="text-sm font-medium text-muted-foreground">{t.about.nameTag}</p>
            </div>
          </div>
        </Section>

        <Separator />

        {/* Projects Section */}
        <Section className="space-y-8">
          <h2 className="text-2xl font-semibold">{t.projects.title}</h2>
          <div className="space-y-8">
            {t.projects.items.map((project, index: number) => (
              <TimelineItem
                key={index}
                year={project.year}
                name={project.name}
                role={project.role}
                type={project.type}
                logo={project.logo}
              />
            ))}
          </div>
        </Section>

        <Separator />

        {/* Contact Section */}
        <Section className="space-y-8 text-center">
          <h2 className="text-2xl font-semibold">{t.contact.title}</h2>
          <SocialRow links={t.contact.links} />
        </Section>
      </main>
    </div>
  )
}
