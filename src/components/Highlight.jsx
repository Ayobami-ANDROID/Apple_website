import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { rightImg, watchImg } from '../utils'
import VideoCarousels from './VideoCarousels'

const Highlight = () => {
  useGSAP(() => {
    gsap.to('#title',{opacity:1,y:0})
    gsap.to('.link',{opacity:1, y:0, duration:1, stagger:0.25})
  },[])
  return (
    <section id="highLights" className='w-screen overflow-hidden h-full commom-padding bg-Zinc'>
      <div className='screen-max-width'>
        <div className='mb-12 w-full md:flex items-end justify-between'>
          <h1 id="title" className='section-heading'>
            Get the Highlights.
          </h1>

          <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>Watch the film
            <img src={watchImg} alt="watch" className='ml-2'/>
            </p>
            <p className='link'>Watch the event
            <img src={rightImg} alt="watch" className='ml-2'/>
            </p>
          </div>
        </div>
         <VideoCarousels/>
      </div>
    </section>
  )
}

export default Highlight