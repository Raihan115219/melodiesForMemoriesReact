import { FaStar } from "react-icons/fa6";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const Testimonial = () => {
  const testimonialData = [
    {
      id: 1,
      name: "Emily Carter",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      review: 5,
      description:
        "The music brought tears to my eyes and joy to my heart. Seeing the young performers share their talents reminded me of my own youth and filled me with hope. It's a memory I'll cherish forever.",
    },
    {
      id: 2,
      name: "Robert Johnson",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review: 4.8,
      description:
        "Hearing these talented young individuals perform was a beautiful reminder of the power of music. It wasn't just a performance; it felt like a heartfelt gift that brought our community together in harmony.",
    },
    {
      id: 3,
      name: "Margaret Collins",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      review: 4.9,
      description:
        "The melodies played by these juniors created a magical connection between generations. Their passion and talent transported us to a place of joy and unity. It was a moment of pure emotional healing.",
    },
    {
      id: 4,
      name: "Henry Wells",
      image: "https://randomuser.me/api/portraits/men/56.jpg",
      review: 5,
      description:
        "The young performers filled our hearts with happiness. Their energy, dedication, and music lit up the room, bringing smiles to faces that haven't smiled in a long time. It's an experience I won't forget.",
    },
    {
      id: 5,
      name: "Susan Blake",
      image: "https://randomuser.me/api/portraits/women/55.jpg",
      review: 4.7,
      description:
        "Each note played felt like a step back into cherished memories. The juniors poured their hearts into every song, creating a powerful and emotional atmosphere. It was a touching reminder of life's simple joys.",
    },
  ];

  return (
    <section className="py-14">
      <div className="container mx-auto">
        <div className="text-center">
          <Badge>Testimonials</Badge>
          <p className="text-center text-gray-900 mt-2 text-4xl font-bold">
            What our customers say about us
          </p>
        </div>
        <div className="py-10">
          <Carousel className="w-full">
            <CarouselContent className="-ml-1 ">
              {testimonialData.map((review, index) => (
                <CarouselItem key={index} className="basis-2/5 flex-shrink-0">
                  <div className="p-1">
                    <Card className="h-64">
                      <CardContent className="flex flex-col h-full p-4">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <img
                              src={review.image}
                              alt={review.name}
                              className="h-16 w-16 rounded-full object-cover"
                            />
                            <div>
                              <p className="text-md font-semibold">
                                {review.name}
                              </p>
                              <div className="flex items-center gap-2">
                                {Array(5)
                                  .fill()
                                  .map((_, i) => (
                                    <FaStar
                                      className="text-yellow-400"
                                      key={i}
                                    />
                                  ))}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pt-4">
                          <p className="text-gray-900 text-md">
                            {review.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
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

export default Testimonial;
