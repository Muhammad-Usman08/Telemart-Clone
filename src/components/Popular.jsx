import React from 'react'
import '../styles/style.css'


const Popular = () => {
    return (
        <div className='container justify-center popular-products'>
            <div className=' bg-white py-1 mb-4'>

                {/* 1st Card row */}

                <div className='flex justify-center mb-1 ms-1'>
                    <div className='flex justify-center align-center  pe-32 pb-8 bg-[#f8f1e9]'>
                        <img className='w-[100px]' src="https://d1iv6qgcmtzm6l.cloudfront.net/categories/1uBfvXpBOaj4rQnCYGnZGh5lopWMmyrkdj2TiKAd.png" alt="" />
                        <div className=' text-[13px] mt-9 ms-3'>
                            <p>Gyesers</p>
                            <p className='text-[#8e8e8e]'>226 Products</p>
                        </div>
                    </div>
                    <div className='flex justify-center align-center ms-1  pe-32 pb-8 bg-[#f8eaea]'>
                        <img className='w-[100px]' src="https://d1iv6qgcmtzm6l.cloudfront.net/categories/VvjMy1zQK12SQcoX29VTUfQRlfp8HBLU3CgQrOgK.png" alt="" />
                        <div className=' text-[13px] mt-9 ms-3'>
                            <p>Blood Glucose</p>
                            <p className='text-[#8e8e8e]'>17 Products</p>
                        </div>
                    </div>

                    <div className='flex justify-center align-center ms-1 pe-32 pb-8 bg-[#ebf5f8]'>
                        <img className='w-[100px]' src="https://d1iv6qgcmtzm6l.cloudfront.net/categories/ZUlcmCXCoC9mlCwAMQZc6yybkb82GuBsFG6wLglt.png" alt="" />
                        <div className=' text-[13px] mt-9 ms-3'>
                            <p>Combo Deals</p>
                            <p className='text-[#8e8e8e]'>35 Products</p>
                        </div>
                    </div>

                    <div className='flex justify-center align-center ms-1 me-1 pe-32 pb-8 bg-[#f2ede9]'>
                        <img className='w-[90px]' src="https://d1iv6qgcmtzm6l.cloudfront.net/categories/cFTztjs9UlEXked6YprqDKHjGBlxw7XtM1ess6iR.png" alt="" />
                        <div className=' text-[13px] mt-9 ms-3'>
                            <p>Apple</p>
                            <p className='text-[#8e8e8e]'>30 Products</p>
                        </div>
                    </div>
                </div>



                {/* 2nd Card row */}
                <div className='flex justify-center mb-1'>

                    <div className='flex justify-center align-center ms-1  pe-32 pb-8 bg-[#f8f1e9]'>
                        <img className='w-[100px]' src="https://d1iv6qgcmtzm6l.cloudfront.net/categories/AEP6t7LN1FHQsKltf5arl9EyaJXKDIXgzIJaAIvr.png" alt="" />
                        <div className=' text-[13px] mt-9 ms-3'>
                            <p>Medicines</p>
                            <p className='text-[#8e8e8e]'>4 Products</p>
                        </div>
                    </div>
                    <div className='flex justify-center align-center ms-1   pe-32 pb-8 bg-[#f8eaea]'>
                        <img className='w-[100px]' src="https://d1iv6qgcmtzm6l.cloudfront.net/categories/7CKU8faseBU88e7uwPKRX161pjJaaATd6ScUpkyr.png" alt="" />
                        <div className=' text-[13px] mt-9 ms-3'>
                            <p>Jeans</p>
                            <p className='text-[#8e8e8e]'>200 Products</p>
                        </div>
                    </div>

                    <div className='flex justify-center align-center ms-1  pe-32 pb-8 bg-[#ebf5f8]'>
                        <img className='w-[100px]' src="https://d1iv6qgcmtzm6l.cloudfront.net/categories/pn1BxpQtd3q8WTJ8a06vghIUrslCQQyNrvllb8Kh.png" alt="" />
                        <div className=' text-[13px] mt-9 ms-3'>
                            <p>Blood Pressure</p>
                            <p className='text-[#8e8e8e]'>114 Products</p>
                        </div>
                    </div>

                    <div className='flex justify-center align-center me-1 ms-1 pe-32 pb-8 bg-[#f2ede9]'>
                        <img className='w-[90px]' src="https://d1iv6qgcmtzm6l.cloudfront.net/categories/DUvukQtY761PFRsrp2PJyCArixNE4uEEur4U277E.png" alt="" />
                        <div className=' text-[13px] mt-9 ms-3'>
                            <p>Oppo Mobiles</p>
                            <p className='text-[#8e8e8e]'>41 Products</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Popular