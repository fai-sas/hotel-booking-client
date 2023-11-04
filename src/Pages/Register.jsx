import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <section>
      <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24'>
        <div className='justify-center mx-auto text-left align-bottom transition-all transform bg-white rounded-lg sm:align-middle sm:max-w-2xl sm:w-full'>
          <div className='grid flex-wrap items-center justify-center grid-cols-1 mx-auto shadow-xl lg:grid-cols-2 rounded-xl'>
            <div className='w-full px-6 py-3'>
              <div>
                <div className='mt-3 text-left sm:mt-5'>
                  <div className='inline-flex items-center w-full'>
                    <h3 className='text-lg font-bold leading-6 text-neutral-600 lg:text-5xl'>
                      Sign up
                    </h3>
                  </div>
                </div>
              </div>

              <div className='mt-6 space-y-2'>
                <div>
                  <label htmlFor='email' className='sr-only'>
                    Email
                  </label>
                  <input
                    type='text'
                    name='email'
                    id='email'
                    className='block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
                    placeholder='Enter your email'
                  />
                </div>
                <div>
                  <label htmlFor='password' className='sr-only'>
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    className='block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300'
                    placeholder='Enter your password'
                  />
                </div>
                <div className='flex flex-col mt-4 lg:space-y-2'>
                  <button
                    type='button'
                    className='flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                  >
                    Sign up
                  </button>
                  <Link
                    to='/login'
                    href='#'
                    type='button'
                    className='inline-flex justify-center py-4 text-base font-medium text-gray-500 focus:outline-none hover:text-neutral-600 focus:text-blue-600 sm:text-sm'
                  >
                    {' '}
                    Already have an account? Sign In Here
                  </Link>
                </div>
              </div>
            </div>
            <div className='order-first hidden w-full lg:block'>
              <img
                className='object-cover h-full bg-cover rounded-l-lg'
                src='https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Register
