import teamImg1 from "../../assets/images/guitarist.jpg";
import teamImg2 from "../../assets/images/team2.jpg";
import teamImg3 from "../../assets/images/team3.jpg";
import teamImg4 from "../../assets/images/team4.jpeg";
import teamImg5 from "../../assets/images/team4.jpg";
import teamImg6 from "../../assets/images/team6.jpg";
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
  const teamMember = [
    {
      id: 1,
      name: "Nathan",
      role: "Guitarist",
      description:
        "Nathan is a talented guitarist whose music captivates audiences with its beauty and grace. As a founding member of Melodies for Memories, Nathan shares his love of music with listeners around the world. When he's not playing the guitar, Nathan enjoys swimming, which helps him stay focused and creative. His soulful playing and vibrant energy make him a standout performer.",
      img: teamImg1,
    },
    {
      id: 2,
      name: "Simran",
      role: "Violinist",
      description:
        "Simran is a talented violinist whose music captivates audiences with its beauty and grace. As a founding member of Melodies for Memories, Simran shares her love of music with listeners around the world. When she's not playing the violin, Simran enjoys swimming, which helps her stay focused and creative. Her soulful playing and vibrant energy make her a standout performer.",
      img: teamImg2,
    },
    {
      id: 3,
      name: "Steven",
      role: "Flutist",
      description:
        "Steven is a talented flutist whose melodies enchant audiences with their beauty and grace. As a founding member of Melodies for Memories, Steven shares his love of music with listeners around the world. When he's not playing the flute, Steven enjoys swimming, which helps him stay focused and creative. His soulful playing and vibrant energy make him a standout performer.",
      img: teamImg3,
    },
    {
      id: 4,
      name: "Abraham",
      role: "Pianist",
      description:
        "Abraham is a talented pianist who captivates audiences with his expressive and graceful playing. A founding member of Melodies for Memories, he uses his piano skills to craft emotional and memorable experiences. Abraham draws inspiration from swimming, which enhances his discipline and focus. His dedication to his craft and his role in the group ensures every performance resonates deeply with listeners.",
      img: teamImg4,
    },
    {
      id: 5,
      name: "Watson",
      role: "Saxophonist",
      description:
        "Watson is a talented saxophonist whose melodies bring warmth and emotion to every performance. As a founding member of Melodies for Memories, Watson shares his love of music with audiences around the world. When he's not playing the saxophone, Watson enjoys swimming, which helps him stay focused and creative. His soulful playing and vibrant energy make him a standout performer.",
      img: teamImg5,
    },
    {
      id: 5,
      name: "Tom cruise",
      role: "Singer",
      description:
        "Tom cruise is a talented singer whose melodies bring warmth and emotion to every performance. As a founding member of Melodies for Memories, Tom cruise shares his love of music with audiences around the world. When he's not playing the saxophone, Tom cruise enjoys swimming, which helps him stay focused and creative. His soulful playing and vibrant energy make him a standout performer.",
      img: teamImg6,
    },
  ];

  return (
    <section className="py-20 bg-gray-100" id="ourTeam">
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
            {teamMember?.map((team, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                <Card className="p-0 h-full">
                  <CardContent className="w-full p-4">
                    <div className="w-full h-full rounded-lg">
                      <img
                        src={team.img}
                        alt="team image"
                        className="w-full h-80 object-cover  rounded-2xl"
                      />
                    </div>
                    <div className="mt-2">
                      <Badge>{team.role}</Badge>
                      <h3 className="text-2xl font-bold mb-2 hover:text-violet-600 py-1">
                        {team.name}
                      </h3>
                    </div>
                    <div className="py-2">
                      <p className="text-gray-600 text-md leading-7 mb-8">
                        {team.description}
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
