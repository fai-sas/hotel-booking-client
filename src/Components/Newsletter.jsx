import { toast } from 'react-toastify'

const Newsletter = () => {
  const clickHandler = (e) => {
    e.preventDefault()
    toast.success('Thanks for Subscribing')
  }

  return (
    <div className='relative my-16 bg-violet-600'>
      <div className='absolute inset-x-0 bottom-0'>
        <svg
          viewBox='0 0 224 12'
          fill='currentColor'
          className='w-full -mb-1 text-white'
          preserveAspectRatio='none'
        >
          <path d='M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z'></path>
        </svg>
      </div>
      <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center'>
          <h2 className='mb-6 text-3xl font-bold tracking-tight text-center text-white sm:text-4xl sm:leading-none'>
            Subscribe to our newsletter
          </h2>
          <p className='mb-6 text-base leading-relaxed text-indigo-200 md:text-lg'>
            Be the first to hear about our latest hotel deals, travel
            promotions, and exclusive offers. Subscribe to our newsletter and
            enjoy a regular dose of travel inspiration, along with insider tips
            and insights. Whether you are planning a dream vacation or a quick
            getaway, our newsletter will keep you informed about exciting
            destinations, hotel discounts, and more.
          </p>
          <form
            onSubmit={clickHandler}
            className='flex flex-col items-center w-full mb-4 md:flex-row md:px-16'
          >
            <input
              placeholder='Email'
              type='email'
              name='email'
              required
              className='flex-grow w-full h-12 px-4 mb-3 text-gray-800 transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline'
            />
            <button className='inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-gray-200 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none'>
              Subscribe
            </button>
          </form>
          <p className='max-w-md mb-10 text-xs leading-relaxed tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16'>
            Join our community of travelers today and unlock a world of travel
            possibilities!
          </p>
        </div>
      </div>
    </div>
  )
}
export default Newsletter
