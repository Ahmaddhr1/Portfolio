import React from 'react'
import Button from '../components/Button'
import Button2 from '../components/Button2'

const Home = () => {
  const heading="A Full Stack Web"
  const subheading="I'm Ahmad Daher!"
  const text="Transforming ideas into interactive digital masterpieces. Crafting web experiences with a touch of magic."
  const headingSpan="Developer"
  return (
    <div className='relative h-cover w-full padding flex items-center justify-center text-center'>
      <div className='flex flex-col  items-center justify-center text-center gap-3 w-[500px] font-jose'>
        <h3 className='text-xl text-gray-300 font-medium'>{subheading}</h3>
        <h1 className='md:text-6xl text-5xl font-bold'>{heading}<span className='gradientpurpletext'><br />{headingSpan}</span></h1>
        <p className='text-gray-300'>{text}</p>
        <div className='flex gap-3 '>
          <Button text={'Download CV'} icon={'fi fi-rr-download'} />
          <Button2 text={'Contact Me'} icon={'fi fi-rr-comment-dots'} section={'contact'} />
        </div>
      </div>
      <div className=" absolute top-[20%] z-80 w-32 h-32 md:w-24 md:h-24 right-5 bg-secondary blur-3xl rounded-full"></div>

    </div>
  )
}

export default Home