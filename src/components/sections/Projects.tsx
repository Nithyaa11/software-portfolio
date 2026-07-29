/*import { GitHub, ExternalLink } from "lucide-react";*/
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-16 md:py-20"
    >
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">
          Projects
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          A selection of projects that showcase my experience in backend
          development, full stack applications, and problem solving.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl border p-8 transition-all hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              {project.featured && (
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                  Featured
                </span>
              )}
            </div>

            <p className="mt-4 text-muted-foreground">
              {project.description}
            </p>

            <ul className="mt-6 list-disc space-y-2 pl-5">
              {project.highlights.map((highlight) => (
                <li key={highlight}>
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border px-3 py-1 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium hover:underline"
                >
                  <FaGithub className="h-[18px] w-[18px]" />
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium hover:underline"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;