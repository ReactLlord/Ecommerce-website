import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>

      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w2/4 text-gray-600">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione asperiores, itaque nemo tempora assumenda odio rerum, a ipsum debitis provident quis! Provident quis reprehenderit hic repellat dolor quas nemo exercitationem.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolore perferendis eligendi. Ea sequi veniam ullam. Aliquam labore enim, eaque qui placeat cumque corrupti rem!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia aperiam et aliquam ipsam nulla distinctio nemo id. Cupiditate, aut veniam.</p>
        </div>
      </div>
        
        <div className="text-4xl py-4">
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
        </div>

        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance</b>
            <p className='text-gray-600'>we meticulously select and vet each product to ensure it meets pur stringent</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convienience:</b>
            <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service:</b>
            <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring  </p>
          </div>
        </div>

        <NewsLetterBox/>
    </div>
  )

  
}


export default About