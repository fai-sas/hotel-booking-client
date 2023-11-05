/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query'

const useGetRooms = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['getBookings'],
    queryFn: async () => {
      const data = await fetch(`http://localhost:5000/api/v1/get-rooms`)
      return await data.json()
    },
  })
  return { data, isLoading, isFetching, refetch }
}

export default useGetRooms
