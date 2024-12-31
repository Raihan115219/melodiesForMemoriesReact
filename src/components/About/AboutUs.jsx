import { RiServiceFill } from "react-icons/ri";
import aboutImg1 from "../../assets/images/instruments-2.jpg";
import aboutImg3 from "../../assets/images/instruments-3.jpg";
import aboutImg2 from "../../assets/images/oldPeople-1.png";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
const AboutUs = () => {
  const images = [
    {
      id: 1,
      src: aboutImg1,
      alt: "Image 1",
      span: "col-span-1 row-span-1",
    },
    {
      id: 2,
      src: aboutImg2,
      alt: "Image 2",
      span: "col-span-2 row-span-1",
    },
    {
      id: 3,
      src: aboutImg3,
      alt: "Image 3",
      span: "col-span-3 row-span-1",
    },
  ];
  return (
    <div className=" py-20" id="about">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="mb-14 text-center md:text-left">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-fr">
            {images.map((image) => (
              <div
                key={image.id}
                className={`rounded-lg shadow-lg ${image.span} max-h-80`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="py-10">
          <Badge>About us</Badge>
          <h2 className="text-6xl font-bold text-gray-800 mb-5">
            We are a group of passionate musicians.
          </h2>
          <div className="py-5">
            <p className="text-gray-600 text-md leading-7 mb-8">
              We are a group of passionate musicians who believe in the power of
              music to change lives. Our mission is to create hope and
              inspiration through music. We believe that music has the power to
              heal, uplift, and transform lives. Our goal is to use music to
              create positive change in the world. We are committed to creating
              music that is meaningful, authentic, and inspiring. We believe
              that music has the power to bring people together and create
              positive change in the world. We are dedicated to using our music
              to make a difference in the lives of others. We are passionate
              about creating music that is beautiful, powerful, and inspiring.
            </p>
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-2 items-center gap-10 py-5">
              {Array(4)
                .fill()
                .map((_, index) => (
                  <div className="flex items-center gap-2" key={index}>
                    <div className="p-2 rounded-full text-violet-700 bg-violet-50">
                      <RiServiceFill className="text-lg" />
                    </div>
                    <p className=" font-normal text-sm">Music with Purpose</p>
                  </div>
                ))}
            </div>
          </div>

          <p className="text-gray-600 text-sm font-normal leading-7  border-l-4 border-violet-600 mb-8 bg-violet-100 p-2 ">
            &quot;Where words fail, music speaks—and together, we create
            hope.&quot;
          </p>

          <Button className="p-6 w-28">Support us</Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
