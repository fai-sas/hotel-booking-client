import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='  container flex flex-col md:flex-row justify-center items-center min-h-screen mx-auto '>
      <img
        src='https://i.ibb.co/6497y9K/Location-search-re-ttoj.png'
        className='md:w-1/2'
        alt=''
      />
      <div className='text-center py-10 px-4 sm:px-6 lg:px-8 md:w-1/2'>
        <h1 className='block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white'>
          404
        </h1>
        <h1 className='block text-2xl font-bold text-white'></h1>
        <p className='mt-3 text-gray-600 dark:text-gray-400'>
          Oops, something went wrong.
        </p>
        <p className='text-gray-600 text-lg dark:text-gray-400'>
          Sorry, we could not find the page you were looking for
        </p>
        <div className='mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3'>
          <Link
            to='/'
            className='w-full sm:w-auto inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800'
          >
            Back Home
          </Link>
        </div>
      </div>
    </div>
  )
}
export default ErrorPage
