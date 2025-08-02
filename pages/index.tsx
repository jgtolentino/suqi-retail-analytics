import Head from 'next/head'
import Dashboard from '../components/dashboard/RetailAnalytics'

export default function Home() {
  return (
    <>
      <Head>
        <title>SUQI Retail Analytics - Complete Dashboard</title>
        <meta name="description" content="Comprehensive retail analytics platform for Filipino convenience stores" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </>
  )
}