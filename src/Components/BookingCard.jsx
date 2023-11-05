/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'

const BookingCard = ({ booking, handleDelete }) => {
  const {
    _id,
    description,
    price_per_night,
    room_size,
    availability,
    images,
    special_offers,
  } = booking

  return (
    <>
      <div className='p-4 border rounded-lg shadow-md'>
        <h3 className='text-2xl font-bold'>{name}</h3>
        <p className='text-gray-600'>{description}</p>
        <p className='text-2xl font-bold'>
          Price: ${price_per_night} per night
        </p>
        <img src={images} className='w-52' alt='' />
        {/* <div className='grid grid-cols-3 gap-2'>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Room ${name} Image`} />
          ))}
        </div> */}
      </div>{' '}
      <button className='block p-2 mx-auto my-8 text-white bg-gray-800 rounded-xl'>
        Confirm
      </button>
      <button className='block p-2 mx-auto my-8 bg-green-400 rounded-xl'>
        Update
      </button>
      <button
        onClick={() => handleDelete(_id)}
        className='block p-2 mx-auto my-8 bg-red-400 rounded-xl'
      >
        Cancel
      </button>
    </>
  )
}
export default BookingCard
