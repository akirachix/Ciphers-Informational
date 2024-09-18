import Head from "next/head";


import Features from "./components/Features/feature";

export default function Home(){
  return (
    <div className='bg-white'>
      <Head>
        <title>TotoSteps</title>
        <meta name="description" content="Nurturing little wonders"/>
        <link rel="icon" href="/favicon.icon"/>
        </Head>
        <Features/>
    </div>
  )
}