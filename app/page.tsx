"use client"

import { useEffect, useState } from "react"
import { TopBar } from "@/components/top-bar"
import { Section } from "@/components/section"
import { TimelineItem } from "@/components/timeline-item"
import { ExperienceItem } from "@/components/experience-item"
import { EducationItem } from "@/components/education-item"
import { SocialRow } from "@/components/social-row"
import { ResumeDownload } from "@/components/resume-download"
import { Separator } from "@/components/ui/separator"
import { AnimatedText } from "@/components/animated-text"
import { useLocale } from "@/components/hooks/use-locale"
import messages from "@/lib/messages.json"

export default function HomePage() {
  const { locale, switchLocale, isAnimating } = useLocale()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLocaleSwitch = () => {
    switchLocale(locale === "en" ? "fr" : "en")
  }

  if (!mounted) {
    return null
  }

  const t = messages[locale as keyof typeof messages]

  return (
    <div className="min-h-screen bg-background">
      <TopBar messages={t} onLocaleSwitch={handleLocaleSwitch} />

      <main className="container max-w-5xl mx-auto px-6 py-16 space-y-24">
        {/* About Section */}
        <Section className="space-y-8">
          <div className="grid md:grid-cols-[1fr_300px] gap-8 items-start">
            <div className="space-y-6">
              <AnimatedText delay={0.2} isAnimating={isAnimating}>
                <h1 className="text-2xl font-semibold">{t.about.title}</h1>
              </AnimatedText>
              <AnimatedText delay={0.4} isAnimating={isAnimating}>
                <p className="text-[17px] leading-relaxed tracking-tight text-muted-foreground">{t.about.body}</p>
              </AnimatedText>
            </div>
            <div className="space-y-6">
              <AnimatedText delay={0.6} isAnimating={isAnimating}>
                <div className="text-right space-y-2">
                  <p className="text-xs text-muted-foreground">{t.about.email}</p>
                </div>
              </AnimatedText>
              <AnimatedText delay={0.8} isAnimating={isAnimating}>
                <ResumeDownload
                  title={t.resume.title}
                  description={t.resume.description}
                  button={t.resume.button}
                  locale={locale}
                />
              </AnimatedText>
            </div>
          </div>
        </Section>

        <Separator />

        {/* Experience Section */}
        <Section className="space-y-8">
          <AnimatedText delay={0.2} isAnimating={isAnimating}>
            <h2 className="text-2xl font-semibold">{t.experience.title}</h2>
          </AnimatedText>
          <div className="space-y-6">
            {t.experience.items.map((experience, index) => (
              <ExperienceItem
                key={index}
                year={experience.year}
                name={experience.name}
                company={experience.company}
                role={experience.role}
                type={experience.type}
                location={experience.location}
                logo={experience.logo}
                description={experience.description}
              />
            ))}
          </div>
        </Section>

        <Separator />

        {/* Projects Section */}
        <Section className="space-y-8">
          <AnimatedText delay={0.2} isAnimating={isAnimating}>
            <h2 className="text-2xl font-semibold">{t.projects.title}</h2>
          </AnimatedText>
          <div className="space-y-8">
            {t.projects.items.map((project, index: number) => (
              <TimelineItem
                key={index}
                year={project.year}
                name={project.name}
                role={project.role}
                type={project.type}
                logo={project.logo}
                description={project.description}
                url={project.url}
              />
            ))}
          </div>
        </Section>

        <Separator />

        {/* Education Section */}
        <Section className="space-y-8">
          <AnimatedText delay={0.2} isAnimating={isAnimating}>
            <h2 className="text-2xl font-semibold">{t.education.title}</h2>
          </AnimatedText>
          <div className="space-y-6">
            {t.education.items.map((education, index) => (
              <EducationItem
                key={index}
                year={education.year}
                name={education.name}
                institution={education.institution}
                location={education.location}
                logo={education.logo}
              />
            ))}
          </div>
        </Section>

        <Separator />

        {/* Contact Section */}
        <Section className="space-y-8 text-center">
          <AnimatedText delay={0.2} isAnimating={isAnimating}>
            <h2 className="text-2xl font-semibold">{t.contact.title}</h2>
          </AnimatedText>
          <AnimatedText delay={0.4} isAnimating={isAnimating}>
            <SocialRow links={t.contact.links} />
          </AnimatedText>
        </Section>
      </main>
    </div>
  )
}
