"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "utils/motions";
import { SOCIAL_MEDIA } from "../constants";
import React from "react";

export function ConnectMedia() {
	const [language, setLanguage] = React.useState("English");

	return (
		<LazyMotion features={domAnimation}>
			<m.nav role="menu" initial={initial} animate={animate} exit={exit} transition={transition}>
				<ul className="flex items-center gap-5">
					{SOCIAL_MEDIA.map((item) => (
						<li key={item.id}>
							<a
								href={item.url}
								target="_blank"
								aria-label={item.title}
								title={item.title}
								className="text-2xl"
							>
								{item.icon}
							</a>
						</li>
					))}
					<li>
						<select value={language} onChange={(e) => setLanguage(e.target.value)}>
							<option value="English">English</option>
							<option value="Spanish">Spanish</option>
							<option value="French">French</option>
							{/* Add as many languages as you want */}
						</select>
					</li>
				</ul>
			</m.nav>
		</LazyMotion>
	);
}
