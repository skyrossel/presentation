import Image from "next/image";

import { margielaImages } from "@/constants/margiela";

import { InfiniteSlider } from "@/components/core/infinitive-slider";
import Container from "@/components/ui/container";

const SectionThree = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="flex flex-col gap-y-8">
          <h3 className="text-center text-2xl tracking-tight">
            Maison Margiela
          </h3>
          <InfiniteSlider reverse>
            {margielaImages.map((margielaImage) => (
              <Image
                key={margielaImage.id}
                src={margielaImage.src}
                alt={margielaImage.alt}
                className="w-96"
              />
            ))}
          </InfiniteSlider>
        </div>
      </Container>
    </section>
  );
};

export default SectionThree;
