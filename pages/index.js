import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Body from '@components/Body'

export default function Home() {
  
  return (
    <div className="container">
      <Head>
        <title>Diony C.</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Body />
      </main>
      <Footer />
    </div>
  )
}
