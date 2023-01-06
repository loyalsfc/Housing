import React from 'react'

function InputWrapper({labelTitle, children, autoclass}) {
    return (
        <div className={autoclass}>
            <label className='label-style after:content-["*"] after:ml-1 after:text-orange'>{labelTitle}</label>
            {children}
        </div>
    )
}

export default InputWrapper
