import React, { useEffect, useState } from 'react'
import MyNavbar from '../../components/Navbar'
import axios from 'axios';
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
import { useParams } from 'react-router-dom';
import Card from '../../components/Card';
import Popular from '../../components/Popular';



const Home = () => {

  // params for dynamic routes
  // const params = useParams();
  // console.log(params);

  //useState
  const [data, setData] = useState([]);


  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        console.log(res);
        setData(res.data)
      }).catch((err) => {
        console.log(err);
      })
  }, [])



  return (
    <>
      <MyNavbar />


      {/* Section 1 */}
      <div className='container sec-1-main '>

        <div className=' pr-24 pl-7  pt-4 pb-10 bg-white'>
          <p className='text-[15px] mb-3'>TOP CATEGORIES</p>
          <ul className='text-[11px]'>
            <li className='mb-2 mt-2 flex  h-5'> <img src={img1} alt="" />&nbsp; Mobile</li>
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

        <Mycarousel />

        <div className='ms-10 jubilee'>
          <img className='mb-3 w-[65%]' src="https://d1iv6qgcmtzm6l.cloudfront.net/banner_desktops/Pss29KOUe9q7NUb6ofEZoZsH3nos5RqzkDYreS6A.jpg" alt="" />
          <img className='w-[65%]' src="https://d1iv6qgcmtzm6l.cloudfront.net/banner_desktops/mmXTIEuB8lzTJM1mXhXJVxdN4g3pp8huq9FWMqUO.png" alt="" />
        </div>
      </div>


      {/* Section 2 */}
      <div className="container mx-auto mt-10 mb-10">
        <div className="border grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {data.length > 0 ? data.map((item) => {
            return <Card key={item.id} title={item.title} price={item.price} description={item.description} image={item.image} id={item.id} category={item.category} />
          }) : <h1>Loading...</h1>}
        </div>
      </div>



      {/* Section 3 */}
      <div className="container">
        <div className='mb-10 sec-3-main gap-7'>
          <img className='img-1' src="https://d1iv6qgcmtzm6l.cloudfront.net/banner_desktops/Uqr2cd9PMmbcRqAJzSUefxaFj4YMBR75KV8C5AKy.png" alt="" />
          <img className='img-1' src="https://d1iv6qgcmtzm6l.cloudfront.net/banner_desktops/5KkzMTAaDA8M8EHVRI9q8ZUS7wUT0JpgycmBbsas.png" alt="" />
          <img src="https://d1iv6qgcmtzm6l.cloudfront.net/banner_desktops/mfYtow7PLAas2Zksa5KFLBqd3kJgQ8mzZ2Tea1TK.png" alt="" />
        </div>
      </div>




      {/* Section 4 */}
      <Popular />



      {/* Section 5 */}
      <div className="container mb-3">
        <div className='flex gap-3 w-[49%]'>
          <img src="	https://d1iv6qgcmtzm6l.cloudfront.net/banner_desktops/mBi8CSHh6eU4sT9PN0SqBLX3UbftWrbp6pIlei2E.jpg" alt="" />

          <img src="https://d1iv6qgcmtzm6l.cloudfront.net/banner_desktops/yWu72FLnUMQxPfJln9cLdusKi85PTrAVuXvMdv4s.png" alt="" />
        </div>
      </div>



    </>
  )
}

export default Home