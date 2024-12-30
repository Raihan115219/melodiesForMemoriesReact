import { IoIosMusicalNote } from "react-icons/io";
import heroImg from "../../assets/images/hero.png";
import { Button } from "../ui/button";

const BannerSection = () => {
  return (
    <section className="bg-gray-100 py-20" id="home">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="mb-14 text-center md:text-left">
          <p className="flex items-center justify-center md:justify-start gap-2 mb-5 text-sm font-bold text-gray-700">
            <IoIosMusicalNote className="text-xl text-violet-600" />
            <span className="text-[#7c3aed] text-sm font-semibold">
              Music brings you to life!
            </span>
          </p>

          <h2 className="text-6xl font-bold text-gray-800 mb-5">
            Harmonizing Hearts for a Better Tomorrow.
          </h2>

          <p className="text-gray-600 text-xl leading-7 pl-4 border-l-4 border-violet-600 mb-8">
            &quot;Music can change the world because it can change people.&quot;
            – Bono
          </p>

          <Button className="p-6">Support us</Button>
        </div>

        <figure>
          <img src={heroImg} alt="banner" className="w-full" />
        </figure>
      </div>
    </section>
  );
};

export default BannerSection;
