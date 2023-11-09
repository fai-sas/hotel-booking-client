/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'

const BookingCard = ({ booking, handleDelete }) => {
  const {
    _id,
    room,
    description,
    date,
    price,
    room_size,
    availability,
    images1,
    special_offers,
  } = booking

  return (
    <>
      <div className='flex flex-col max-w-2xl mx-auto overflow-hidden border rounded'>
        <div className='items-center justify-between px-5 pt-4 sm:flex'>
          <h1 className='inline-block mb-2 text-2xl font-bold transition duration-500 ease-in-out sm:w-8/12 text-md hover:text-indigo-600'>
            {room}
          </h1>

          <div className='flex items-center pb-4 sm:px-6'>
            <div className='text-md'>
              <h1 className='font-bold leading-none text-gray-900 hover:text-indigo-600'>
                ${price}
              </h1>
              <h2 className='py-2 text-xs text-gray-600'>{date}</h2>
            </div>
          </div>
        </div>

        <div className='relative'>
          <Link>
            <img
              className='w-full'
              src={images1}
              alt='Sunset in the mountains'
            />
          </Link>
          <Link
            to={`/updateBooking/${_id}`}
            className='absolute bottom-0 left-0 z-10 items-center px-6 py-2 m-2 text-xs text-white transition duration-500 ease-in-out bg-indigo-600 hover:bg-white hover:text-indigo-600 sm:flex'
          >
            <span className='text-lg'>|</span>&nbsp;&nbsp;<span>Update</span>
          </Link>

          <button
            onClick={() => handleDelete(_id, date)}
            className='absolute bottom-0 right-0 z-10 items-center px-6 py-2 m-2 text-xs text-white transition duration-500 ease-in-out bg-indigo-600 hover:bg-white hover:text-indigo-600 sm:flex'
          >
            <span className='text-lg'>|</span>&nbsp;&nbsp;<span>Cancel</span>
          </button>
        </div>
      </div>
    </>
  )
}
export default BookingCard
