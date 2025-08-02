import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <Head>
        <title>SUQI Retail Analytics</title>
        <meta name="description" content="Sari-Sari Store Intelligence Platform" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              🏪 SUQI Retail Analytics
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Sari-Sari Store Intelligence Platform
            </p>
            
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">1,247</div>
                  <div className="text-gray-600">Total Transactions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">₱52,840</div>
                  <div className="text-gray-600">Total Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">43.2s</div>
                  <div className="text-gray-600">Avg Duration</div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-purple-50 rounded-lg border border-purple-200">
              <h2 className="text-lg font-semibold text-purple-800 mb-2">
                🚀 Deployment Successful!
              </h2>
              <p className="text-purple-700">
                Your SUQI Retail Analytics platform is now live and ready for data.
              </p>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              <p>Built with Next.js • Powered by Supabase • Deployed on Vercel</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
      `}</style>
    </>
  )
}