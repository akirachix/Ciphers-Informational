import Head from "next/head";
import Features from "./components/Features/feature";
import Mission from "./component/Mission";
import Team from "./component/Team";

export default function Home() {
  return (
    <div className='bg-white'>
      <Head>
        <title>TotoSteps</title>
        <meta name="description" content="Nurturing little wonders" />
        <link rel="icon" href="/favicon.icon" />
      </Head>
      <Mission />
      <Team />
      <Features />
    </div>
  );
}

