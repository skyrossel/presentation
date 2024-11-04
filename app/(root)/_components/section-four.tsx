import Image from "next/image";

import Container from "@/components/ui/container";

import imageOne from "@/public/radiohead/image-1.jpg";

const SectionFour = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="flex flex-col gap-y-8">
          <h3 className="text-end text-2xl tracking-tight">
            Radiohead&apos;s &quot;Kid A&quot;
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <Image src={imageOne} alt="Image One" />
            <Image src={imageOne} alt="Image One" className="hidden sm:block" />
            <Image src={imageOne} alt="Image One" className="hidden sm:block" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionFour;
