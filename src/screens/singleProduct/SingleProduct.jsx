import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Popular from '../../components/Popular';
import Footer from '../../components/Footer';

const SingleProduct = () => {
      // params for dynamic routes
  const params = useParams();
  console.log(params);

  const [data , setData] = useState([]);


  useEffect(()=>{
     axios.get(`https://fakestoreapi.com/products/${params.id}`)
     .then((res)=>{
       console.log(res);
       setData(res.data)
       
     }).catch((err)=>{
         console.log(err);
     })
  }, []);



  
  return (
    <>
     <div className="container">
         <h1 className='text-[23px] mb-10'>Item Selected :</h1>
        </div> 
    
    <div className="flex justify-center">
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-24 pt-10">
    <img src={data.image}   alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title"> {data.category} </h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore voluptatum est veniam, accusamus corporis tempore deserunt ea assumenda ullam, ipsam architecto tenetur molestias cupiditate, saepe optio dignissimos qui commodi.</p>
    <p className='card-title'>RS {data.price} </p>
  </div>
</div>
    </div>

    <div className='container mt-5 mb-20'>
        <h2 className='text-[23px]'>Item Description :</h2>
        <p className='ms-10 mt-3'>{data.description}</p>
    </div>

    <Popular/>
    
    </>
  )
}

export default SingleProduct