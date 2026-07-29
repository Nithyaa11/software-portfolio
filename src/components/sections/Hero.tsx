import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Hero() {
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
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background to-muted/40" />

      <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2 lg:items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-lg font-medium text-primary">
              👋Hello, I'm
            </p>

            <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
              {profile.name}
            </h1>

            <div className="space-y-2">
              {profile.roles.map((role) => (
                <h2
                  key={role}
                  className="text-2xl font-semibold text-muted-foreground"
                >
                  {role}
                </h2>
              ))}
            </div>

            <p className="max-w-xl text-lg leading-8 text-muted-foreground">
              Building scalable web applications, AI-powered
              solutions, and intuitive digital experiences with a
              focus on clean architecture and user-centric design.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#projects">
              <Button size="lg">
                View Projects
              </Button>
            </a>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="lg"
              >
                Download Resume
              </Button>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 pt-2">
            {github && (
              <a
                href={github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <FaGithub className="h-6 w-6" />
              </a>
            )}

            {linkedin && (
              <a
                href={linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            )}

            {email && (
              <a
                href={email.url}
                className="transition-transform hover:scale-110"
              >
                <FaEnvelope className="h-6 w-6" />
              </a>
            )}
          </div>
        </div>

        {/* Right Content */}
        <div className="flex justify-center lg:justify-end">
          <div className="rounded-3xl border bg-card/80 p-8 shadow-2xl backdrop-blur">
            <img
              src={profile.image}
              alt={profile.name}
              className="h-80 w-80 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;