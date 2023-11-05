/* eslint-disable no-unused-vars */
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../Pages/HomePage'
import Rooms from '../Pages/Rooms'
import SingleRoom from '../Pages/SingleRoom'
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import Bookings from '../Pages/Bookings'
import BookRoom from '../Pages/BookRoom'
import MyBookings from '../Pages/MyBookings'
import UpdateBooking from '../Pages/UpdateBooking'

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'rooms',
        element: <Rooms />,
      },
      {
        path: 'singleRoom/:id',
        element: <SingleRoom />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/get-rooms/${params.id}`),
      },
      {
        path: 'bookings',
        element: <Bookings />,
      },
      {
        path: 'bookRoom/:id',
        element: <BookRoom />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/get-rooms/${params.id}`),
      },
      {
        path: 'userBookings',
        element: <MyBookings />,
      },
      {
        path: '/updateBooking/:id',
        element: <UpdateBooking />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/api/v1/bookings/${params.id}`),
      },
    ],
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: 'login',
    element: <Login />,
  },
])

export default Route
