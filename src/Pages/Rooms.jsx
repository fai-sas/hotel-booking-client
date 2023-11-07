/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query'
import useGetRooms from '../Hooks/useGetRooms'
import RoomsCard from '../Components/RoomsCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Rooms = () => {
  const { data: rooms, isLoading } = useGetRooms()
  const [priceFilter, setPriceFilter] = useState('')

  const handlePriceFilterChange = (e) => {
    setPriceFilter(e.target.value)
  }

  if (isLoading || rooms === null) {
    return (
      <h1 className='container p-8 mx-auto text-4xl font-bold text-center'>
        Loading
      </h1>
    )
  }

  let filteredRooms = [...rooms]
  if (priceFilter === 'asc') {
    filteredRooms.sort((a, b) => a.price_per_night - b.price_per_night)
  } else if (priceFilter === 'desc') {
    filteredRooms.sort((a, b) => b.price_per_night - a.price_per_night)
  }

  return (
    <div className='container p-8 mx-auto '>
      <div className='mx-auto text-center lg:max-w-4xl'>
        <h2 className='py-4 text-3xl font-bold leading-normal'>
          Select from a range of thoughtfully designed rooms and <br /> suites
          that cater to every travelers preferences.
        </h2>
        <p className='leading-relaxed'>
          Whether you are seeking a cozy retreat, a spacious family suite, or a
          luxurious haven, our hotel has the perfect space for you. Each room is
          elegantly furnished, well-equipped, and designed to provide you with
          comfort and convenience during your stay. Explore our available room
          options and find the perfect match for your next getaway.
        </p>
      </div>
      <div className='px-8 py-4'>
        <label className='mr-4' htmlFor=''>
          Sort by Price
        </label>
        <select onChange={handlePriceFilterChange}>
          <option value='asc'>From Low to High</option>
          <option value='desc'>From High to Low</option>
        </select>
      </div>

      <div className='grid grid-cols-1 gap-4 p-8 lg:grid-cols-3'>
        {filteredRooms?.map((rooms) => (
          <RoomsCard key={rooms._id} rooms={rooms}></RoomsCard>
        ))}
      </div>
    </div>
  )
}
export default Rooms
