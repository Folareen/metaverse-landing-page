import BooksAboutMetaverse from '@/components/BooksAboutMetaverse'
import DesignerNote from '@/components/DesignerNote'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import MetaverseAnalysisSection from '@/components/MetaverseAnalysisSection'
import MetaverseEffectSection from '@/components/MetaverseEffectSection'
import MetaverseEvolutionSection from '@/components/MetaverseEvolutionSection'
import TopQuotesSection from '@/components/TopQuotesSection'
import TopStoriesSection from '@/components/TopStoriesSection'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Metaverse</title>
        <meta name="description" content="Metaverse" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <script src="https://kit.fontawesome.com/5bf790ca36.js" crossOrigin="anonymous"></script>
      </Head>
      <Header />
      <HeroSection />
      <MetaverseEffectSection />
      <MetaverseEvolutionSection />
      <TopStoriesSection />
      <MetaverseAnalysisSection />
      <TopQuotesSection />
      <BooksAboutMetaverse />
      <DesignerNote />
      <Footer />
    </>
  )
}
