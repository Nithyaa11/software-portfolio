import { experiences } from "@/data/experience";

function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-7xl px-6 py-16 md:py-20"
    >
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">
          Experience
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Professional experience that strengthened my
          software engineering, backend development,
          and full stack development skills.
        </p>
      </div>

      {experiences.map((experience) => (
        <div
          key={experience.company}
          className="rounded-2xl border p-8"
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
            <div>
              <h3 className="text-2xl font-semibold">
                {experience.role}
              </h3>

              <p className="mt-2 text-lg text-muted-foreground">
                {experience.company}
              </p>

              <p className="text-sm text-muted-foreground">
                {experience.location}
              </p>
            </div>

            <p className="text-sm font-medium text-muted-foreground">
              {experience.duration}
            </p>
          </div>

          <ul className="mt-8 list-disc space-y-3 pl-6">
            {experience.responsibilities.map((item) => (
              <li key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Experience;