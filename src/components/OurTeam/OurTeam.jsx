import teamImg from "../../assets/images/author.jpg";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const OurTeam = () => {
  return (
    <section className="py-20" id="ourTeam">
      <div className="container mx-auto">
        <div className="text-center">
          <Badge>Our team</Badge>
          <h2 className="text-4xl font-bold text-center mb-4">Meet Our Team</h2>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-0">
                  <CardContent className="w-full">
                    <div className="w-full h-full rounded-lg">
                      <img
                        src={teamImg}
                        alt=""
                        className="w-full h-80 object-cover p-4 rounded-2xl"
                      />
                    </div>
                    <div>
                      <Badge>Guitarist</Badge>
                      <h3 className="text-2xl font-bold mb-2 hover:text-violet-600 py-1">
                        Nathan
                      </h3>
                    </div>
                    <div className="py-2">
                      <p className="text-gray-600 text-md leading-7 mb-8">
                        Nathan, born and raised in Maryland, is a passionate
                        musician who has been playing the piano and trumpet for
                        years. As the founder ofMelodies for Memories, Nathan
                        believes in the transformative power of music to bring
                        joy and connection to others. Beyond his musical
                        talents, Nathan is an avid swimmer who finds inspiration
                        and discipline through his time in the water. His
                        dedication to both his craft and this project has been a
                        driving force in its success, creating opportunities to
                        share music and smiles with communities far and wide.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default OurTeam;
