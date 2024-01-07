'use client'

import Head from 'next/head'
import { useState } from 'react'
import TripForm from '../components/TripForm'
import TripResults from '../components/TripResults'
import OpenAI from 'openai'

export default function Home() {
  const [trips, setTrips] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  })

  const handleTripSubmission = async (tripData) => {
    setIsLoading(true)
    setError(null)

    const systemMessage = {
      content: `Extract trip details and convert them into an array of objects, in JSON format. Here are the trip details:\n\n${tripData}\n\nEach trip should be formatted as follows:\n\n{
        "name": "The name of the person being transported",
        "fromAddress": "The address where the person will be picked up",
        "toAddress": "The destination address",
        "pickupTime": "Optional. The time the person will be picked up",
        "dropoffTime": "Optional. The time the person will be dropped off",
        "phone": "Optional. The phone number of the person or relevant contact",
        "wheelchair": "True if the person requires a wheelchair, false otherwise",
        "additionalNotes": "Optional. Any additional notes or instructions"
      }\n\nConvert the above details into JSON format.`,
      role: 'system',
    }
    const userMessage = {
      content: tripData,
      role: 'user',
    }

    const prompt = [systemMessage, userMessage]

    try {
      const completion = await openai.chat.completions.create({
        messages: prompt,
        model: 'gpt-3.5-turbo',
      })
      const content = `${completion.choices[0].message.content}`
      const trips = await JSON.parse(content)
      setTrips(trips)
    } catch (error) {
      setError('Failed to process trips.')
      console.error(error)
    }

    setIsLoading(false)
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <Head>
        <title>Go Grandpa, Go!</title>
      </Head>
      <main className='w-full flex flex-col items-center p-4'>
        <h1 className='text-4xl font-bold text-gray-800 mb-8'>
          Go Grandpa, Go!
        </h1>
        <div className='w-full max-w-md bg-white rounded-lg shadow-md p-6'>
          <TripForm onSubmit={handleTripSubmission} isLoading={isLoading} />
          {isLoading && <p className='text-center text-gray-600'>Loading...</p>}
          {error && <p className='text-center text-red-500'>Error: {error}</p>}
          <TripResults trips={trips} />
        </div>
      </main>
    </div>
  )
}
