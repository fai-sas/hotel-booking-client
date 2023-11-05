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
        <h1 className='pb-4 font-light lg:text-6xl'>Welcome to our Hotel</h1>
        <Link to='/rooms'>
          <button>Book Now</button>
        </Link>
      </div>
    </section>
  )
}
export default Banner
