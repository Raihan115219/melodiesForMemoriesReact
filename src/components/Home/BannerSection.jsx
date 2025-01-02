import { useState } from "react";
import { IoIosMusicalNote } from "react-icons/io";
import bannerImg from "../../assets/images/concert.jpg";
import MultiStepModal from "../common/MultiStepModal";
import ArtistInfoForm from "../Steps/Artist/ArtistInfoForm";
import Expertise from "../Steps/Artist/Expertise";
import TermsAndConditions from "../Steps/Artist/TermsAndCondition";
import ProfileForm from "../Steps/Profile/ProfileForm";
import { Button } from "../ui/button";

const BannerSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [
    <ProfileForm onNext={(data) => console.log(data)} key="step1" />,
    <ArtistInfoForm onNext={(data) => console.log(data)} key="step2" />,
    <Expertise onNext={(data) => console.log(data)} key="step2" />,
    <TermsAndConditions onNext={(data) => console.log(data)} key="step3" />,
  ];

  const handleFinish = () => {
    console.log("Modal process finished!");
    setIsModalOpen(false);
  };
  return (
    <section className="bg-gray-100 pt-5" id="home">
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

          <div className="flex items-center gap-3">
            <Button className="p-6">Host A House Concert</Button>
            <Button
              className="p-6 bg-teal-800 hover:bg-teal-700"
              onClick={() => setIsModalOpen(true)}
            >
              Become An Artist
            </Button>
          </div>
        </div>

        <figure>
          <img src={bannerImg} alt="banner" className="w-full h-full" />
        </figure>
      </div>
      <MultiStepModal
        steps={steps}
        nextLabel="Next Step"
        previousLabel="Previous Step"
        finishLabel="Complete"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onFinish={handleFinish}
      />
    </section>
  );
};

export default BannerSection;
