const Contact = () => {
  const servicesItems = [
    'Hotel Booking',
    'Sight Seeing',
    'Relaxation',
    'Reunion',
  ]

  return (
    <main className='container flex p-8 mx-auto overflow-hidden'>
      <div className='flex-1 hidden lg:block'>
        <img
          src='https://images.pexels.com/photos/1697076/pexels-photo-1697076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          className='object-cover w-full h-screen rounded-md'
        />
      </div>
      <div className='flex-1 py-12 lg:flex lg:justify-center lg:h-screen lg:overflow-auto'>
        <div className='flex-1 max-w-lg px-4 mx-auto text-gray-600'>
          <div>
            <h3 className='text-3xl font-semibold text-gray-800 sm:text-4xl'>
              Get in touch
            </h3>
            <p className='mt-3'>
              We’d love to hear from you! Please fill out the form below.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className='mt-12 space-y-5 lg:pb-12'
          >
            <div>
              <label className='font-medium'>Full name</label>
              <input
                type='text'
                required
                className='w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none focus:border-gray-800'
              />
            </div>
            <div>
              <label className='font-medium'>Email</label>
              <input
                type='email'
                required
                className='w-full px-3 py-2 mt-2 text-gray-500 bg-transparent border rounded-lg shadow-sm outline-none focus:border-gray-800'
              />
            </div>
            <div>
              <label className='font-medium'>Phone number</label>
              <div className='relative mt-2'>
                <div className='absolute inset-y-0 flex items-center h-6 pr-2 my-auto border-r left-3'>
                  <select className='h-full text-sm bg-transparent rounded-lg outline-none'>
                    <option>US</option>
                    <option>ES</option>
                    <option>MR</option>
                  </select>
                </div>
                <input
                  type='number'
                  placeholder='+1 (555) 000-000'
                  required
                  className='w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg'
                />
              </div>
            </div>
            <div>
              <label className='font-medium'>Services</label>
              <ul className='grid flex-wrap grid-cols-2 mt-3 gap-y-2 gap-x-6'>
                {servicesItems.map((item, idx) => (
                  <li key={idx} className='flex text-sm gap-x-3'>
                    <div>
                      <input
                        id={`service-${idx}`}
                        type='checkbox'
                        className='hidden checkbox-item peer'
                      />
                      <label
                        htmlFor={`service-${idx}`}
                        className='relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45'
                      ></label>
                    </div>
                    <label
                      htmlFor={`service-${idx}`}
                      className='cursor-pointer'
                    >
                      {item}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <label className='font-medium'>Message</label>
              <textarea
                required
                className='w-full px-3 py-2 mt-2 bg-transparent border rounded-lg shadow-sm outline-none appearance-none resize-none h-36 focus:border-gray-800'
              ></textarea>
            </div>
            <button className='w-full px-4 py-2 font-medium text-white duration-150 bg-gray-800 rounded-lg hover:bg-gray-700 active:bg-gray-900'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Contact
