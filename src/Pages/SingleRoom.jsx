/* eslint-disable no-unused-vars */
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const SingleRoom = () => {
  const roomData = useLoaderData()

  const {
    _id,
    description,
    price_per_night,
    room_size,
    availability,
    images,
    special_offers,
  } = roomData

  return (
    <div>
      <h1>{_id}</h1>
      <h1>{description}</h1>
      <h1>{price_per_night}</h1>
      <h1>{room_size}</h1>
      <h1>{availability}</h1>
      <h1>{special_offers}</h1>
      <div className='grid grid-cols-3 gap-2 mx-16'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className='object-cover w-48 h-48'
            alt={`Room ${description} Image`}
          />
        ))}
      </div>
      <Link to={`/bookRoom/${_id}`}>
        <button className='block p-2 mx-auto my-8 bg-green-400 rounded-xl'>
          Book Now
        </button>
      </Link>
    </div>
  )
}
export default SingleRoom
