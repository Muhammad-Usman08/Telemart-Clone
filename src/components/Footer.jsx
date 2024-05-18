import React from 'react'


const Footer = () => {
    return (
        <>
            <section className='mt-3 bg-[#172237] py-3'>
                <div className="container  text-white ">
                    <div className='footer-main'>
                        {/* List Started */}
                        <ul>
                            <li className='text-[16px] text-[#8e8e8e]'>About</li>
                            <div className='mt-2 text-[12px]'>
                                <li>About us</li>
                                <li>Telemart Corporate</li>
                                <li>Takaful (Islamic Insurance)</li>
                                <li>Careers</li>
                            </div>

                        </ul>


                        <ul className='footer-brand'>
                            <li className='text-[16px] text-[#8e8e8e]'>Help</li>
                            <div className='mt-2 text-[12px]'>
                                <li>Payment Information</li>
                                <li>Shipping Information</li>
                                <li>FAQs</li>
                                <li>Telemart Offline Stores</li>
                                <li>Helpdesk/ Support</li>
                            </div>

                        </ul>


                        <ul className='footer-brand'>
                            <li className='text-[16px] text-[#8e8e8e]'>Policy</li>
                            <div className='mt-2 text-[12px]'>
                                <li>Return Policy</li>
                                <li>Terms & Condition</li>
                                <li>Privacy</li>
                                <li>Pre Owned Warranty</li>
                                <li>Price Beating</li>
                            </div>

                        </ul>


                        <ul className='footer-brand'>
                            <li className='text-[16px] text-[#8e8e8e]'>Social</li>
                            <div className='mt-2 text-[12px]'>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>Snapchat</li>
                                <li>Youtube</li>
                                <li>TikTok</li>
                            </div>

                        </ul>

                        <ul className='footer-brand'>
                            <li className='text-[16px] text-[#8e8e8e]'>Free Business Services
                            </li>
                            <div className='mt-2 text-[12px]'>
                                <li>URL Shortener</li>
                                <li>Task Manager</li>
                                <li>ERP</li>
                            </div>

                        </ul>


                        <ul className='footer-brand'>
                            <li className='text-[16px] text-[#8e8e8e]'>Registered Address</li>
                            <div className='mt-2 text-[12px]'>
                                <li>Telemart Pvt Limited</li>
                                <li>Suite 401-406, 4th Floor,</li>
                                <li>Khaleej Tower, Shaheed-</li>
                                <li>e-millat Road, Karachi, </li>
                                <li>Pakistan</li>
                            </div>

                        </ul>
                        {/* List ended */}

                    </div>

                    <hr className='bg-white mt-16 h-1' />

                    <div className='mt-4 footer-end'>
                        <p>@2024 Copyright Telemart</p>
                        <p className='text-[#8e8e8e]'>Made By : <span className='text-white'>Muhammad Usman</span></p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer