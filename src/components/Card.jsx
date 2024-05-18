import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({image, category  , price, id }) => {
   
  //navigate
  const navigate = useNavigate();

  function singleProduct(){
    navigate(`/single/${id}`)
  }

  return (
    <>
      <div className="container">
        <div className="hover:border shadow-2xl">
          <div className='text-center'>
            <img className='w-[100%] h-64 pb-3' src= {image} alt="image" />
            <p className='pb-3 font-semibold'>{category}</p>
            <p className='font-normal pb-3'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint architecto ut aut, blanditiis totam quis nisi omnis consequuntur veniam exercitationem culpa, mollitia eius necessitatibus ipsa! Labore voluptatem laborum eveniet minima. </p>
            <p className='font-medium pb-3'> RS {price}</p>
            <button onClick={singleProduct} className='btn bg-[#10b981] mb-3'>Order Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card