import React from 'react'
import { useState } from 'react'
import './Sidebar.css'
import Spinner from './Spinner'
// import { useEffect } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Sidebar = (props) => {
  const weather = props.forcast;
  let date = new Date()
  console.log(date.getHours())
  
  console.log(date.getTime().toLocaleString())

  

  return (
    <>
    <div className={`md:pb-0 pb-4 md:w-1/4 w-full bg-${props.mode} text-${props.mode==="black"?"white":"black"} h-screen`}>
        <div>
            <div className='flex p-2 mt-5 justify-evenly items-center '>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg>  
                <input type="text" value={props.location} onChange={e=>props.setLocation(e.target.value)} className={`rounded py-2 width w-50 px-1 bg-${props.mode} text-${props.mode==="black"?"white":"black"} `} placeholder='Search by Pincode...' />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>      
            </div>
            <div className='mt-6 flex flex-col items-center'>
                <img src="data:image/png;base64,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" alt="img" />
               </div>
               <div className='mt-8'>
               <h1 className='text-5xl text-center'>{!weather?'loading...':Math.round(weather.main.temp)}{props.unit==='metric'?'°C':'°F'}</h1>
               <h2 className='text-center mt-2 text-xl'>{!weather?'loading...':weather.name}</h2>
               <h3 className='text-2xl mt-4 text-center'><span className=''> {date.toLocaleString()}</span></h3>
               </div>
               <div className='flex flex-col items-start ml-12 mt-10'>
                <h3>Feels-like - {!weather?'loading...':Math.round(weather.main.feels_like)}{props.unit==='metric'?'°C':'°F'}</h3>
                <h3>Cloudly - {!weather?'loading...':weather.clouds.all}% </h3>
               </div>
               <div className='flex flex-col items-center mt-5'>
                <img className='rounded-full w-3/4' src="https://images.unsplash.com/photo-1584000046019-e5a2ab4fa180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNjE5MTJ8MHwxfHNlYXJjaHwyfHxJbmRvcmV8ZW58MHx8fHwxNjU1ODc2OTIz&ixlib=rb-1.2.1&q=80&w=1080" alt="" />
                </div>
          </div>
     </div>
    </>     
     )
}

export default Sidebar