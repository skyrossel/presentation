import Image from "next/image";

import Container from "@/components/ui/container";

import imageOne from "@/public/picasso/image-1.jpg";

const SectionTwo = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="flex flex-col gap-y-8">
          <h3 className="text-start text-2xl tracking-tight">
            Pablo Picasso&apos;s Blue Period
          </h3>
          <Image src={imageOne} alt="Image One" className="w-full" />
        </div>
      </Container>
    </section>
  );
};

export default SectionTwo;
