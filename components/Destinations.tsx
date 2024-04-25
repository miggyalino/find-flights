import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { DESTINATIONS } from "@/constants";

const Destinations = () => {
  return (
    <section className="bg-yellow-500">
      <div className="max-container padding-container flex flex-col space-y-8 p-10 ">
        <div>
          <p className="text-4xl font-bold">Destinations</p>
        </div>
        <div>
          <Carousel>
            <CarouselContent>
              {DESTINATIONS.map((destination) => (
                <CarouselItem
                  key={destination.title}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <DirectionAwareHover imageUrl={destination.imageUrl}>
                    <p className="font-bold text-xl">{destination.title}</p>
                  </DirectionAwareHover>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
