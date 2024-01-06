/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { toast } from 'react-toastify'
import useAuth from '../Hooks/useAuth'
import { useEffect, useState } from 'react'
import axios from 'axios'
import useGetReviews from '../Hooks/useGetReviews'

const CommentBox = (props) => {
  const { user } = useAuth()
  const { data, isLoading, isFetching, refetch } = useGetReviews()

  const handleSubmitComment = async (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const rating = e.target.rating.value
    const comment = e.target.comment.value

    const currentDate = new Date()
    const formattedDate = currentDate.toISOString().split('T')[0]

    const review = {
      name,
      rating,
      comment,
      email: user?.email,
      room_id: props.roomId,
      timestamp: formattedDate,
      profilePicture: user?.photoURL,
    }

    fetch(
      'https://hotel-booking-server-rho.vercel.app/api/v1/reviews',

      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(review),
        credentials: 'include',
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.insertedId) {
          refetch()
          toast.success('Successfully Reviewed')
        } else {
          toast.error(data.message)
        }
      })
      .catch((error) => {
        toast.error('Error during review:', error)
      })
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
              Rating
            </label>
            <input
              className='w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:border-gray-500'
              id='rating'
              name='rating'
              type='number'
              placeholder='Enter your rating'
              defaultValue={5}
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
