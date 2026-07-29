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
      className="mx-auto max-w-7xl scroll-mt-20 px-6 py-12 md:px-8 md:py-14 lg:py-16"
    >
      <div className="mb-8 text-center md:mb-10">
        <h2 className="text-3xl font-bold tracking-[-0.04em] text-foreground md:text-4xl">
          {title}
        </h2>

        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
            {description}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}

export default Section;
