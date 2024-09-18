import Image from "next/image";
import Footer from "./components/Footer";
import CTA from "./components/Cta";
import Mission from "./component/Mission";
import Team from "./component/Team";

export default function Home() {
  return (
    <div>
    
      <Mission />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}
