export interface SocialLink {
  platform: string;
  username: string;
  url: string;
}

export interface CTAButton {
  text: string;
  href: string;
}

export interface Profile {
  name: string;

  roles: string[];

  tagline: string;

  shortBio: string;

  currentLocation: string;
  homeLocation: string;

  profileImage: string;

  resumeUrl: string;

  email: string;

  availability: "Open to Work" | "Employed" | "Open to Internship";

  socialLinks: SocialLink[];

  ctaButtons: CTAButton[];
}