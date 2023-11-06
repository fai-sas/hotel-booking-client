import { Link } from 'react-router-dom'
import video from '../../src/assets/Video.mp4'

const Banner = () => {
  return (
    <section className='relative flex flex-col items-center justify-center h-screen text-center text-white '>
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden video-docker'>
        <video
          className='absolute object-cover min-w-full min-h-full'
          // src='https://player.vimeo.com/video/201243950?title=0&portrait=0&byline=0&autoplay=1&muted=true'
          src={video}
          type='video/mp4'
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className='z-10 space-y-2 video-content'>
        <h1 className='pb-8 font-light lg:text-6xl'>
          Your Dream Getaway Awaits
        </h1>
        <h1 className='pb-4 font-light leading-normal lg:text-4xl'>
          Discover and Reserve the Perfect Hotel <br />
          for Your Next Adventure
        </h1>
        <Link to='/rooms'>
          <button className='self-center px-4 py-2 m-2 text-2xl text-center text-white bg-indigo-500 rounded-tl-full rounded-br-full text-md'>
            Book Now
          </button>
        </Link>
      </div>
    </section>
  )
}
export default Banner
