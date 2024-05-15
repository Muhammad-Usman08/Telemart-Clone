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



const Home = () => {
  return (
    <>
    <MyNavbar/>


    {/* Section 1 */}
    <div className='container'>

      <div className=' px-3 py-4 bg-white'>
      <p>TOP CATEGORIES</p>
      <ul className='text-[13px]'>
        <li className='mb-2 mt-2 flex h-5'> <img src= {img1} alt="" /> Mobile and Tablets</li>
        <li className='mb-2 mt-2 flex h-5'> <img src={img2} alt="" /> Men's Fashion</li>
        <li className='mb-2 mt-2 flex h-5'><img src={img3} alt="" /> Women's Fashion</li>
        <li className='mb-2 mt-2 flex h-5'><img src={img4} alt="" /> Appliances</li>
        <li className='mb-2 mt-2 flex h-5'><img src={img5} alt="" /> TV and Video</li>
        <li className='mb-2 mt-2 flex h-5'> <img src={img6} alt="" /> Kids'mart</li>
        <li className='mb-2 mt-2 flex h-5'> <img src={img7} alt="" /> Home and Living</li>
        <li className='mb-2 mt-2 flex h-5'> <img src={img8} alt="" />Computer and Gaming</li>
        <li className='mb-2 mt-2 flex h-5'> <img src={img9} alt="" />Automotive</li>
        <li className='mb-2 mt-2 flex h-5'> <img src={img10} alt="" />Health Care</li>
        <li className='mb-2 mt-2 flex h-5'> <img src={img11} alt="" />Camera</li>
        <li className='flex h-5'><img src={img12} alt="" /> Home Audio Theatre</li>
      </ul>
      </div>

      <Mycarousel/>
    

    </div>
    </>
  )
}

export default Home