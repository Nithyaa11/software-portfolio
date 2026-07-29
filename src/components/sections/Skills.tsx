import Section from "@/components/common/Section";
import { skills } from "@/data/skills";

function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      description="Technologies and tools I use to build modern applications."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((category) => (
          <div
            key={category.title}
            className="rounded-3xl border border-border/80 bg-card/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-black/5"
          >
            <h3 className="mb-5 text-lg font-semibold tracking-[-0.02em]">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-muted/60 px-3.5 py-1.5 text-sm font-medium text-secondary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:bg-primary hover:text-primary-foreground hover:shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Skills;
