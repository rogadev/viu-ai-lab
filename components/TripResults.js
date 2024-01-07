import React from 'react'

const tripCardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '16px 0',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}

const saveTrips = () => {
  const trips = JSON.parse(localStorage.getItem('trips')) || []
  const newTrips = trips.concat(trips)
  localStorage.setItem('trips', JSON.stringify(newTrips))
  alert('Your trips have been saved to local storage!')
}

const TripResults = ({ trips }) => {
  if (trips.length === 0) {
    return null
  }

  return (
    <div className='text-black mt-6'>
      <h2 className='text-2xl font-semibold mb-4'>Your Trips</h2>
      <div>
        {trips.map((trip, index) => (
          <div key={index} style={tripCardStyle}>
            <h3 className='text-lg font-semibold'>Trip {index + 1}</h3>
            <p>
              <strong>Name:</strong> {trip.name}
            </p>
            <p>
              <strong>From:</strong> {trip.fromAddress}
            </p>
            <p>
              <strong>To:</strong> {trip.toAddress}
            </p>
            {trip.pickupTime && (
              <p>
                <strong>Pickup Time:</strong> {trip.pickupTime}
              </p>
            )}
            {trip.dropoffTime && (
              <p>
                <strong>Dropoff Time:</strong> {trip.dropoffTime}
              </p>
            )}
            {trip.phone && (
              <p>
                <strong>Phone:</strong> {trip.phone}
              </p>
            )}
            <p>
              <strong>Wheelchair:</strong> {trip.wheelchair ? 'Yes' : 'No'}
            </p>
            {trip.additionalNotes && (
              <p>
                <strong>Additional Notes:</strong> {trip.additionalNotes}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className='flex items-center justify-center mt-4'>
        <button
          onClick={saveTrips}
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Save these trips
        </button>
      </div>
    </div>
  )
}

export default TripResults
