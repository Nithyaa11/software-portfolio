import { profile } from "@/data/profile";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
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
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
        <div>
          <h3 className="text-lg font-semibold">
            {profile.name}
          </h3>

          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} © All Rights Reserved.
          </p>
        </div>

        <div className="flex items-center gap-5">
          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <FaGithub className="h-5 w-5" />
            </a>
          )}

          {linkedin && (
            <a
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
          )}

          {email && (
            <a href={email.url}>
              <FaEnvelope className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;