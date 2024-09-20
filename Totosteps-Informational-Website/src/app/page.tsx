import Mission from "./component/Mission";
import Team from "./component/Team";
import Features from "./component/Feature";
import Navbar from "./component/Navbar";
import LandingPage from "./component/Landingpage";
export default function Home() {
  return (
    <main >
    <Navbar/>
    <LandingPage/>
    <Features/>
    <Mission/>
    <Team/>
    </main>
  );
}
