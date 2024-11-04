import Container from "@/components/ui/container";

const Footer = () => {
  return (
    <footer className="py-6">
      <Container>
        <div className="flex flex-col gap-y-4">
          <h1 className="text-center text-4xl tracking-tight">
            The Prismatic Revolution: How Color Orchestrates Our World.
          </h1>

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <small className="text-center font-mono text-sm uppercase">
              Made By Alibek Allanazarov
            </small>
            <p className="text-center font-mono leading-7">Thank You!</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
