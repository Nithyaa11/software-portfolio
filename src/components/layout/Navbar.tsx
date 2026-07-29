import { useEffect, useState } from "react";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ArrowUp, Menu } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const github = profile.socialLinks.find(
    (link) => link.platform === "GitHub"
  );

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 8);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-32% 0px -58% 0px", threshold: 0 }
    );
    const sections = ["home", ...navigation.map((item) => item.id)]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  return (
    <>
    <nav className={`sticky top-0 z-50 w-full border-b border-transparent bg-background/75 backdrop-blur-xl transition-all duration-300 ${isScrolled ? "border-border/80 shadow-[0_8px_30px_rgb(15_23_42/0.07)]" : ""}`}>
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-6 md:px-8">
        {/* Logo */}
        <a
          href="/"
          className="max-w-56 truncate text-sm font-semibold tracking-[-0.025em] transition-colors hover:text-primary sm:max-w-none sm:text-base"
        >
          {profile.name}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-border/70 bg-card/60 p-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 ${activeSection === item.id ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted hover:text-foreground"}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="h-10 rounded-full px-5 shadow-sm transition-transform hover:-translate-y-0.5">
              Resume
            </Button>
          </a>

          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
            >
              <Button variant="outline" size="icon" className="rounded-full transition-all hover:-translate-y-0.5 hover:shadow-sm">
                <FaGithub className="h-5 w-5" />
              </Button>
            </a>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="shrink-0 lg:hidden">
          <Sheet>
            <SheetTrigger
              aria-label="Open menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border hover:bg-muted transition"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>

            <SheetContent side="right" className="w-72">
              <div className="mt-10 flex flex-col gap-6">
                {navigation.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 hover:bg-muted hover:text-primary"
                  >
                    {item.label}
                  </a>
                ))}

                <hr />

                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full rounded-full">
                    Resume
                  </Button>
                </a>

                {github && (
                  <a
                    href={github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full"
                    >
                      <FaGithub className="mr-2 h-5 w-5" />
                      GitHub
                    </Button>
                  </a>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

    </nav>
    <a
      href="#home"
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 z-50 grid size-11 place-items-center rounded-full border border-border bg-card/90 text-foreground shadow-lg shadow-black/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground hover:shadow-xl focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 sm:bottom-6 sm:right-6 ${isScrolled ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
    >
      <ArrowUp className="size-4" />
    </a>
    </>
  );
}

export default Navbar;
