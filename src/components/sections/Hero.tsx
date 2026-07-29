import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
  const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`;
  const github = profile.socialLinks.find(
    (link) => link.platform === "GitHub"
  );

  const linkedin = profile.socialLinks.find(
    (link) => link.platform === "LinkedIn"
  );

  const email = profile.socialLinks.find(
    (link) => link.platform === "Email"
  );

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden scroll-mt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_20%,oklch(0.88_0.09_55_/_0.5),transparent_28rem),linear-gradient(135deg,var(--background),var(--background),var(--muted))]" />

      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-10 sm:px-6 sm:py-14 md:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:items-start lg:gap-14 lg:py-12">
        {/* Left Content */}
        <div className="space-y-7">
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
              👋Hello, I'm
            </p>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[0.98] tracking-[-0.055em] text-foreground sm:text-5xl md:text-6xl xl:text-7xl">
              {profile.name}
            </h1>

            <div className="flex flex-wrap gap-x-3 gap-y-1 pt-2">
              {profile.roles.map((role) => (
                <p
                  key={role}
                  className="text-lg font-semibold tracking-[-0.02em] text-muted-foreground sm:text-xl"
                >
                  {role}
                </p>
              ))}
            </div>

            <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Building scalable web applications, AI-powered
              solutions, and intuitive digital experiences with a
              focus on clean architecture and user-centric design.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="block w-full sm:inline-block sm:w-auto">
              <Button size="lg" className="h-11 w-full rounded-full px-6 shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/25 sm:w-auto">
                View Projects
              </Button>
            </a>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:inline-block sm:w-auto"
            >
              <Button
                variant="outline"
                size="lg"
                className="h-11 w-full rounded-full border-border bg-card/70 px-6 transition-all hover:-translate-y-0.5 hover:bg-card hover:shadow-md sm:w-auto"
              >
                Download Resume
              </Button>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 pt-1">
            {github && (
              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                className="grid size-10 place-items-center rounded-full border border-border bg-card/70 text-muted-foreground shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary hover:text-primary-foreground hover:shadow-md"
              >
                <FaGithub className="h-6 w-6" />
              </a>
            )}

            {linkedin && (
              <a
                href={linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn profile"
                className="grid size-10 place-items-center rounded-full border border-border bg-card/70 text-muted-foreground shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary hover:text-primary-foreground hover:shadow-md"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            )}

            {email && (
              <a
                href={emailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Compose an email in Gmail"
                className="grid size-10 place-items-center rounded-full border border-border bg-card/70 text-muted-foreground shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary hover:text-primary-foreground hover:shadow-md"
              >
                <FaEnvelope className="h-6 w-6" />
              </a>
            )}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative rounded-[2rem] border border-white/60 bg-card/80 p-3 shadow-2xl shadow-black/10 backdrop-blur sm:p-4">
            <img
              src={profile.image}
              alt={profile.name}
              className="h-64 w-64 rounded-[1.45rem] object-cover sm:h-72 sm:w-72 lg:h-[22rem] lg:w-[22rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
