export interface SocialLink {
  platform: "GitHub" | "LinkedIn" | "Email";
  username: string;
  url: string;
}

export interface CTAButton {
  text: string;
  href: string;
}

export interface Profile {
  name: string;
  image: string;
  roles: string[];
  tagline: string;
  shortBio: string;
  currentLocation: string;
  education: string;
  college: string;
  cgpa: string;
  graduationYear: string;
  resumeUrl: string;
  email: string;
  availability:
    | "Open to Work"
    | "Open to Internship"
    | "Employed";
  socialLinks: SocialLink[];
  ctaButtons: CTAButton[];
}