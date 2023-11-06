const Gallery = () => {
  return (
    <div className='py-6 bg-white  dark:bg-gray-800 sm:py-8 lg:py-12'>
      <div className='px-4 mx-auto max-w-screen-2xl md:px-8'>
        <div className='flex items-center justify-between gap-8 mb-4 sm:mb-8 md:mb-12'>
          <div className='flex items-center gap-12'>
            <h2 className='text-2xl font-semibold leading-loose text-center text-gray-800 lg:text-3xl dark:text-white'>
              Get a sneak peek of our stunning hotel through our image gallery.
              From luxurious rooms and exquisite dining to breathtaking views
              and relaxing facilities, we invite you to take a virtual tour of
              what awaits you at our hotel. These images capture the essence of
              our hospitality and the unforgettable experiences that await your
              visit.
            </h2>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8'>
          <p className='relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:h-80'>
            <img
              src='https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              loading='lazy'
              alt='Photo by Minh Pham'
              className='absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110'
            />

            <div className='absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent'></div>

            <span className='relative inline-block mb-3 ml-4 text-sm text-white md:ml-5 md:text-lg'>
              Cozy
            </span>
          </p>

          <p className='relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:col-span-2 md:h-80'>
            <img
              src='https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              loading='lazy'
              alt='Photo by Magicle'
              className='absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110'
            />

            <div className='absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent'></div>

            <span className='relative inline-block mb-3 ml-4 text-sm text-white md:ml-5 md:text-lg'>
              Luxury
            </span>
          </p>

          <p className='relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:col-span-2 md:h-80'>
            <img
              src='https://plus.unsplash.com/premium_photo-1661964475795-f0cb85767a88?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              loading='lazy'
              alt='Photo by Martin Sanchez'
              className='absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110'
            />

            <div className='absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent'></div>

            <span className='relative inline-block mb-3 ml-4 text-sm text-white md:ml-5 md:text-lg'>
              Quality Time
            </span>
          </p>

          <p className='relative flex items-end h-48 overflow-hidden bg-gray-100 rounded-lg shadow-lg group md:h-80'>
            <img
              src='https://images.unsplash.com/photo-1498503182468-3b51cbb6cb24?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              loading='lazy'
              alt='Photo by Lorenzo Herrera'
              className='absolute inset-0 object-cover object-center w-full h-full transition duration-200 group-hover:scale-110'
            />

            <div className='absolute inset-0 opacity-50 pointer-events-none bg-gradient-to-t from-gray-800 via-transparent to-transparent'></div>

            <span className='relative inline-block mb-3 ml-4 text-sm text-white md:ml-5 md:text-lg'>
              Relax
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Gallery
