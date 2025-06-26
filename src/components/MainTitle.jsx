import React from 'react'

export default function Header(){
    return(
        <>
            <div className='flex items-center'>
                <div className='flex-grow border-t-2 border-b-4 border-black h-2'></div>
                    <span className='ml-1 mr-1'>Welcome to</span>
                <div className='flex-grow border-t-2 border-b-4 border-black h-2'></div>
            </div>
            <div className='flex items-center justify-center gap-x-*'>
                <div className='w-1/6 ml-4 border-black border-16 rounded-md p-2 py-10 '>
                    <img src="../public/drexel-black.png" alt="Drexel's logo "></img>
                </div>
                <div className='flex-1 text-center'>
                    <p><i>The Daily's</i> proudest product</p>
                    <h1 className="font-bold text-6xl text-center m-2">This Is Not About Duc Phan</h1>
                    <p className='text-center'>The No.1 newspaper about Duc's life</p>
                </div>
                <div className='w-1/6 text-left'>
                    <p className='font-bold text-2xl'>Daily Weather</p>
                    <p className='text-xs'>North: cloudy with a chance of meatball</p>
                    <p className='text-xs'>South: sunny with strong heat</p>
                    <p className='text-xs'>West: might be rainy, take a look outside</p>
                    <p className='text-xs'>East: perfect weather for a stay-at-home</p>
                </div>
            </div>
            <div className='flex-grow border-t-2 border-b-4 border-black h-2'></div>    
        </>
    )
}