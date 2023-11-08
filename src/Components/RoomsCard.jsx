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
              {availability ? `Available: ${availability}` : 'Not Available'}
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
