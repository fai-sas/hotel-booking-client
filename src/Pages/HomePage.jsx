import { Helmet } from 'react-helmet'
import Banner from '../Components/Banner'
import FeaturedRooms from '../Components/FeaturedRooms'
import Gallery from '../Components/Gallery'
import Map from '../Components/Map'
import Newsletter from '../Components/Newsletter'
import Testimonial from '../Components/Testimonial'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Welcome to Hotel Booking Page</title>
      </Helmet>
      <Banner />
      <Gallery />
      <FeaturedRooms />
      <Testimonial />
      <Map />
      <Newsletter />
    </>
  )
}
export default HomePage
