import Section from "@/components/common/Section";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      description="A selection of projects that showcase my experience in backend development, full stack applications, and problem solving."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group flex h-full flex-col rounded-3xl border border-border/80 bg-card/75 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/25 hover:shadow-xl hover:shadow-black/10 md:p-7"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-xl font-semibold tracking-[-0.03em] md:text-2xl">
                {project.title}
              </h3>

              {project.featured && (
                <span className="rounded-full bg-primary/10 px-3.5 py-1.5 text-sm font-semibold text-primary">
                  Featured
                </span>
              )}
            </div>

            <p className="mt-4 leading-7 text-muted-foreground">
              {project.description}
            </p>

            <ul className="mt-6 list-disc space-y-2 pl-5 text-sm leading-6 marker:text-primary">
              {project.highlights.map((highlight: string) => (
                <li key={highlight}>
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-4 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:bg-muted hover:shadow-sm sm:w-auto"
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
                  className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md sm:w-auto"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
