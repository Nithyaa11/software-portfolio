import type { Profile } from "@/types/profile";
import profileImage from "@/assets/images/profile.jpg";

export const profile: Profile = {
  name: "Sai Leela SriNithya Malladi",

  image: profileImage,

  roles: [
    "Python Full Stack Developer",
    "AI Enthusiast",
  ],

  tagline:
    "Turning ideas into scalable software through clean engineering and AI.",

  shortBio:
    "Information Technology graduate passionate about Python Full Stack Development and Artificial Intelligence. I enjoy building modern web applications, solving real-world problems, and continuously learning new technologies through hands-on projects.",

  currentLocation: "Hyderabad, Telangana",

  homeLocation: "Guntur, Andhra Pradesh, India",
  education: "B.Tech in Information Technology",
  college: "Vasireddy Venkatadri Institute of Technology",
  graduationYear: "2027",

  resumeUrl: "/resume/Nithya_Resume1.pdf",

  email: "srinithyaaa3.work@gmail.com",

  availability: "Open to Work",
  
  socialLinks: [
    {
      platform: "GitHub",
      username: "Nithyaa11",
      url: "https://github.com/Nithyaa11",
    },
    {
      platform: "LinkedIn",
      username: "srinithya-malladi",
      url: "https://www.linkedin.com/in/srinithya-malladi",
    },
    {
      platform: "Email",
      username: "Email",
      url: "mailto:srinithyaaa3.work@gmail.com",
    },
  ],

  ctaButtons: [
    {
      text: "View Projects",
      href: "#projects",
    },
    {
      text: "Download Resume",
      href: "/resume/Nithya_Resume1.pdf",
    },
  ],
};