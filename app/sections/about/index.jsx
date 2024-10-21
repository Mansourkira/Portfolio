"use client";

import { HeadingDivider } from "components";
import { LazyMotion, domAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { TimeLine } from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	const { t } = useTranslation();

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me" />
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>{t("intro")}</p>
						<p>{t("about")}</p>

						<p className="my-3.5">
							During my academic years, I honed my skills in various technologies, including
							JavaScript, Next.js, Node.js, TypeScript, GraphQL, React.js, Angular, and Spring Boot.
						</p>
						<p>
							In my professional career, I have contributed to the development and maintenance of
							web applications using Next.js, Node.js, TypeScript, GraphQL, and other technologies.
							I have experience collaborating with cross-functional teams and ensuring the
							scalability and performance of software solutions.
						</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
