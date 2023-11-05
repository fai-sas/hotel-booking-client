/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query'
import useGetRooms from '../Hooks/useGetRooms'
import RoomsCard from '../Components/RoomsCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Rooms = () => {
  const { data: rooms, isLoading } = useGetRooms()

  // const [price, setPrice] = useState('')

  // const getRooms = async () => {
  //   axios.get(
  //     `http://localhost:5000/api/v1/get-rooms?sortField=price&sortOrder=${price}`
  //   )
  // }

  // const {
  //   data: rooms,
  //   isLoading,
  //   isFetching,
  //   refetch,
  // } = useQuery({
  //   queryKey: ['getRooms'],
  //   queryFn: getRooms,
  // })

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
          humour, or random <br /> words which do not look even slightly
          believable.{' '}
        </p>
        <p>{rooms.length}</p>
      </div>

      <div>
        <label htmlFor=''>Price</label>
        <select onChange={(e) => console.log(e.target.value)}>
          <option value='asc'>From Low to High</option>
          <option value='desc'>From High to Low</option>
        </select>
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
