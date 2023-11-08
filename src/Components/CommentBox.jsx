/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { toast } from 'react-toastify'
import useAuth from '../Hooks/useAuth'

const CommentBox = ({ roomId }) => {
  console.log(roomId)
  const { user } = useAuth()

  // const handleSubmitComment = (e) => {
  //   e.preventDefault()

  //   const name = e.target.name.value
  //   const comment = e.target.comment.value

  //   const review = {
  //     name,
  //     comment,
  //   }

  //   console.log(review)

  //   fetch(
  //     'https://hotel-booking-server-rho.vercel.app/api/v1/reviews',

  //     {
  //       method: 'POST',
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //       body: JSON.stringify(review),
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data)
  //       if (data.insertedId) {
  //         toast.success('Successfully Review Added')
  //       } else {
  //         toast.error(data.message)
  //       }
  //     })
  //     .catch((error) => {
  //       toast.error('Error:', error)
  //     })
  // }

  const handleSubmitComment = async (e) => {
    e.preventDefault()

    const name = e.target.name.value
    const comment = e.target.comment.value

    const checkBooking = async () => {
      // Make an API call to check if the user has a booking for the current room
      try {
        const response = await fetch(
          `https://hotel-booking-server-rho.vercel.app/api/v1/bookings/check?room_id=${roomId}&user_email=${user?.email}`
        )

        if (response.ok) {
          const data = await response.json()
          return data.hasBooking
        }
      } catch (error) {
        console.error(error)
      }
      return false
    }

    // Check if the user has a booking for the current room
    const hasBooking = await checkBooking()

    if (hasBooking) {
      const review = {
        name,
        comment,
      }

      console.log(review)

      fetch('https://hotel-booking-server-rho.vercel.app/api/v1/reviews', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(review),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          if (data.insertedId) {
            toast.success('Successfully Review Added')
          } else {
            toast.error(data.message)
          }
        })
        .catch((error) => {
          toast.error('Error:', error)
        })
    } else {
      toast.error('You must book this room before posting a review.')
    }
  }

  return (
    <>
      <div className='max-w-xl p-4 mx-auto mt-40 border border-gray-300 rounded-lg'>
        <h2 className='mb-2 text-lg font-medium'>Leave a comment</h2>
        <form onSubmit={handleSubmitComment}>
          <div className='mb-4'>
            <label className='block mb-2 font-medium text-gray-700'>Name</label>
            <input
              className='w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:border-gray-500'
              id='name'
              name='name'
              type='text'
              placeholder='Enter your name'
              defaultValue={user?.displayName}
              disabled
            />
          </div>
          <div className='mb-4'>
            <label className='block mb-2 font-medium text-gray-700'>
              Comment
            </label>
            <textarea
              rows='4'
              required
              name='comment'
              className='w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:border-gray-500'
              placeholder='Enter your comment'
            ></textarea>
          </div>
          <div className='flex justify-end'>
            <button
              className='px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline'
              type='submit'
            >
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </>
  )
}
export default CommentBox
