import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import EQbeatsIQ from "./components/EQbeatsIQ/EQbeatsIQ";
import DoesThisSoundsFamiliar from "./components/DoesThisSoundsFamiliar/DoesThisSoundsFamiliar";
import MeetAheadApp from "./components/MeetAheadApp/MeetAheadApp";
import SelfImprovement from "./components/SelfImprovement/SelfImprovement";
import BestYouWithEQ from "./components/BestYouWithEQ/BestYouWithEQ";
import OthersThinkOfYou from "./components/OthersThinkOfYou/OthersThinkOfYou";
import Privacy from "./components/Privacy/Privacy";
import WorkWithUs from "./components/WorkWithUs/WorkWithUs";
import OpenVacancies from "./components/OpenVacancies/OpenVacancies";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="relative px-6">
      <Navbar />
      <Banner />
      <EQbeatsIQ />
      <DoesThisSoundsFamiliar />
      <MeetAheadApp />
      <SelfImprovement />
      <BestYouWithEQ />
      <OthersThinkOfYou />
      <Privacy />
      <WorkWithUs />
      <OpenVacancies />
      <Footer />
    </div>
  );
}
