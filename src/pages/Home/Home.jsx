import AboutUs from "@/components/About/AboutUs";
import ContactSection from "@/components/ContactSection/ContactSection";
import FooterSection from "@/components/Footer/FooterSection";
import BannerSection from "@/components/Home/BannerSection";
import MainFocus from "@/components/MainFocus/MainFocus";
import Instruments from "@/components/OurInstruments/Instruments";
import OurTeam from "@/components/OurTeam/OurTeam";
import RecentPerformance from "@/components/RecentPerformance/RecentPerformance";
import Testimonial from "@/components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <BannerSection />
      <AboutUs />
      <MainFocus />
      <OurTeam />
      <RecentPerformance />
      <Instruments />
      <Testimonial />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Home;
