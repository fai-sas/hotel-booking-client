/* eslint-disable no-unused-vars */
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const SingleRoom = () => {
  const roomData = useLoaderData()

  const {
    name,
    _id,
    description,
    price_per_night,
    room_size,
    availability,
    images,
    special_offers,
    image1,
    image2,
    image3,
    reviews,
  } = roomData

  return (
    <section className='container p-8 mx-auto'>
      <h1 className='my-8 text-2xl font-black text-transparent lg:text-5xl bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-500'>
        {name}
      </h1>

      <header
        className='relative block p-6 mx-auto my-8 text-white bg-gray-900 border border-gray-100 rounded-lg'
        href='#'
      >
        <div className='flex flex-wrap justify-around gap-4'>
          <h2>Available: {availability}</h2>
          <p>Price: ${price_per_night}</p>
          <p>Size: {room_size}</p>
          {/* <p>Reviews: {reviews ? reviews : 'No Reviews Yet!'}</p> */}
          <p>
            Special Offer:{' '}
            {special_offers ? [...special_offers] : 'Check Later for Offers!'}
          </p>
        </div>
        <span className='absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'></span>
      </header>

      <div className='grid grid-cols-2 gap-4 my-8 sm:grid-cols-3 md:gap-6 xl:gap-8'>
        <article className='relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:col-span-3 md:h-80'>
          <img
            src={image1}
            loading='lazy'
            alt='Photo by Martin Sanchez'
            className='absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110'
          />

          <div className='absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent'></div>
        </article>

        <article className='relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:col-span-2 md:h-80'>
          <img
            src={image2}
            loading='lazy'
            alt='Photo by Martin Sanchez'
            className='absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110'
          />

          <div className='absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent'></div>
        </article>

        <article className='relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:h-80'>
          <img
            src={image3}
            loading='lazy'
            alt='Photo by Lorenzo Herrera'
            className='absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110'
          />

          <div className='absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent'></div>
        </article>
      </div>

      {/*  */}

      <article className='py-20 my-20 text-white bg-gray-900 rounded-md'>
        <div className='max-w-6xl px-4 mx-auto sm:px-6 lg:px-8'>
          <div className='flex flex-col items-center justify-between lg:flex-row'>
            <div className=' lg:w-3/4'>
              <p className='mb-4 text-2xl font-semibold leading-relaxed '>
                {description}
              </p>
            </div>

            {/*  */}
            <div className='relative inline-flex '>
              <div className='absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
              <Link
                to={`/bookRoom/${_id}`}
                className='relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
                role='button'
              >
                Book Now
              </Link>
            </div>
            {/*  */}
          </div>
        </div>

        {/* reviews */}
      </article>
    </section>
  )
}
export default SingleRoom
