import Section from "@/components/common/Section";
import { experiences } from "@/data/experience";

function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      description="Professional experience that strengthened my software engineering, backend development, and full stack development skills."
    >
      <div className="relative space-y-6 border-l border-border/80 pl-6 md:pl-8">
      {experiences.map((experience) => (
        <div
          key={experience.company}
          className="relative rounded-3xl border border-border/80 bg-card/75 p-6 shadow-sm transition-all duration-300 hover:border-primary/25 hover:shadow-lg hover:shadow-black/5 md:p-8"
        >
          <span className="absolute -left-[2.05rem] top-8 size-3 rounded-full border-[3px] border-background bg-primary md:-left-[2.55rem]" />
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
            <div>
              <h3 className="text-xl font-semibold tracking-[-0.03em] md:text-2xl">
                {experience.role}
              </h3>

              <p className="mt-2 text-lg text-muted-foreground">
                {experience.company}
              </p>

              <p className="text-sm text-muted-foreground">
                {experience.location}
              </p>
            </div>

            <p className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-muted-foreground">
              {experience.duration}
            </p>
          </div>

          <ul className="mt-7 list-disc space-y-3 pl-5 leading-7 marker:text-primary">
            {experience.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
      </div>
    </Section>
  );
}

export default Experience;
