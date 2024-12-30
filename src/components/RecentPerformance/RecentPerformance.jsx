import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const RecentPerformance = () => {
  const videoData = [
    {
      src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      title: "Sintel Trailer",
      author: "Blender Foundation",
    },
    {
      src: "https://media.w3.org/2010/05/bunny/trailer.mp4",
      title: "Big Buck Bunny Trailer",
      author: "Blender Foundation",
    },
    {
      src: "https://media.w3.org/2010/05/video/movie_300.mp4",
      title: "Movie Clip",
      author: "Open Source Media",
    },
    {
      src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4",
      title: "Sample Video",
      author: "SampleLib",
    },
    {
      src: "https://media.w3.org/2010/05/video/movie_720.mp4",
      title: "Nature Clip",
      author: "Open Source Media",
    },
  ];

  return (
    <section className="py-20" id="performance">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <Badge className="my-2">Recent Performance</Badge>
          <h3 className="text-4xl font-bold">Our Recent Performance</h3>
        </div>
        <div>
          <Carousel className="w-full">
            <CarouselContent className="-ml-1">
              {videoData.map((video, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 basis-1/3 flex-shrink-0"
                >
                  <div className="p-1">
                    <Card className="h-[350px] p-2">
                      <CardContent className="flex flex-col h-full">
                        {/* Video Section */}

                        <video
                          src={video.src}
                          controls
                          className="w-[100%] h-[250px] rounded-lg"
                        />

                        <p className="text-sm font-bold text-violet-600 mt-2">
                          {video.author}
                        </p>
                        <h4 className="text-lg font-semibold ">
                          {video.title}
                        </h4>
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

export default RecentPerformance;
