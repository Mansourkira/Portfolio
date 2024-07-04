import { ProjectItem } from "../../sections";

export function Projects({ projects }) {
	// Ensure projects is always an array
	const safeProjects = projects || [];
	console.log("safe projects are ", safeProjects);
	return (
		<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
			{safeProjects.map((project, index) => (
				<ProjectItem key={project.id} project={project} index={index} />
			))}
		</div>
	);
}
