import React from 'react'

const Personal = () => {
  return (
    <>
    <div className='flex justify-center items-center'>
      <div className='text-3xl text-white bg-black rounded-xl w-1/4 m-4 '>
        <p className='text-center text-2xl m-2'>Exclusive information {'\u{1F449}'}</p>
      </div>
      <div className='w-3/4'></div>
    </div>
    <div className='flex ga p-x-* items-center justify-center m-4'>
      <div className='w-1/10 text-center'>
        <p className='w-full'>Drexel University</p>
        <p className='w-full'>Bachelor's in Computer Science</p>
      </div>
      <h3 className='font-bold text-8xl text-center w-4/5'>WHO IS THIS GUY?</h3>
      <div className='w-1/10'>
        <p>A dreamer?</p>
        <p>A challenger?</p>
      </div>
    </div>
    <p>Hello, I am Duc Phan (you can pronounce it like dook-faan). I am a Computer Science guy and I enjoy a lot more than just coding. I like to amazed and challenged by algorithm, programming concepts and problems. I also enjoy doing my own research in various fields such as physics, business, and history. </p>
    <div>
      <h3>Education</h3>
      <p>Drexel University | Bachelor's degree in Computer Science</p>
    </div>
      
    </>
  )
}

export default Personal