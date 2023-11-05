/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from 'react-router-dom'

const RoomsCard = ({ rooms }) => {
  const { _id, name, description, price_per_night: price, images } = rooms

  return (
    <>
      <Link to={`/singleRoom/${_id}`}>
        <div className='p-4 border rounded-lg shadow-md'>
          <h3 className='text-2xl font-bold'>{name}</h3>
          <p className='text-gray-600'>{description}</p>
          <p className='text-2xl font-bold'>Price: ${price} per night</p>
          <div className='grid grid-cols-3 gap-2'>
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Room ${name} Image`} />
            ))}
          </div>
        </div>
      </Link>
    </>
  )
}
export default RoomsCard
