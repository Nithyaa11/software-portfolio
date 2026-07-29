import { skills } from "@/data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto max-w-7xl px-6 py-16 md:py-20"
    >
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-bold">
          Skills
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Technologies, tools, and concepts I've
          worked with throughout my academic,
          personal, and professional journey.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {skills.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border p-6"
          >
            <h3 className="mb-6 text-xl font-semibold">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border px-4 py-2 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;