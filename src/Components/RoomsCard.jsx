/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const RoomsCard = ({ rooms }) => {
  const { name, description, price_per_night, images } = rooms

  return (
    <div className='p-4 border rounded-lg shadow-md'>
      <h3 className='text-2xl font-bold'>{name}</h3>
      <p className='text-gray-600'>{description}</p>
      <p className='text-2xl font-bold'>Price: ${price_per_night} per night</p>
      <div className='grid grid-cols-3 gap-2'>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Room ${name} Image`} />
        ))}
      </div>
    </div>
  )
}
export default RoomsCard
