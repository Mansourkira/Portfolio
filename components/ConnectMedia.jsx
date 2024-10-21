"use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { animate, exit, initial, transition } from "utils/motions";
import { SOCIAL_MEDIA } from "../constants";
import i18n from "../utils/i8n";

export function ConnectMedia() {
	const [currentLanguage, setCurrentLanguage] = useState("en");
	const [isOpenLanguage, setIsOpenLanguage] = useState(false);

	const router = useRouter();
	const languages = [
		{ code: "en", name: "English" },
		{ code: "fr", name: "Français" },
		{ code: "ar", name: "العربية" }
	];

	const handleLanguageChange = (languageCode) => {
		console.log("Changing language to:", languageCode);
		i18n.changeLanguage(languageCode).then(() => {
			console.log("Language changed to:", languageCode);
			setCurrentLanguage(languageCode);
		});
	};

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
					<li className="relative">
						<button onClick={() => setIsOpenLanguage(!isOpenLanguage)} className="text-sm">
							{languages.find((lang) => lang.code === currentLanguage)?.name}
						</button>
						{isOpenLanguage && (
							<ul className="absolute bg-white border rounded shadow-md mt-2 py-1">
								{languages.map((lang) => (
									<li
										key={lang.code}
										className={`flex items-center px-3 py-2 text-sm h-10 text-gray-700 hover:bg-gray-100 cursor-pointer ${
											lang.code === currentLanguage ? "bg-gray-100" : ""
										}`}
										onClick={(e) => {
											e.stopPropagation();
											console.log("Changing language to:", lang.code);
											handleLanguageChange(lang.code);
											setIsOpenLanguage(false);
										}}
									>
										<span className="mr-2">{lang.name}</span>
										{lang.code === currentLanguage && (
											<span className="ml-auto text-green-500">
												<svg
													width="16"
													height="16"
													fill="currentColor"
													className="bi bi-check"
													viewBox="0 0 16 16"
												>
													<path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-4 4.5a.75.75 0 0 1-1.08.02l-2-2.5a.75.75 0 1 1 1.14-.98l1.47 1.84 3.4-3.81z" />
												</svg>
											</span>
										)}
									</li>
								))}
							</ul>
						)}
					</li>
				</ul>
			</m.nav>
		</LazyMotion>
	);
}
