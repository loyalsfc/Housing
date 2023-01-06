import React from 'react'

function Testimonial({content, img, name, position}) {
    return (
        <div className='w-full shrink-0'>
            <article className='text-xl mb-[26px]'>{content}</article>
            <div className='flex gap-5 mb-[75px]'>
                <div className='rounded-full border-2 border-orange h-[61px] w-[61px] overflow-hidden'>
                    <img src={img} alt="" className='w-full' />
                </div>
                <article className='flex flex-col justify-between'>
                    <h4 className='text-lg font-bold leading-9 text-orange'>{name}</h4>
                    <p className=''>{position}</p>
                </article>
            </div>   
        </div>
    )
}

export default Testimonial
