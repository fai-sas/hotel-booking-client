import { Helmet } from 'react-helmet'

const Pricing = () => {
  const plans = [
    {
      name: 'Luxury Suite',
      desc: 'Experience the pinnacle of comfort and luxury in our spacious suites.',
      price: 320,
      isMostPop: true,
      features: [
        'Private balcony with a view',
        '24/7 concierge service',
        'Access to the spa and fitness center',
        'Complimentary breakfast',
        'In-room dining service',
        'Luxurious king-sized bed',
        'Free airport shuttle',
      ],
    },
    {
      name: 'Standard Room',
      desc: 'Enjoy a comfortable stay in our standard rooms with essential amenities.',
      price: 120,
      isMostPop: false,
      features: [
        'Cozy queen-sized bed',
        'Free Wi-Fi access',
        'Daily housekeeping',
        'Flat-screen TV with cable channels',
        'In-room coffee maker',
        'Mini fridge',
        'Private bathroom with toiletries',
      ],
    },
  ]

  return (
    <>
      <Helmet>
        <title>Hotel Booking | Pricing</title>
      </Helmet>
      <section className='container relative p-8 mx-auto my-16 bg-gray-900 rounded-lg py-14'>
        <div
          className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]'
          style={{
            background:
              'linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)',
          }}
        ></div>
        <div className='relative max-w-screen-xl mx-auto text-gray-300 sm:px-4 md:px-8'>
          <div className='max-w-xl px-4 mx-auto space-y-3 sm:text-center sm:px-0'>
            <h3 className='font-semibold text-cyan-400'>Pricing</h3>
            <p className='text-3xl font-semibold text-white sm:text-4xl'>
              Pay as you go
            </p>
          </div>
          <div className='justify-center mt-16 sm:flex'>
            {plans.map((item, idx) => (
              <div
                key={idx}
                className={`relative flex-1 flex items-stretch flex-col mt-6 border-2 sm:mt-0 sm:rounded-xl sm:max-w-md ${
                  item.isMostPop
                    ? 'bg-gray-900 border-cyan-400 border-x-0 sm:border-x-2'
                    : 'border-transparent'
                }`}
              >
                <div className='p-4 py-8 space-y-4 border-b border-gray-700 md:p-8'>
                  <span className='font-medium text-gray-200'>{item.name}</span>
                  <div className='text-3xl font-semibold text-cyan-400'>
                    ${item.price}{' '}
                    <span className='text-xl font-normal'>/mo</span>
                  </div>
                  <p className='text-gray-400'>{item.desc}</p>
                  <button className='w-full px-3 py-3 text-sm font-semibold text-white duration-150 rounded-lg bg-cyan-500 hover:bg-cyan-600 active:bg-cyan-700'>
                    Get Started
                  </button>
                </div>
                <ul className='p-4 py-8 space-y-3 md:p-8'>
                  {item.features.map((featureItem, idx) => (
                    <li key={idx} className='flex items-center gap-5'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className={`h-5 w-5 ${
                          item.isMostPop ? 'text-cyan-600' : ''
                        }`}
                        viewBox='0 0 20 20'
                        fill='currentColor'
                      >
                        <path
                          fill-rule='evenodd'
                          d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                          clip-rule='evenodd'
                        ></path>
                      </svg>
                      {featureItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing
