/* eslint-disable no-unused-vars */
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import Swal from 'sweetalert2'
import useAuth from '../Hooks/useAuth'
import useAxiosSecure from '../Hooks/useAxiosSecure'

const UpdateBooking = () => {
  const { user } = useAuth()
  const booking = useLoaderData()
  const axiosSecure = useAxiosSecure()

  const {
    _id,
    name,
    description,
    date,
    price_per_night,
    room_size,
    availability,
    images,
    special_offers,
  } = booking

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

  // const handleUpdateBooking = (id) => {
  //   fetch(`http://localhost:5000/api/v1/bookings/${id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'content-type': 'application/json',
  //     },
  //     body: JSON.stringify({ status: 'confirm' }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       if (data.modifiedCount > 0) {
  //         // update state
  //         Swal.fire({
  //           title: 'Success!',
  //           text: 'Booking Updated Successfully',
  //           icon: 'success',
  //           confirmButtonText: 'Cool',
  //         })
  //       }
  //     })
  // }

  return (
    <>
      <h1 className='text-3xl text-center'>Update Booking: {description} </h1>
      <form onSubmit={handleUpdateBooking}>
        {/* <form> */}
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

          {/* <div>
            <label htmlFor='price'>Price</label>
            <input
              type='number'
              name='price'
              id='price'
              defaultValue={price_per_night}
              className='block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
              placeholder='price'
            />
          </div> */}
          <div>
            <label htmlFor='Date'>Date</label>
            <input
              type='date'
              name='date'
              id='date'
              defaultValue={date}
              className='block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
            />
          </div>
          <div className='flex flex-col mt-4 lg:space-y-2'>
            <button
              type='submit'
              className='flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
            >
              Update Booking
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
export default UpdateBooking
