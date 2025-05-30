import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <>
    <div className='text-center text-2xl pt-10 border-t'>
      <Title text1={'CONTACT'} text={'US'}/>
    </div>

    <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-20">
      <img src={assets.contact_img} alt="" className="w-full md:max-w-[480px]" />
      <div className="flex flex-col justify-center items-start gap-6">
        <p className='font-semibold text-xl text-gray-600'>Our Store</p>
        <p className='text-gray-500'>54709 willms station <br /> Suite 350, Washington, USA</p>
        <p className='text-gray-500'>Tel: +2348148580526 <br /> Email: ebunowoeye316@gmail.com</p>
        <p className='font-semibold text-xl text-gray-600'>Carrers at Forever</p>
        <p className='text-gray-500'>Learn more about our teams and job openings.</p>
        <button className='border border-black px-8 py-4 text-s hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>

        
      </div>
    </div>

    <NewsLetterBox/>
    </>
  )
}

export default Contact