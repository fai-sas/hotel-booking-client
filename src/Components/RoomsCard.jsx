/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from 'react-router-dom'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useState } from 'react'

const RoomsCard = ({ rooms }) => {
  const {
    _id,
    name,
    description,
    availability,
    price_per_night: price,
    images,
    image1,
    image2,
    image3,
  } = rooms

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div className='navigation-wrapper'>
        <div ref={sliderRef} className='keen-slider'>
          <div className='rounded-md keen-slider__slide number-slide1'>
            <Link to={`/singleRoom/${_id}`}>
              <img className='object-cover rounded-md' src={image1} alt='' />
            </Link>
          </div>
          <div className='rounded-md keen-slider__slide number-slide2'>
            <Link to={`/singleRoom/${_id}`}>
              <img className='object-cover rounded-md' src={image2} alt='' />
            </Link>
          </div>
          <div className='rounded-md keen-slider__slide number-slide3'>
            <Link to={`/singleRoom/${_id}`}>
              <img className='object-cover rounded-md' src={image3} alt='' />
            </Link>
          </div>
        </div>
        <div className='relative px-10 pt-5 pb-16 m-10 -mt-16 bg-white rounded-lg shadow-md'>
          <h1 className='inline-block mb-2 text-2xl font-bold transition duration-500 ease-in-out hover:text-indigo-600'>
            {name}
          </h1>
          <p className='text-lg leading-relaxed text-gray-500'>
            {description.slice(0, 50)}...
          </p>

          <div className='flex justify-between mt-5 text-gray-600 text-md'>
            <p className='text-indigo-600 transition duration-500 ease-in-out '>
              Price: ${price}
            </p>

            <p className='text-indigo-600 transition duration-500 ease-in-out '>
              Available : {availability}
            </p>
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {/* {loaded && instanceRef.current && (
        <div className='dots'>
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              ></button>
            )
          })}
        </div>
      )} */}

      {/*  */}

      {/* <div className='max-w-screen-xl p-5 mx-auto sm:p-10 md:p-16'>
        <div className='flex flex-col max-w-xl mx-auto overflow-hidden rounded'>
          <a href='#'>
            <img
              className='w-full'
              src='https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=625.0&amp;sharp=10&amp;w=1000'
              alt='Sunset in the mountains'
            />
          </a>
          <div className='relative px-10 pt-5 pb-16 m-10 -mt-16 bg-white'>
            <a
              href='#'
              className='inline-block mb-2 text-lg font-semibold transition duration-500 ease-in-out hover:text-indigo-600'
            >
              The Best Activewear from the Nordstrom Anniversary Sale
            </a>
            <p className='text-sm text-gray-500'>
              Today, I’m covering one of my favorite parts of the Nordstrom
              Anniversary Sale: the activewear!
            </p>
            <p className='mt-5 text-xs text-gray-600'>
              By
              <a
                href='#'
                className='text-xs text-indigo-600 transition duration-500 ease-in-out'
              >
                Mehdi Ahmadi
              </a>{' '}
              | in{' '}
              <a
                href='#'
                className='text-xs text-indigo-600 transition duration-500 ease-in-out'
              >
                Cooking
              </a>
              ,{' '}
              <a
                href='#'
                className='text-xs text-indigo-600 transition duration-500 ease-in-out'
              >
                Recipe
              </a>
            </p>
          </div>
        </div>
      </div> */}

      {/* <Link to={`/singleRoom/${_id}`}>
        <div className='p-4 border rounded-lg shadow-md'>
          <h3 className='text-2xl font-bold'>{name}</h3>
          <p className='text-gray-600'>{description}</p>
          <p className='text-2xl font-bold'>Price: ${price} per night</p>
          <div className='grid grid-cols-3 gap-2'>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Room ${name} Image`} />
            ))}
          </div>
        </div>
      </Link> */}
    </>
  )
}

function Arrow(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : ''
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabeld}`}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
    >
      {props.left && (
        <path d='M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z' />
      )}
      {!props.left && (
        <path d='M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z' />
      )}
    </svg>
  )
}

export default RoomsCard
