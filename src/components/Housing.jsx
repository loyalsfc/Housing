import React, { useEffect, useId, useRef, useState } from 'react'
import HousingCard from './HousingCard'
import houses from '../localAPI/rents'

function Housing() {
    // Maximum no of apartment in a page
    const pageLimit = 6
    //Set state of current page
    const [currentPage, setCurrentPage] = useState(1);
    const pageContainer = useRef()
    //Calculate the total number of pages
    const pageLength = Math.ceil(houses.length / pageLimit)
    const listPage = []
    
    //Map the available houses
    const availableHouse = houses.map((item, index) => {
        const {id, title, type, cost, room, bath, size, img} = item
        //Returning only the apartment relevant to the selected page
        if(index >= ((currentPage-1) * pageLimit) && index < (currentPage * pageLimit)){
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
        }
    })

    // Displaying the pagination buttons 
    let i = 0; 
    while(i < pageLength) {
        listPage.push(<button key={i} onClick={handleClick} data-id={i+1} className={`pagination ${i+1 === currentPage ? 'active-page' : ''}`}>{i + 1}</button>)
        i++
    }

    //function to scroll to the top of page container
    function scrollTop (){
        window.scrollTo({
            top: pageContainer.current.offsetTop ,
        })
    }

    // Moving to a particular page clicked
    function handleClick(e){
        setCurrentPage(parseInt(e.target.getAttribute('data-id')))
        scrollTop()
    }

    //Moving to the first page
    function moveToFirstPage(){
        setCurrentPage(1)
        scrollTop()
    }

    //Moving to the next page
    function nextPage(){
        setCurrentPage(currentPage + 1)
        scrollTop()
    }
    
    return (
        <main ref={pageContainer} className='bg-[#F5F5F5] pt-[60px] pb-[81px]'>
                <div className="container mx-auto px-4">
                    <div data-aos="fade-up" className='flex justify-between items-end mb-10 md:mb-[69px]'>
                        <h2 className='text-lg md:text-[36px] font-[800] leading-[178%] after:content-[""] after:block after:h-[3px] after:bg-orange after:w-[30%]'>List of Properties</h2>
                        <button className='font-manrope text-white text-sm sm:text-[17px] font-medium rounded-[5px] bg-orange py-1.5 px-2.5 md:py-5 md:px-8'>View All Property</button>
                    </div>
                    <div data-aos="zoom-in" className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[33px] gap-y-[61px] mb-[109px]'>
                        {availableHouse}
                    </div>
                    <div className='w-fit mx-auto rounded-md border-2 overflow-hidden border-muted bg-white text-orange text-center font-bold tracking-[0.1px] shadow-[0px_2px_4px_rgba(0,0,0,0.1)]'>
                        <button onClick={moveToFirstPage} disabled={currentPage == 1 ? true : false} className='disabled:bg-[#F3F3F3] disabled:text-muted px-3 py-[25px] sm:p-[25px] border-r border-r-muted rounded-l-md'>First</button>
                        {listPage}
                        <button onClick={nextPage} disabled={currentPage == pageLength ? true : false} className='disabled:bg-[#F3F3F3] disabled:text-muted px-3 py-[25px] sm:p-[25px] border-l border-l-muted'>Next</button>
                    </div>
                </div>
        </main>
    )
}

export default Housing
