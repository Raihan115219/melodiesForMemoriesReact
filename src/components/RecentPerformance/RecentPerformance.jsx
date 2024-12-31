import ReactPlayer from "react-player";
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
      src: "/concert.mp4",
      title: "Student Playing saxophone",
      author: "Instrumental Music Program",
    },
    {
      src: "https://www.youtube.com/watch?v=6ICZrNUdmNE",
      title: "Student Playing Violin",
      author: "Student Performance Group",
    },
    {
      src: "https://www.youtube.com/watch?v=bxDlC7YV5is",
      title: "Student Playing Piano",
      author: "Music School",
    },
    {
      src: "https://www.youtube.com/watch?v=GPHUvoG5Pkg",
      title: "Student Playing Guitar",
      author: "Local Music Academy",
    },
    {
      src: "https://www.youtube.com/watch?v=6ICZrNUdmNE",
      title: "Student Band Performance",
      author: "School Music Program",
    },
    {
      src: "https://www.youtube.com/watch?v=6ICZrNUdmNE",
      title: "Student Playing Flute",
      author: "Instrumental Music Program",
    },
  ];

  return (
    <section className="py-14" id="performance">
      <div className="container mx-auto">
        <div className="text-center mb-14">
          <Badge className="my-2">Recent Performance</Badge>
          <h3 className="text-4xl font-bold">Our Recent Performance</h3>
        </div>
        <div>
          <Carousel className="w-full">
            <CarouselContent className="-ml-1 ">
              {videoData.map((video, index) => (
                <CarouselItem key={index} className="basis-1/3 flex-shrink-0">
                  <div className="p-1">
                    <Card className="h-[350px] ">
                      <CardContent className="flex flex-col h-full p-4">
                        {/* Video Section */}

                        <div className="h-4/5 rounded-md overflow-hidden">
                          <ReactPlayer
                            url={video.src} // Replace with your video URL
                            width="100%"
                            height="100%"
                            controls
                          />
                        </div>
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
