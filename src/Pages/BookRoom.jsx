/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'
import { toast } from 'react-toastify'
import axios from 'axios'

const BookRoom = () => {
  const { user } = useAuth()
  const roomData = useLoaderData()

  const {
    _id,
    id,
    name,
    description,
    price_per_night,
    room_size,
    availability,
    image1,
    image2,
    image3,
    special_offers,
  } = roomData

  const handleBookService = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const date = form.date.value
    const email = user?.email

    const booking = {
      customerName: user?.displayName,
      email,
      images1: image1,
      images2: image2,
      images3: image3,
      date,
      room: name,
      room_id: _id,
      price: price_per_night,
      description,
      room_size,
    }

    console.log(booking)

    fetch(
      'https://hotel-booking-server-rho.vercel.app/api/v1/bookings',

      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(booking),
      }
    )
      // axios
      //   .post('https://hotel-booking-server-rho.vercel.app/api/v1/bookings, bookings')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.insertedId) {
          toast.success('Successfully Booked')
        }
      })
  }

  return (
    <section className='container grid gap-4 p-8 mx-auto my-12 lg:grid-cols-2'>
      <article>
        <h1 className='my-8 text-2xl font-black text-transparent lg:text-5xl bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-500'>
          Book Room: {name}
        </h1>

        <form onSubmit={handleBookService}>
          <div className='mt-6 space-y-2'>
            <div>
              <label className='text-lg font-bold' htmlFor='name'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                disabled
                defaultValue={name}
                className='block w-full px-5 py-3 my-2 text-base placeholder-gray-800 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
                placeholder='Enter your name'
              />
            </div>
            <div>
              <label className='text-lg font-bold' htmlFor='name'>
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                disabled
                defaultValue={user?.email}
                className='block w-full px-5 py-3 my-2 text-base placeholder-gray-800 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-30'
              />
            </div>
            <div>
              <label className='text-lg font-bold' htmlFor='price'>
                Price
              </label>
              <input
                type='number'
                name='price'
                id='price'
                disabled
                defaultValue={price_per_night}
                className='block w-full px-5 py-3 my-2 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
                placeholder='Enter your email'
              />
            </div>
            <div>
              <label className='text-lg font-bold' htmlFor='Date'>
                Date
              </label>
              <input
                type='date'
                name='date'
                id='date'
                required
                defaultValue={price_per_night}
                className='block w-full px-5 py-3 my-2 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
              />
            </div>
            <div className='flex flex-col mt-4 lg:space-y-2'>
              <button type='submit' className='relative'>
                <span className='absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-700 rounded'></span>
                <span className='relative inline-block w-full h-full px-3 py-1 text-lg font-bold text-white transition duration-100 bg-black border-2 border-black rounded fold-bold hover:bg-gray-900 hover:text-yellow-500 dark:bg-black'>
                  Book Now
                </span>
              </button>
            </div>
          </div>
        </form>
      </article>
      <img className='rounded-lg' src={image2} alt='' />
    </section>
  )
}
export default BookRoom
