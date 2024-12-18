import axios from "axios";
import { HeadingDivider, Loader } from "components";
import { domAnimation, LazyMotion, useInView } from "framer-motion";
import { Suspense, useEffect, useRef, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Error from "../../error";
import { Projects } from "../../projects/components/Projects";

const fetchProjects = async () => {
	try {
		const response = await axios.get("/projects.json");
		return response.data;
	} catch (error) {
		console.error("Error fetching projects:", error);
		return [];
	}
};

export function ProjectsSection() {
	const btnRef = useRef(null);
	const isBtnInView = useInView(btnRef, { once: true });

	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getProjects = async () => {
			try {
				const data = await fetchProjects();
				setProjects(data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		getProjects();
	}, []);
	return (
		<LazyMotion features={domAnimation}>
			<section id="projects" className="section">
				<HeadingDivider title="Latest projects" />
				<div className="h-10 md:h-14" />

				<div className="flex flex-col items-center gap-8 md:gap-14">
					<Suspense
						fallback={
							<div className="flex-center">
								<Loader />
							</div>
						}
					>
						<ErrorBoundary FallbackComponent={Error}>
							<Projects projects={projects} />
						</ErrorBoundary>
					</Suspense>
					{/* 
					<Link
						href={SITE_ROUTES.projects}
						tabIndex={-1}
						aria-label="Go to projects page"
						ref={btnRef}
						className="btn"
						style={{
							transform: btnRef ? "none" : "translateX(-50px)",
							opacity: isBtnInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<button aria-label="See more projects">More projects</button>
					</Link> */}
				</div>
			</section>
		</LazyMotion>
	);
}
