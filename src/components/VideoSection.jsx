import React, { useEffect, useRef, useState } from 'react'
import video from '../assets/gowork.mp4'
import Testimonies from '../localAPI/testimonies'
import Testimonial from './Testimonial'

function VideoSection() {
    const videoPlayer = useRef()
    const playBtnWrapper = useRef()
    const testimoneyWrapper = useRef()
    const [currentSlide,setCurrentSlide] = useState(0)

    useEffect(()=>{
        const interval = setInterval(()=>{
            
            if(currentSlide < Testimonies.length - 1){
                setCurrentSlide(prevState => prevState + 1)
            } else {
                setCurrentSlide(0)
            }
        }, 5000)
        return ()=> clearInterval(interval)
    },[currentSlide])
    
    
    //Displaying available testimonials
    const testimoniesItems = Testimonies.map(item => {
        return (
            <Testimonial 
                key={item.id}
                content={item.note} 
                img={item.url} 
                name={item.name} 
                position={item.role}
            />
        )
    })

    //Displaying sliders for testimonials available
    const testimoniesSlider = Testimonies.map((item, index) => {
        return (
            <div 
                key={index} 
                className={`w-2.5 h-2.5 sliders rounded-full ${index == currentSlide ? 'bg-orange' : 'bg-[#D9DBE1]'}`}
            >
            </div>
        )
    })

    //Changing the current testimonial when current slide index changed
    useEffect(()=>{
        // Get the total width of the testimonial container 
        const containerWidth = testimoneyWrapper.current.clientWidth
        // Scrolling to the selected testimonial by multiplying its index with the container width 
        testimoneyWrapper.current.scrollTo({
            left: currentSlide * containerWidth,
            behavior: 'smooth',
        })
    }, [currentSlide])


    function playVideo(){
        //Set the video player to play
        videoPlayer.current.play()
        //Hide the Play Icon once video start playing 
        playBtnWrapper.current.classList.add('scale-0')
        // Once video has finished playing Show the playbutton and hide the video controls 
        videoPlayer.current.addEventListener('ended', function(){
            playBtnWrapper.current.classList.remove('scale-0')
            this.controls = false;
        })
        // when the video is paused, show the playbutton and hide the video controls 
        videoPlayer.current.addEventListener('pause', function(){
            playBtnWrapper.current.classList.remove('scale-0')
            this.controls = false;
        })
        //Show the video control once video start playing
        videoPlayer.current.addEventListener('play', function(){
            console.log(this)
            this.controls = true;
        })
    }

    return (
        <section className='bg-orange/[0.07] flex justify-between items-center md:mb-[110px] gap-10 px-4  sm:px-6 md:px-0 py-[50px] md:py-0 overflow-hidden'>
            <div className="w-full md:w-1/2 pl-[50px] lg:pl-[100px] shrink-0">
                <div className='relative'>
                    <svg className='absolute -top-8 -left-8 opacity-30 -z-10' width="71" height="60" viewBox="0 0 71 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M70.6886 9.37093C60.1011 14.577 54.8074 20.6941 54.8074 27.7223C59.3201 28.243 63.0517 30.0868 66.0024 33.2538C68.953 36.4208 70.4283 40.0867 70.4283 44.2516C70.4283 48.6768 68.9964 52.4078 66.1325 55.4447C63.2687 58.4816 59.6672 60 55.3281 60C50.4682 60 46.2593 58.0261 42.7011 54.0781C39.143 50.1301 37.364 45.3363 37.364 39.6963C37.364 22.7765 46.8232 9.54452 65.742 0L70.6886 9.37093ZM33.3246 9.37093C22.6503 14.577 17.3132 20.6941 17.3132 27.7223C21.9127 28.243 25.6877 30.0868 28.6384 33.2538C31.589 36.4208 33.0643 40.0867 33.0643 44.2516C33.0643 48.6768 31.6107 52.4078 28.7034 55.4447C25.7962 58.4816 22.1731 60 17.8339 60C12.974 60 8.78679 58.0261 5.27206 54.0781C1.75734 50.1301 0 45.3363 0 39.6963C0 22.7765 9.41585 9.54452 28.2478 0L33.3246 9.37093Z" fill="#F4511E"/>
                    </svg>
                    <div ref={testimoneyWrapper} className="flex flex-nowrap overflow-hidden ">
                        {testimoniesItems}
                    </div>
                </div>
                <div className='flex gap-3 justify-center md:justify-start'>
                    {testimoniesSlider}
                </div>
            </div>
            <div className='h-556px w-1/2 shrink-0 relative hidden md:block '>
                <div ref={playBtnWrapper} className="w-full h-full absolute bg-grad z-10 transition-all">
                    <div onClick={playVideo} className='h-[92px] w-[92px] rounded-full bg-orange flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.5396 12.7031L3.42823 21.7267C2.14579 22.4917 0.5 21.5654 0.5 20.0232V1.97593C0.5 0.436145 2.14342 -0.492614 3.42823 0.274834L18.5396 9.29846C18.8313 9.46985 19.0738 9.71759 19.2425 10.0166C19.4112 10.3155 19.5 10.6551 19.5 11.0008C19.5 11.3465 19.4112 11.686 19.2425 11.985C19.0738 12.284 18.8313 12.5317 18.5396 12.7031Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <video ref={videoPlayer} poster='https://spikesite2-17132.kxcdn.com/wp-content/uploads/al-ghazali-3KmWk2WC_Z0-unsplash-1024x683.jpg?format=webp' src={video} className="h-[556px] object-cover"></video>
            </div>
        </section>
    )
}

export default VideoSection
