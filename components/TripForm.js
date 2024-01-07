'use client'

export default function TripForm({ onSubmit, isLoading }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const tripData = event.target.tripInput.value
    onSubmit(tripData)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='bg-white shadow-lg rounded p-4 max-w-md mx-auto'
    >
      <textarea
        id='tripInput'
        name='tripInput'
        className='w-full h-32 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black'
        aria-label='Enter your trips'
        placeholder='Paste your trips here'
        disabled={isLoading}
      ></textarea>
      <button
        type='submit'
        className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full'
        disabled={isLoading}
      >
        {isLoading ? 'Submitting...' : 'Submit Trips'}
      </button>
    </form>
  )
}
