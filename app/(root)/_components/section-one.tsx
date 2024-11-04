import Container from "@/components/ui/container";

const SectionOne = () => {
  return (
    <section className="flex min-h-[calc(100dvh-2.75rem)] items-center py-10">
      <Container>
        <h2 className="text-5xl tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          <div className="text-start">Public</div>
          <br />
          <div className="text-center text-4xl tracking-tight">
            The Prismatic Revolution: How Color Orchestrates Our World.
          </div>
          <br />
          <div className="text-end">Speaking</div>
        </h2>
      </Container>
    </section>
  );
};

export default SectionOne;
