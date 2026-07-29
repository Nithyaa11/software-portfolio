import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function Navbar() {
  const github = profile.socialLinks.find(
    (link) => link.platform === "GitHub"
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="/"
          className="text-lg font-bold tracking-tight transition-colors hover:text-primary"
        >
          {profile.name}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-full px-6">
              Resume
            </Button>
          </a>

          {github && (
            <a
              href={github.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="icon">
                <FaGithub className="h-5 w-5" />
              </Button>
            </a>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-72">
              <div className="mt-10 flex flex-col gap-6">
                {navigation.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-primary"
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
  );
}

export default Navbar;