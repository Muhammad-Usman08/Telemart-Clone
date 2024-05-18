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
import Footer from '../../components/Footer';



const Home = () => {

  // params for dynamic routes
  const params = useParams();
  console.log(params);

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


        {/* Carousel  */}
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
      <div className="container mb-5">
        <div className='flex gap-3 w-[49%]'>
          <img src="	https://d1iv6qgcmtzm6l.cloudfront.net/banner_desktops/mBi8CSHh6eU4sT9PN0SqBLX3UbftWrbp6pIlei2E.jpg" alt="" />

          <img src="https://d1iv6qgcmtzm6l.cloudfront.net/banner_desktops/yWu72FLnUMQxPfJln9cLdusKi85PTrAVuXvMdv4s.png" alt="" />
        </div>
      </div>




      {/* Download Area */}
      <section>
        <div className="container bg-white mb-10">
          <div className='flex justify-evenly '>
            <img className='w-[45%]' src="https://d1iv6qgcmtzm6l.cloudfront.net/banner_desktops/BoO2nnz222xjdT9tnS6JKcrBzFNv5UCAsyjb3qUE.png" alt="mobile image" />

            <div>
              <h1 className='text-4xl font-bold mt-36'>Download Telemart App Now</h1>
              <div className='block'>
                <p className='font-medium mt-2'>Fast, Simple & Delightful.</p>
                <p className='font-medium'>All it takes is 30 seconds to Download.</p>
                <button className='btn bg-black text-white  mt-12 px-7'>
                  <span>
                    <span className='text-[15px] font-light'>Download on the</span> <br />
                    <span className='text-[20px] font-normal'>App Store</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Content Section */}
      <section>
        <div className="container">
          <div>
            <h1 className='text-[24px] font-bold'>The Trusted Online Shopping Store in Pakistan</h1>
            <div className='text-[15px] mt-2'>
              <p>Telemart, is a known name in the e-commerce sphere of Pakistan, owned by Tradelink enterprise. The parent company, Tradelink, has been dealing in electronics and selling mobile phones in Pakistan since 1991.

                Telemart, is an identity specifically created to cater the needs of today’s customer. To bridge the demand and supply gap, Telemart, was one of the first to set-up a full range online store making shopping convenient for the customers. The online store as well as retail outlets spread nationwide, both gained trust through excellent customer service, 100% original products, exclusive product availability and competitive pricing. Since the beginning, Telemart, have maintained its credibility, our customers' loyalty with us have not changed over the years due to our commitment to quality and honesty.</p>
              <p>As online shopping in Pakistan is becoming a growing trend, and many people are shifting towards it, we realise our position and we responsibly fulfil the expectations of the customers. Telemart is specialized in product categories such as consumer electronics, <span className='text-blue-600'>mobile phones, mobile accessories, home appliances, home entertainment products, gaming computers, laptops,</span> tech and gadgets, graphic card, smart watches and now men's fashion and women's fashion is added to the list too.</p>
              <p>Telemart is highly credited in the corporate sector as well. We have been serving companies and institutions for years, they have laid their trust upon us while purchasing systems and equipment for their employees.</p>
            </div>

            <h1 className='text-[24px] font-bold mt-2'>Online Shopping in Pakistan at Its Finest.</h1>
            <p className='text-[15px] mt-2'>One thing we do not compromise on is Trust of the people who are coming on our website. While shopping online is still considered risky in pakistan, we make sure our customers are provided with detailed information and complete support throughout their journey from order placing to shipment to after-sales service. We are the trusted and preferred choice of seller when it comes to online shopping in Pakistan with our customer centric approach, top-notch quality, free delivery options, easy return policies and secure payment, we share great pride in providing only the best.</p>

            <h2 className='text-[22px] font-bold mt-2'>Exclusive Online Shopping Experience</h2>
            <div className='text-[15px] mt-2'>
              <p>Telemart is not just another online platform offering different categories of products, it is an experience we want to give to the people of Pakistan that changes their perspective of online shopping. We believe in providing value for money as well as the time invested in buying a product. Our processes are transparent, we keep our customers in loop from the time of order placement until order receiving.</p>
              <p>If you are here searching for <span className='text-blue-600'>mobile prices in Pakistan</span>, looking for the latest apple iphone or samsung mobiles, gold plated phones or a product for lifestyle modification, you have landed at the right place.</p>
            </div>
          </div>
        </div>
      </section>


      <Footer/>


    </>
  )
}

export default Home