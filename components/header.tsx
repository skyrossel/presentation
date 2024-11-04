import Link from "next/link";

import Container from "@/components/ui/container";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-50 bg-[#372B29] py-2">
      <Container>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-center font-mono text-sm transition-opacity hover:opacity-70"
            title="The Prismatic Revolution: How Color Orchestrates Our World"
          >
            Alibek Allanazarov
          </Link>

          <p className="text-center font-mono leading-7">(Presentation)</p>
        </div>
      </Container>
    </header>
  );
};

export default Header;
