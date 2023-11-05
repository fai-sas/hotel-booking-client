/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
import { toast } from 'react-toastify'

const BookRoom = () => {
  const { user } = useAuth()
  const roomData = useLoaderData()

  const {
    _id,
    name,
    description,
    price_per_night,
    room_size,
    availability,
    images,
    special_offers,
  } = roomData

  const handleBookService = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const date = form.date.value
    const email = user?.email

    const booking = {
      customerName: name,
      email,
      images,
      date,
      room: name,
      room_id: _id,
      price: price_per_night,
      description,
      room_size,
    }

    console.log(booking)

    fetch(
      'http://localhost:5000/api/v1/bookings',

      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(booking),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.insertedId) {
          toast.success('Successfully Booked')
        }
      })
  }

  return (
    <>
      <h1 className='text-3xl text-center'>Book Service: {name} </h1>
      <form onSubmit={handleBookService}>
        <div className='mt-6 space-y-2'>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              defaultValue={user?.displayName}
              className='block w-full px-5 py-3 text-base placeholder-gray-800 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
              placeholder='Enter your name'
            />
          </div>
          <div>
            <label htmlFor='name'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              defaultValue={user?.email}
              className='block w-full px-5 py-3 text-base placeholder-gray-800 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
            />
          </div>
          <div>
            <label htmlFor='price'>Price</label>
            <input
              type='number'
              name='price'
              id='price'
              defaultValue={price_per_night}
              className='block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
              placeholder='Enter your email'
            />
          </div>
          <div>
            <label htmlFor='Date'>Date</label>
            <input
              type='date'
              name='date'
              id='date'
              required
              defaultValue={price_per_night}
              className='block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
            />
          </div>
          <div className='flex flex-col mt-4 lg:space-y-2'>
            <button
              type='submit'
              className='flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
              Book Now
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
export default BookRoom
