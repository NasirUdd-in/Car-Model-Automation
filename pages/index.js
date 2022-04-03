import Head from 'next/head'
import CarAutomation from './Components/CarAutomation'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Car Automation</title>
      </Head>

      <CarAutomation/>
      
    </div>
  )
}
