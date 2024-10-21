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

						<p className="my-3.5">{t("academic_skills")}</p>
						<p>{t("professional_career")}</p>
					</div>
				</div>

				<TimeLine />
			</section>
		</LazyMotion>
	);
}
