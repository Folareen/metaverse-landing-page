import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import MetaverseEffectSection from '@/components/MetaverseEffectSection'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Metaverse</title>
        <meta name="description" content="Metaverse" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Header />
      <HeroSection />
      <MetaverseEffectSection />
    </>
  )
}
