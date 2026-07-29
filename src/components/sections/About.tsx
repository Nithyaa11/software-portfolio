import { profile } from "@/data/profile";
import Section from "@/components/common/Section";

function About() {
  return (
    <Section
      id="about"
      title="About Me"
      description="I'm passionate about building clean, scalable software and continuously learning new technologies that solve real-world problems."
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left */}
        <div className="space-y-6">
          <p className="text-lg leading-8 text-muted-foreground">
            {profile.shortBio}
          </p>
        </div>

        {/* Right */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">Education</h3>

            <p className="mt-3 text-muted-foreground">
              {profile.education}
            </p>

            <p className="text-muted-foreground">
              {profile.college}
            </p>

            <p className="text-muted-foreground">
              {profile.graduationYear}
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">Current Location</h3>

            <p className="mt-3 text-muted-foreground">
              {profile.currentLocation}
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h3 className="font-semibold">Home</h3>

            <p className="mt-3 text-muted-foreground">
              {profile.homeLocation}
            </p>
          </div>

          <div className="rounded-2xl border p-6">
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