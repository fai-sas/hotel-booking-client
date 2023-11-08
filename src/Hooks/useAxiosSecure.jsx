/* eslint-disable no-unused-vars */
import axios from 'axios'
import useAuth from './useAuth'
import { useNavigate } from 'react-router-dom'

const instance = axios.create({
  baseURL: 'https://hotel-booking-server-rho.vercel.app/api/v1',
  withCredentials: true,
})

const useAxiosSecure = () => {
  const { logOut } = useAuth()
  const navigate = useNavigate()

  instance.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (error.response.status === 401 || error.response.status === 403) {
        logOut()
        navigate('/login')
      }
    }
  )
  return instance
}
export default useAxiosSecure
