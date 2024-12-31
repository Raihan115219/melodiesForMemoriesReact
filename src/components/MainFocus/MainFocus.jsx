import { IoIosArrowRoundForward } from "react-icons/io";
import image1 from "../../assets/images/service-1.png";
import image2 from "../../assets/images/service-2.png";
import image3 from "../../assets/images/service-3.png";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

const MainFocus = () => {
  const cardData = [
    {
      id: 1,
      img: image1,
      title: "Transforming Lives Through Music",
      desc: "Discover how our concerts create a lasting impact by raising funds to support those in need. Together, we turn melodies into opportunities for the helpless and transform lives with the power of music.",
      shortDesc: "Transforming Lives Through Music",
    },
    {
      id: 2,
      img: image2,
      title: "Join the Symphony of Change",
      desc: "Be a part of a community that believes in the magic of music. Your contributions help amplify our efforts, making every concert a step closer to a better future for those in need.",
      shortDesc: "Join the Symphony of Change",
    },
    {
      id: 3,
      img: image3,
      title: "Hope in Every Note",
      desc: "Through our charity concerts, we not only spread joy but also bring hope and support to helpless individuals, turning challenges into inspiring stories of transformation.Support the people.",
      shortDesc: "Hope in Every Note",
    },
  ];
  return (
    <section className="bg-gray-100 py-20" id="about">
      <div className="text-center mb-14">
        <Badge className="mb-4">Our Main Focus</Badge>
        <h1 className="text-4xl font-bold text-gray-900">Our Main Focus</h1>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center gap-4 w-full">
        {cardData.map((item, index) => (
          <Card
            className="p-4 cursor-pointer group transform transition-transform duration-300 hover:scale-95"
            key={index}
          >
            <CardContent>
              <div className="text-center mx-auto flex items-center justify-center mb-2">
                <img src={item.img} alt={item.title} className="h-20 w-20" />
              </div>
              <h2 className="text-xl font-bold text-gray-800 mb-5 text-center group-hover:text-violet-600 transition-all duration-300">
                {item.title}
              </h2>
              <div className="text-gray-600 text-md leading-7 mb-8">
                {item.desc}
              </div>
              <div className="text-center flex items-center gap-2 justify-center group-hover:text-violet-600 transition-all duration-300">
                <span className="text-md font-medium text-center">
                  {item.shortDesc}
                </span>
                <IoIosArrowRoundForward className="text-2xl" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default MainFocus;
