import React from 'react'

function Features({children, title}) {
    return (
        <div>
            <div className='bg-white rounded-[10px] shadow-5xl w-fit p-4 mb-5'>
                {children}
            </div>
            <h3 className='font-semibold text-[26px] leading-[135%]'>{title}</h3>
        </div>
    )
}

export default Features
