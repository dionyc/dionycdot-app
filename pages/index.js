import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Body from '@components/Body'
import ReactGA from "react-ga";  //Google Analytics
import { useEffect } from 'react' 

export default function Home() {

  useEffect(() => {
    ReactGA.initialize('G-8PQGNVYQK6');
    ReactGA.pageview(window.location.pathname);
  })

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
