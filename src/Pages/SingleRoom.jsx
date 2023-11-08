/* eslint-disable no-unused-vars */
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import useAuth from '../Hooks/useAuth'
import CommentBox from '../Components/CommentBox'
import { Helmet } from 'react-helmet'

const SingleRoom = () => {
  const { user } = useAuth()
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
    <>
      <Helmet>
        <title> Hotel Booking | {name}</title>
      </Helmet>
      <section className='container p-8 mx-auto'>
        <h1 className='my-8 text-2xl font-black text-transparent lg:text-5xl bg-clip-text bg-gradient-to-r from-indigo-500 to-teal-500'>
          {name}
        </h1>

        <header
          className='relative block p-6 mx-auto my-8 text-white bg-gray-900 border border-gray-100 rounded-lg'
          href='#'
        >
          <div className='flex flex-wrap justify-around gap-4'>
            <h2>
              {availability ? `Available: ${availability}` : 'Not Available'}
            </h2>
            <p>Price: ${price_per_night}</p>
            <p>Size: {room_size}</p>
            <p>Reviews: {reviews?.length || 'No Reviews Yet!'} </p>
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

              {availability ? (
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
              ) : (
                <div className='relative inline-flex '>
                  <div className='absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt'></div>
                  <button
                    to={`/bookRoom/${_id}`}
                    className='relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900'
                    role='button'
                    disabled
                  >
                    Not Available
                  </button>
                </div>
              )}
            </div>
          </div>
        </article>

        {/* reviews */}

        <h1 className='py-8 text-2xl font-bold'>
          What our customers are saying:
        </h1>

        {reviews?.length > 0 ? (
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
            {reviews.map((review, index) => (
              <div key={index} className='review'>
                <figure className='relative p-6 bg-white shadow-xl rounded-2xl shadow-slate-900/10'>
                  <svg
                    aria-hidden='true'
                    width='105'
                    height='78'
                    className='absolute top-6 left-6 fill-slate-100'
                  >
                    <path d='M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z'></path>
                  </svg>
                  <blockquote className='relative'>
                    <p className='text-lg font-bold tracking-tight text-slate-900'>
                      {review.comment}
                    </p>
                  </blockquote>
                  <figcaption className='relative flex items-center justify-between pt-6 mt-6 border-t border-slate-100'>
                    <div>
                      <div className='text-base font-display text-slate-900'>
                        {review.username}
                      </div>
                      <div className='mt-1 text-sm text-slate-500'>
                        Rating: {review.rating}
                      </div>
                    </div>
                    <div className='overflow-hidden rounded-full bg-slate-50'>
                      <img
                        alt=''
                        src={user?.photoURL}
                        // src='https://i.pravatar.cc/300'
                        className='object-cover h-14 w-14'
                        loading='lazy'
                        width='56'
                        height='56'
                      />
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        ) : (
          <div className='no-reviews-message'>
            <p className='text-lg font-bold'>
              Be the first one to review, book now
            </p>
          </div>
        )}
        {/* end of review */}
        {!user && <h1 className='py-8 text-2xl font-bold'>Login to comment</h1>}

        {user && <CommentBox roomId={_id} />}
      </section>
    </>
  )
}
export default SingleRoom
