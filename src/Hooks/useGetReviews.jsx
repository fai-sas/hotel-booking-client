/* eslint-disable no-unused-vars */
import { useQuery } from '@tanstack/react-query'

const useGetReviews = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ['getReviews'],
    queryFn: async () => {
      const data = await fetch(
        `https://hotel-booking-server-rho.vercel.app/api/v1/reviews`
      )
      return await data.json()
    },
  })
  return { data, isLoading, isFetching, refetch }
}

export default useGetReviews
