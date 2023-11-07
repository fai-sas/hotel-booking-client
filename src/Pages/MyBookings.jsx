/* eslint-disable no-unused-vars */
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import useAuth from '../Hooks/useAuth'
import { useEffect, useState } from 'react'
import BookingCard from '../Components/BookingCard'
import Swal from 'sweetalert2'
import useAxiosSecure from '../Hooks/useAxiosSecure'

const MyBookings = () => {
  const { user } = useAuth()
  console.log(user)
  const [bookings, setBookings] = useState([])
  const axiosSecure = useAxiosSecure()

  // const url = `http://localhost:5000/api/v1/bookings?email=${user?.email}`
  const url = `/bookings?email=${user?.email}`

  // useEffect(() => {
  //   axiosSecure.get(url).then((res) => setBookings(res?.data))
  // }, [url, axiosSecure])

  useEffect(() => {
    axiosSecure.get(url).then((res) => setBookings(res.data))
  }, [url, axiosSecure])

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Cancel My Booking!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axiosSecure.delete(`/delete-booking/${id}`)

          if (response.data.deletedCount > 0) {
            Swal.fire('Your Booking Has Been Cancelled.', 'success')
            const remaining = bookings.filter((booking) => booking._id !== id)
            setBookings(remaining)
          }
        } catch (error) {
          console.error(error)
        }
      }
    })
  }

  return (
    <div className='container p-8 mx-auto'>
      <h1 className='my-8 text-2xl font-black text-transparent lg:text-5xl bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-500'>
        Find your list of bookings here
      </h1>

      {bookings.length === 0 ? (
        <p className='py-16 text-3xl font-bold text-center'>
          No bookings found.
        </p>
      ) : (
        <article className='grid grid-cols-3 gap-8 lg:'>
          {bookings.map((booking) => {
            return (
              <BookingCard
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
              />
            )
          })}
        </article>
      )}
    </div>
  )
}
export default MyBookings
