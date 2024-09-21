import Image from "next/image";
import Footer from "./components/Footer";
import CTA from "./components/Cta";
import Mission from "./component/Mission";
import Team from "./component/Team";
import Features from "./component/Feature";
import Navbar from "./component/Navbar";
import LandingPage from "./component/Landingpage";

export default function Home() {
  return (
    <main>
      <Navbar />
      <LandingPage />
      <Features />
      <Mission />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
