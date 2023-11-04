/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query'
import useGetRooms from '../Hooks/useGetRooms'
import RoomsCard from '../Components/RoomsCard'

const Rooms = () => {
  const { data: rooms, isLoading } = useGetRooms()

  if (isLoading) {
    return (
      <h1 className='container p-8 mx-auto text-4xl font-bold text-center'>
        Loading
      </h1>
    )
  }

  return (
    <div className='mt-4'>
      <div className='text-center'>
        <h3 className='text-2xl font-bold text-orange-600'>Our Services</h3>
        <h2 className='text-5xl'>Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{' '}
        </p>
        <p>{rooms.length}</p>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {rooms.map((rooms) => (
          <RoomsCard key={rooms._id} rooms={rooms}></RoomsCard>
        ))}
      </div>
    </div>
  )
}
export default Rooms
