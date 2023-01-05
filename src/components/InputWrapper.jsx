import React from 'react'

function InputWrapper({labelTitle, children}) {
    return (
        <div>
            <label className='block tracking-[0.2px] mb-[5px] leading-6 text-[17px] font-semibold font-poppin text-[#252B42] after:content-["*"] after:text-orange'>{labelTitle}</label>
            {children}
        </div>
    )
}

export default InputWrapper
