import Section from "@/components/common/Section";
import { skills } from "@/data/skills";

function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      description="Technologies and tools I use to build modern applications."
    >
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
    </Section>
  );
}

export default Skills;