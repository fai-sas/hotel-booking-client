/* eslint-disable no-unused-vars */
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'
import useAuth from '../Hooks/useAuth'
import useAxiosSecure from '../Hooks/useAxiosSecure'
import { Helmet } from 'react-helmet'

const UpdateBooking = () => {
  const { user } = useAuth()
  const booking = useLoaderData()
  const axiosSecure = useAxiosSecure()

  const {
    _id,
    id,
    room,
    description,
    date,
    price,
    room_size,
    availability,
    images1,
    special_offers,
  } = booking

  function getCurrentDate() {
    const now = new Date()
    const year = now.getFullYear()
    const month = (now.getMonth() + 1).toString().padStart(2, '0')
    const day = now.getDate().toString().padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  const handleUpdateBooking = async (e) => {
    e.preventDefault()
    const form = e.target

    const date = form.date.value

    const updatedBooking = {
      date,
    }
    console.log(updatedBooking)

    try {
      const response = await axiosSecure.patch(
        `/bookings/${_id}`,
        updatedBooking
      )
      console.log(response.data)
      if (response.data.modifiedCount) {
        Swal.fire({
          title: 'Success!',
          text: 'Booking Updated Successfully',
          icon: 'success',
          confirmButtonText: 'Cool',
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Helmet>
        <title>Update Booking {room}</title>
      </Helmet>
      <section className='container grid gap-4 p-8 mx-auto my-12 lg:grid-cols-2'>
        <article>
          <h1 className='my-8 text-2xl font-black text-transparent lg:text-5xl bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-500'>
            Update Booking: {room}
          </h1>

          <form onSubmit={handleUpdateBooking}>
            {/* <form> */}
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
                  defaultValue={user?.displayName}
                  className='block w-full px-5 py-3 text-base placeholder-gray-800 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
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
                  className='block w-full px-5 py-3 my-2 text-base placeholder-gray-800 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
                />
              </div>

              <div>
                <label htmlFor='price'>Price</label>
                <input
                  type='number'
                  name='price'
                  id='price'
                  disabled
                  defaultValue={price}
                  className='block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
                  placeholder='price'
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
                  defaultValue={date}
                  min={getCurrentDate()}
                  required
                  className='block w-full px-5 py-3 my-2 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
                />
              </div>
              <div className='flex flex-col mt-4 lg:space-y-2'>
                <button
                  type='submit'
                  className='flex items-center justify-center w-full px-10 py-4 my-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                >
                  Update Booking
                </button>
              </div>
            </div>
          </form>
        </article>
        <img className='rounded-lg' src={images1} alt='' />
      </section>
    </>
  )
}
export default UpdateBooking
