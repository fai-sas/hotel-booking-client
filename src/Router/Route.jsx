/* eslint-disable no-unused-vars */
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../Pages/HomePage'
import Rooms from '../Pages/Rooms'
import SingleRoom from '../Pages/SingleRoom'

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
    ],
  },
])

export default Route
