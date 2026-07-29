import { profile } from "@/data/profile";
import Section from "@/components/common/Section";

function About() {
  return (
    <Section
      id="about"
      title="About Me"
      description="I'm passionate about building clean, scalable software and continuously learning new technologies that solve real-world problems."
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Left */}
        <div className="flex">
          <div className="flex h-full w-full items-center rounded-3xl border border-border/80 bg-card/70 p-6 text-lg leading-8 text-muted-foreground shadow-sm md:p-7">
            <p>{profile.shortBio}</p>
          </div>
        </div>

        {/* Right */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-border/80 bg-card/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-black/5">
            <h3 className="font-semibold">Education</h3>

            <p className="mt-3 text-muted-foreground">
              {profile.education}
            </p>

            <p className="text-muted-foreground">
              {profile.college}
            </p>

            <p className="text-muted-foreground">
              {profile.cgpa}
            </p>

            <p className="text-muted-foreground">
              {profile.graduationYear}
            </p>
          </div>

          <div className="rounded-3xl border border-border/80 bg-card/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-black/5">
            <h3 className="font-semibold">Current Location</h3>

            <p className="mt-3 text-muted-foreground">
              {profile.currentLocation}
            </p>
          </div>

          <div className="rounded-3xl border border-border/80 bg-card/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-black/5">
            <h3 className="font-semibold">Availability</h3>

            <p className="mt-3 text-muted-foreground">
              {profile.availability}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
