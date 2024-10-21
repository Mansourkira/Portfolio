"use client";

import { AboutSection, ProjectsSection, TechnologiesSection, WelcomeSection } from "app/sections";

export default function Page() {
	return (
		<div className="container-md">
			<WelcomeSection />
			<AboutSection />
			<ProjectsSection />
			<TechnologiesSection />
		</div>
	);
}
