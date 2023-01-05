import React from 'react'
import HousingCard from './HousingCard'
import houses from './rents'

function Housing() {

    const availableHouse = houses.map(item => {
        const {id, title, type, cost, room, bath, size, img} = item
        return(
            <HousingCard
                key={id}
                title={title} 
                type={type} 
                cost={cost} 
                rooms={room} 
                shower={bath} 
                size={size} 
                url={img} 
            />
        )
    })

    return (
        <>
            <div className='grid grid-cols-3 gap-x-[33px] gap-y-[61px] mb-[109px]'>
                {availableHouse}
            </div>
            <div className='w-fit mx-auto rounded-md border-[1.35px] overflow-hidden border-muted bg-white text-orange text-center font-bold tracking-[0.1px]'>
                <button className='bg-[#F3F3F3] text-muted p-[25px] border-r border-r-muted rounded-l-md'>First</button>
                <span className='pagination'>1</span>
                <span className='pagination active-page'>2</span>
                <span className='pagination'>3</span>
                <button className='p-[25px] border-l border-l-muted'>Next</button>
            </div>
        </>
    )
}

export default Housing
