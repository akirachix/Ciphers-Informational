import Head from 'next/head'
import Team from './components/Team'

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>KidTracks - Nurturing Little Wonders</title>
        <meta name="description" content="KidTracks - Your magical companion in your child's growth journey from 0-5" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Team />
      </main>
    </div>
  )
}