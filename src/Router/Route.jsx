/* eslint-disable no-unused-vars */
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../Pages/HomePage'
import Rooms from '../Pages/Rooms'
import SingleRoom from '../Pages/SingleRoom'
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import BookRoom from '../Pages/BookRoom'
import MyBookings from '../Pages/MyBookings'
import ErrorPage from '../Pages/ErrorPage'
import UpdateBooking from '../Pages/UpdateBooking'
import PrivateRoute from './PrivateRoute'
import Bookings from '../Pages/Bookings'
import Contact from '../Pages/Contact'
import Pricing from '../Pages/Pricing'

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/rooms',
        element: <Rooms />,
      },
      {
        path: '/singleRoom/:id',
        element: <SingleRoom />,
        loader: ({ params }) =>
          fetch(
            `https://hotel-booking-server-rho.vercel.app/api/v1/get-rooms/${params.id}`
          ),
      },
      {
        path: '/bookings',
        element: (
          <PrivateRoute>
            {' '}
            <Bookings />
          </PrivateRoute>
        ),
      },
      {
        path: '/bookRoom/:id',
        element: (
          <PrivateRoute>
            <BookRoom />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://hotel-booking-server-rho.vercel.app/api/v1/get-rooms/${params.id}`
          ),
      },
      {
        path: '/userBookings',
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
      {
        path: '/updateBooking/:id',
        element: (
          <PrivateRoute>
            <UpdateBooking />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://hotel-booking-server-rho.vercel.app/api/v1/bookings/${params.id}`
          ),
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/pricing',
        element: <Pricing />,
      },
    ],
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default Route
