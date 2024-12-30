import { FaGuitar } from "react-icons/fa6";
import {
  GiFlute,
  GiGrandPiano,
  GiSaxophone,
  GiTrumpet,
  GiViolin,
} from "react-icons/gi";
import { LuDrum, LuPiano } from "react-icons/lu";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
const Instruments = () => {
  const instruments = [
    { name: "Guitar", icon: <FaGuitar />, price: 100 },
    { name: "Piano", icon: <GiGrandPiano />, price: 200 },
    { name: "Drums", icon: <LuDrum />, price: 300 },
    { name: "Violin", icon: <GiViolin />, price: 400 },
    { name: "Saxophone", icon: <GiSaxophone />, price: 500 },
    { name: "Trumpet", icon: <GiTrumpet />, price: 600 },
    { name: "Flute", icon: <GiFlute />, price: 700 },
    { name: "Harmonica", icon: <LuPiano />, price: 800 },
  ];
  return (
    <section className="bg-gray-100 py-20" id="instruments">
      <div className="text-center mb-14">
        <Badge className="mb-4">Instruments</Badge>
        <h3 className="text-4xl font-bold">Our Instruments</h3>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 items-center gap-5">
        {instruments.map((instrument, index) => (
          <Card
            className="group p-5 cursor-pointer w-[350px] h-[250px] bg-white hover:bg-violet-500 flex items-center justify-center transition-all duration-300"
            key={index}
          >
            <CardContent>
              <div>
                <div className="text-center flex items-center justify-center bg-violet-200 rounded-full w-20 h-20 mx-auto transition-all duration-300">
                  <span className="text-4xl text-black ">
                    {instrument.icon}
                  </span>
                </div>
                <p className="text-center font-semibold text-2xl pt-2 text-black group-hover:text-white transition-all duration-300">
                  {instrument.name}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Instruments;
