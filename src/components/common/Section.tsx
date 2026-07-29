import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
}

function Section({
  id,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="mx-auto max-w-7xl px-6 py-20 md:py-24"
    >
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          {title}
        </h2>

        {description && (
          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}

export default Section;