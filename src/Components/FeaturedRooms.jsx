/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom'
import useGetRooms from '../Hooks/useGetRooms'

const FeaturedRooms = () => {
  const { data: rooms, isLoading } = useGetRooms()

  const featuredRooms = rooms?.filter((room) => room.featured_room)

  if (isLoading) {
    return (
      <h1 className='container p-8 mx-auto text-4xl font-bold text-center'>
        Loading
      </h1>
    )
  }

  return (
    <>
      <div className='px-6 my-10 space-y-4 md:px-0'>
        <h2 className='text-2xl font-bold text-center text-gray-800 dark:text-white md:text-4xl'>
          Our Featured Rooms
        </h2>
      </div>

      <div className='container grid grid-cols-1 gap-8 p-8 mx-auto lg:grid-cols-3'>
        {featuredRooms?.map((room) => {
          return (
            <>
              <div className=''>
                <div className='flex flex-col max-w-xl mx-auto overflow-hidden rounded'>
                  <img src={room?.image1} alt='' />
                  <div className='relative px-10 pt-5 pb-16 m-10 -mt-16 bg-white rounded-lg shadow-md'>
                    <h1 className='inline-block mb-2 text-2xl font-bold transition duration-500 ease-in-out hover:text-indigo-600'>
                      {room?.name}
                    </h1>
                    <p className='text-lg leading-relaxed text-gray-500'>
                      {room?.description.slice(0, 50)}...
                    </p>

                    <div className='flex justify-between mt-5 text-gray-600 text-md'>
                      <p className='text-indigo-600 transition duration-500 ease-in-out '>
                        Price: ${room?.price_per_night}
                      </p>
                      <Link to={`bookRoom/${room?._id}`}>
                        <p className='text-indigo-600 transition duration-500 ease-in-out '>
                          Book Now
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </>
  )
}
export default FeaturedRooms
