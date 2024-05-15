import React from 'react'
import MyNavbar from '../../components/Navbar'
import img1 from './images/img-1.png'
import img2 from './images/img-2.png'
import img3 from './images/img-3.png'
import img4 from './images/img-4.png'
import img5 from './images/img-5.png'
import img6 from './images/img-6.png'
import img7 from './images/img-7.png'
import img8 from './images/img-8.png'
import img9 from './images/img-9.png'
import img10 from './images/img-10.png'
import img11 from './images/img11.png'
import img12 from './images/img-12.png'
import Mycarousel from '../../components/Slider'
import '../screen-style/style.css'



const Home = () => {
  return (
    <>
    <MyNavbar/>


    {/* Section 1 */}
    <div className='container sec-1-main '>

      <div className=' pr-24 pl-7  pt-4 pb-10 bg-white'>
      <p  className='text-[15px] mb-3'>TOP CATEGORIES</p>
      <ul className='text-[11px]'>
        <li className='mb-2 mt-2 flex  h-5'> <img src= {img1} alt="" />&nbsp; Mobile</li>
        <li className='mb-2 mt-2 flex h-5'> <img src={img2} alt="" />&nbsp; Men's</li>
        <li className='mb-2 mt-2 flex h-5'><img src={img3} alt="" />&nbsp; Women's </li>
        <li className='mb-2 mt-2 flex h-5'><img src={img4} alt="" />&nbsp; Appliance</li>
        <li className='mb-2 mt-2 flex h-5'><img src={img5} alt="" />&nbsp; TV & Video</li>
        <li className='mb-2 mt-2 flex h-5'> <img src={img6} alt="" />&nbsp; Kids'mart</li>
        <li className='mb-2 mt-2 flex h-5'> <img src={img7} alt="" />&nbsp; Home</li>
        <li className='mb-2 mt-2 flex h-5'> <img src={img8} alt="" />&nbsp; Computer </li>
        <li className='mb-2 mt-2 flex h-5'> <img src={img9} alt="" />&nbsp; Automotive</li>
        <li className='mb-2 mt-2 flex h-5'> <img src={img10} alt="" />&nbsp; Health Care</li>
        <li className='mb-2 mt-2 flex h-5'> <img src={img11} alt="" />&nbsp; Camera</li>
        <li className='flex h-5'><img src={img12} alt="" />&nbsp;HomeTheatre</li>
      </ul>
      </div>

      <Mycarousel/>

      <div className='ms-10 jubilee'>
        <img className='mb-3 w-[65%]' src="https://d1iv6qgcmtzm6l.cloudfront.net/banner_desktops/Pss29KOUe9q7NUb6ofEZoZsH3nos5RqzkDYreS6A.jpg" alt="" />
        <img className='w-[65%]' src="https://d1iv6qgcmtzm6l.cloudfront.net/banner_desktops/mmXTIEuB8lzTJM1mXhXJVxdN4g3pp8huq9FWMqUO.png" alt="" />
      </div>
    

    </div>
    </>
  )
}

export default Home