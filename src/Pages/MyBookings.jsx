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
  const [bookings, setBookings] = useState([])
  const axiosSecure = useAxiosSecure()

  // const url = `http://localhost:5000/api/v1/bookings?email=${user?.email}`
  const url = `/bookings?email=${user?.email}`

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
          const response = await axios.delete(
            `http://localhost:5000/api/v1/delete-booking/${id}`
          )

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
    <div>
      <h1>Please find your booking list</h1>
      {bookings.map((booking) => {
        return (
          <BookingCard
            key={booking._id}
            booking={booking}
            handleDelete={handleDelete}
          />
        )
      })}
    </div>
  )
}
export default MyBookings
