import { Input } from 'postcss'
import React from 'react'
import logo from '../assets/logo.png'
import map from '../assets/map.png'
import Features from './Features'
import Header from './Header'
import Housing from './Housing'
import InputWrapper from './InputWrapper'
import VideoSection from './VideoSection'

function Home() {
    return (
        <div>
            <div className='h-screen hero overflow-hidden'>
                <div className="container mx-auto px-4">
                    <div className=" text-white h-screen flex flex-col">
                        <Header />
                        <section className='flex flex-col lg:flex-row items-center justify-around h-full'>
                            <h1 className='text-center lg:text-left font-bold text-[1.5rem] md:text-[2.5rem] mb-4 lg:mb-0 lg:text-[3.25rem] leading-[135%] -tracking-[1px] lg:max-w-[584px]'>The most affordable place to stay in the san franciso bay area</h1>
                            <div className='flex flex-col items-center gap-5 grow-0 lg:w-1/2 px'>
                                <img src={map} alt="" className='rounded-[15px] shadow-4xl w-2/3 lg:h-[340px]'/>
                                <div className='py-1 sm:py-[15px] px-2 sm:px-[22px] rounded-[10px] bg-white w-fit  border border-black/[0.2] font-poppin font-medium text-[#252B42] tracking-[0.2px] flex'>
                                    <div className='select-wrap rounded-l-[5px]'>
                                        <select name="type" id="house-type" className='bg-transparent focus:outline-0'>
                                            <option value="all">All Type</option>
                                            <option value="bungalow">Bungalow</option>
                                            <option value="duplex">Duplex</option>
                                            <option value="castle">Castle</option>
                                        </select>
                                    </div>
                                    <div className='select-wrap'>
                                        <select name="type" id="house-type" className='bg-transparent focus:outline-0'>
                                            <option value="neighbourhood">Neighbourhood</option>
                                            <option value="city">City</option>
                                            <option value="village">Village</option>
                                        </select>
                                    </div>
                                    <button className='bg-[#23A6F0] rounded-r-[5px] border border-[#E6E6E6] px-5'>
                                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.9901 10.3188L16.2939 14.6226C16.4452 14.7739 16.5301 14.9792 16.53 15.1932C16.53 15.4072 16.4449 15.6124 16.2935 15.7637C16.1421 15.915 15.9368 15.9999 15.7228 15.9998C15.5088 15.9998 15.3036 15.9147 15.1523 15.7633L10.8485 11.4595C9.56197 12.456 7.9441 12.9249 6.32406 12.7709C4.70401 12.6169 3.20349 11.8515 2.12774 10.6304C1.05199 9.40936 0.481819 7.82433 0.533226 6.19779C0.584633 4.57125 1.25375 3.02539 2.40446 1.87468C3.55517 0.723966 5.10104 0.0548478 6.72757 0.00344105C8.35411 -0.0479657 9.93914 0.522201 11.1602 1.59795C12.3813 2.6737 13.1467 4.17423 13.3007 5.79427C13.4547 7.41432 12.9858 9.03219 11.9893 10.3188H11.9901ZM6.93033 11.1995C8.20331 11.1995 9.42415 10.6938 10.3243 9.7937C11.2244 8.89356 11.7301 7.67272 11.7301 6.39974C11.7301 5.12676 11.2244 3.90592 10.3243 3.00579C9.42415 2.10565 8.20331 1.59997 6.93033 1.59997C5.65735 1.59997 4.43651 2.10565 3.53637 3.00579C2.63624 3.90592 2.13055 5.12676 2.13055 6.39974C2.13055 7.67272 2.63624 8.89356 3.53637 9.7937C4.43651 10.6938 5.65735 11.1995 6.93033 11.1995Z" fill="white"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <section className='py-12 md:py-[93px]'>
                <div className="container mx-auto px-4 md:px-0">
                        <h2 className='font-[800] text-[1.75rem] text-center lg:text-left md:text-[2.25rem] leading-[178%] mb-[38px]'><span className='lg:border-b-[3px] border-b-orange'>Minimum Living Cost</span> Takes Care of Everything</h2>
                        <div className='flex gap-10 items-center'>
                            <div className='hidden lg:block shrink-0 w-[387px] h-[521px] rounded-tl-[50px] rounded-br-[50px] overflow-hidden shadow-6xl relative bg-[url("https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")] bg-center bg-cover bg-norepeat'>
                            </div>
                            <div className='grid grid-cols-2 grid-cols-3 sm:grid-cols-3 gap-12 lg:gap-y-[92px] gap-x-10 lg:gap-x-1'>
                                <Features title="Pay as Little as possible!">
                                    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5 38.25C9.14439 38.25 0.750015 29.8556 0.750015 19.5C0.750015 9.14437 9.14439 0.75 19.5 0.75C29.8556 0.75 38.25 9.14437 38.25 19.5C38.25 29.8556 29.8556 38.25 19.5 38.25ZM19.5 34.5C23.4783 34.5 27.2936 32.9196 30.1066 30.1066C32.9197 27.2936 34.5 23.4782 34.5 19.5C34.5 15.5218 32.9197 11.7064 30.1066 8.8934C27.2936 6.08035 23.4783 4.5 19.5 4.5C15.5218 4.5 11.7065 6.08035 8.89341 8.8934C6.08037 11.7064 4.50001 15.5218 4.50001 19.5C4.50001 23.4782 6.08037 27.2936 8.89341 30.1066C11.7065 32.9196 15.5218 34.5 19.5 34.5ZM12.9375 23.25H23.25C23.4987 23.25 23.7371 23.1512 23.9129 22.9754C24.0887 22.7996 24.1875 22.5611 24.1875 22.3125C24.1875 22.0639 24.0887 21.8254 23.9129 21.6496C23.7371 21.4738 23.4987 21.375 23.25 21.375H15.75C14.5068 21.375 13.3145 20.8811 12.4355 20.0021C11.5564 19.123 11.0625 17.9307 11.0625 16.6875C11.0625 15.4443 11.5564 14.252 12.4355 13.3729C13.3145 12.4939 14.5068 12 15.75 12H17.625V8.25H21.375V12H26.0625V15.75H15.75C15.5014 15.75 15.2629 15.8488 15.0871 16.0246C14.9113 16.2004 14.8125 16.4389 14.8125 16.6875C14.8125 16.9361 14.9113 17.1746 15.0871 17.3504C15.2629 17.5262 15.5014 17.625 15.75 17.625H23.25C24.4932 17.625 25.6855 18.1189 26.5646 18.9979C27.4437 19.877 27.9375 21.0693 27.9375 22.3125C27.9375 23.5557 27.4437 24.748 26.5646 25.6271C25.6855 26.5061 24.4932 27 23.25 27H21.375V30.75H17.625V27H12.9375V23.25Z" fill="#F4511E"/>
                                    </svg>
                                </Features>
                                <Features title="Enjoy wisdom of community!">
                                    <svg width="40" height="35" viewBox="0 0 40 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M37.25 34.375H2.74998C2.24165 34.375 1.75414 34.1775 1.39469 33.8258C1.03525 33.4742 0.833313 32.9973 0.833313 32.5V18.4131C0.833283 18.1452 0.891946 17.8804 1.00535 17.6365C1.11875 17.3927 1.28426 17.1754 1.49073 16.9994L8.49998 11.02V2.5C8.49998 2.00272 8.70191 1.52581 9.06136 1.17417C9.4208 0.822544 9.90831 0.625 10.4166 0.625H37.25C37.7583 0.625 38.2458 0.822544 38.6053 1.17417C38.9647 1.52581 39.1666 2.00272 39.1666 2.5V32.5C39.1666 32.9973 38.9647 33.4742 38.6053 33.8258C38.2458 34.1775 37.7583 34.375 37.25 34.375ZM14.25 30.625H20V19.2663L12.3333 12.7263L4.66665 19.2663V30.625H10.4166V23.125H14.25V30.625ZM23.8333 30.625H35.3333V4.375H12.3333V8.36312C12.7818 8.36312 13.2322 8.51688 13.5926 8.82625L23.1759 16.9994C23.3824 17.1754 23.5479 17.3927 23.6613 17.6365C23.7747 17.8804 23.8333 18.1452 23.8333 18.4131V30.625ZM27.6666 15.625H31.5V19.375H27.6666V15.625ZM27.6666 23.125H31.5V26.875H27.6666V23.125ZM27.6666 8.125H31.5V11.875H27.6666V8.125ZM20 8.125H23.8333V11.875H20V8.125Z" fill="#F4511E"/>
                                    </svg>
                                </Features>
                                <Features title="Let's somebody else take care of Landlord!">
                                    <svg width="37" height="40" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M33.6556 26.4999L35.9093 27.8518C36.0484 27.935 36.1635 28.0529 36.2434 28.1939C36.3233 28.3348 36.3653 28.4941 36.3653 28.6562C36.3653 28.8182 36.3233 28.9775 36.2434 29.1185C36.1635 29.2595 36.0484 29.3773 35.9093 29.4605L19.4656 39.3268C19.174 39.502 18.8402 39.5946 18.5 39.5946C18.1598 39.5946 17.826 39.502 17.5343 39.3268L1.0906 29.4605C0.951558 29.3773 0.83647 29.2595 0.756559 29.1185C0.676648 28.9775 0.634644 28.8182 0.634644 28.6562C0.634644 28.4941 0.676648 28.3348 0.756559 28.1939C0.83647 28.0529 0.951558 27.935 1.0906 27.8518L3.34435 26.4999L18.5 35.5937L33.6556 26.4999ZM33.6556 17.6874L35.9093 19.0393C36.0484 19.1225 36.1635 19.2404 36.2434 19.3814C36.3233 19.5223 36.3653 19.6816 36.3653 19.8437C36.3653 20.0057 36.3233 20.165 36.2434 20.306C36.1635 20.447 36.0484 20.5648 35.9093 20.648L18.5 31.0937L1.0906 20.648C0.951558 20.5648 0.83647 20.447 0.756559 20.306C0.676648 20.165 0.634644 20.0057 0.634644 19.8437C0.634644 19.6816 0.676648 19.5223 0.756559 19.3814C0.83647 19.2404 0.951558 19.1225 1.0906 19.0393L3.34435 17.6874L18.5 26.7812L33.6556 17.6874ZM19.4637 0.454292L35.9093 10.3205C36.0484 10.4038 36.1635 10.5216 36.2434 10.6626C36.3233 10.8036 36.3653 10.9629 36.3653 11.1249C36.3653 11.287 36.3233 11.4462 36.2434 11.5872C36.1635 11.7282 36.0484 11.8461 35.9093 11.9293L18.5 22.3749L1.0906 11.9293C0.951558 11.8461 0.83647 11.7282 0.756559 11.5872C0.676648 11.4462 0.634644 11.287 0.634644 11.1249C0.634644 10.9629 0.676648 10.8036 0.756559 10.6626C0.83647 10.5216 0.951558 10.4038 1.0906 10.3205L17.5343 0.454292C17.826 0.279085 18.1598 0.186523 18.5 0.186523C18.8402 0.186523 19.174 0.279085 19.4656 0.454292H19.4637ZM18.5 4.24742L7.0381 11.1249L18.5 18.0024L29.9618 11.1249L18.5 4.24742Z" fill="#F4511E"/>
                                    </svg>
                                </Features>
                                <Features title="Enjoy peaceful Environment!">
                                    <svg width="37" height="39" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.25 0.75C13.2937 0.75 17.67 3.59438 19.8694 7.76438C22.0763 4.65563 25.7062 2.625 29.8125 2.625H36.375V7.3125C36.375 14.0437 30.9188 19.5 24.1875 19.5H21.375V21.375H30.75V34.5C30.75 36.5719 29.0719 38.25 27 38.25H12C9.92813 38.25 8.25 36.5719 8.25 34.5V21.375H17.625V17.625H13.875C6.62625 17.625 0.75 11.7487 0.75 4.5V0.75H8.25ZM27 25.125H12V34.5H27V25.125ZM32.625 6.375H29.8125C25.1531 6.375 21.375 10.1531 21.375 14.8125V15.75H24.1875C28.8469 15.75 32.625 11.9719 32.625 7.3125V6.375ZM8.25 4.5H4.5C4.5 9.67688 8.69813 13.875 13.875 13.875H17.625C17.625 8.69813 13.4269 4.5 8.25 4.5Z" fill="#F4511E"/>
                                    </svg>
                                </Features>
                                <Features title="Stay Safe! Save Money!">
                                    <svg width="35" height="43" viewBox="0 0 35 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.375 7.6325V24.8544C4.37502 26.089 4.67983 27.3045 5.26237 28.393C5.8449 29.4816 6.68716 30.4095 7.71438 31.0944L17.5 37.6194L27.2856 31.0944C28.3126 30.4097 29.1547 29.4821 29.7372 28.3939C30.3197 27.3057 30.6247 26.0905 30.625 24.8562V7.6325L17.5 4.71875L4.375 7.6325ZM2.09312 4.29875L17.5 0.875L32.9069 4.29875C33.3232 4.39131 33.6956 4.62306 33.9625 4.95576C34.2294 5.28846 34.3749 5.70222 34.375 6.12875V24.8544C34.3749 26.7064 33.9175 28.5297 33.0435 30.1625C32.1696 31.7953 30.906 33.1871 29.365 34.2144L17.5 42.125L5.635 34.2144C4.09426 33.1873 2.83086 31.7958 1.9569 30.1633C1.08294 28.5309 0.625443 26.7079 0.625 24.8562V6.12875C0.625073 5.70222 0.770571 5.28846 1.03748 4.95576C1.30439 4.62306 1.67676 4.39131 2.09312 4.29875V4.29875ZM17.5 24.3125L11.9894 27.2094L13.0412 21.0744L8.58437 16.7281L14.7456 15.8319L17.5 10.25L20.2563 15.8319L26.4156 16.7281L21.9588 21.0744L23.0087 27.2094L17.5 24.3125Z" fill="#F4511E"/>
                                    </svg>
                                </Features>
                                <Features title="Pay for what you use!">
                                    <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.5 0.75C29.8556 0.75 38.25 9.14438 38.25 19.5C38.25 29.8556 29.8556 38.25 19.5 38.25C9.14438 38.25 0.75 29.8556 0.75 19.5C0.75 9.14438 9.14438 0.75 19.5 0.75ZM19.5 4.5C15.5218 4.5 11.7064 6.08035 8.8934 8.8934C6.08035 11.7064 4.5 15.5218 4.5 19.5C4.5 23.4782 6.08035 27.2936 8.8934 30.1066C11.7064 32.9196 15.5218 34.5 19.5 34.5C23.4782 34.5 27.2936 32.9196 30.1066 30.1066C32.9196 27.2936 34.5 23.4782 34.5 19.5C34.5 15.5218 32.9196 11.7064 30.1066 8.8934C27.2936 6.08035 23.4782 4.5 19.5 4.5V4.5ZM19.5 10.125C21.4736 10.1257 23.3966 10.7493 24.9951 11.9069C26.5936 13.0644 27.786 14.697 28.4024 16.5718C29.0189 18.4467 29.0279 20.4683 28.4282 22.3485C27.8285 24.2288 26.6508 25.8719 25.0627 27.0437C23.4746 28.2155 21.5572 28.8562 19.5837 28.8746C17.6102 28.893 15.6812 28.2881 14.0716 27.146C12.462 26.004 11.2538 24.3831 10.6193 22.5143C9.98469 20.6455 9.95608 18.6241 10.5375 16.7381C10.9761 17.7182 11.738 18.5179 12.6957 19.0034C13.6534 19.4889 14.7489 19.6308 15.7987 19.4052C16.8484 19.1797 17.7889 18.6004 18.4627 17.7644C19.1365 16.9283 19.5027 15.8862 19.5 14.8125C19.5002 13.9096 19.2397 13.0259 18.7498 12.2675C18.2598 11.5091 17.5613 10.9084 16.7381 10.5375C17.6119 10.2694 18.5381 10.125 19.5 10.125V10.125Z" fill="#F4511E"/>
                                    </svg>
                                </Features>
                            </div>
                        </div>
                </div>
            </section>
            
            <Housing />
                
            <section>
                <div className="container mx-auto px-4 py-[110px]">
                    <div className='flex flex-col-reverse md:flex-row items-center gap-5 mb-[110px]'>
                        <div className='w-full md:w-1/2 shrink-0'>
                            <div className='flex items-end mb-5'>
                                <div className='rounded-[1.25rem] overflow-hidden w-1/2 mr-5 relative'>
                                    <div className="img-overlay">
                                        Flexible Lease
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1615874959474-d609969a20ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
                                </div>
                                <div className='rounded-[1.25rem] overflow-hidden w-1/2 h-fit mr-5 relative'>
                                    <div className="img-overlay">
                                        7-Day Happiness Guaranteed
                                    </div>
                                    <img src="https://www.english.com/blog/wp-content/uploads/2021/09/6-ways-to-get-the-best-results-on-your-Versant-English-test-1132x670.png" alt="" />
                                </div>
                            </div>
                            <div className='flex items-start'>
                                <div className='rounded-[1.25rem] overflow-hidden w-1/3 mr-5 max-h-[285px] relative'>
                                    <div className="img-overlay">
                                        Monthly House Cleaning
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                                </div>
                                <div className='rounded-[1.25rem] overflow-hidden w-2/3 h-fit max-h-[356px] flex items-center relative'>
                                    <div className="img-overlay">
                                        Choose your own roomates
                                    </div>
                                    <img src="https://images.unsplash.com/photo-1633113214698-485cdb2f56fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className='w-full'/>
                                </div>
                            </div>
                        </div>
                        <article className="w-full md:w-1/2 shrink-0 mb-12 md:mb-0 md:px-6 lg:px-12">
                            <h2 className='text-2xl md:text-3xl lg:text-[2.5rem] leading-[135%] font-[800] mb-1'>Flexibility and options to suit your lifestyle.</h2>
                            <p className='text-lg leading-8 mb-10'>You need it? We got it. We make finding your next home easy, comfortable, and simple. From our happiness guarantee to our selective roommate finder option. We provide you the flexibility that you most desire.</p>
                            <button className="bg-orange rounded-[13px] text-white px-9 py-4 md:py-[22px] text-lg ">Search Rooms</button>
                        </article>
                    </div>

                    <div>
                        <h2 className='font-medium text-xl md:text-[1.5rem] leading-8 text-black mb-9 text-center'>Your property with us and be Confident that Your Room will be Filled Out!</h2>
                        <form className='pt-[25px] pb-[52px] shadow-8xl rounded-[10px] px-4 sm:px-8 md:px-12 lg:px-[63px]'>
                            <h3 className='text-orange tracking-[0.1px] text-center leading-8 text-2xl md:text-[28px] font-poppin font-bold mb-8 md:mb-[66px]'>Add A New Property</h3>
                            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
                                <InputWrapper labelTitle="Name">
                                    <input type="text" className='add-input' placeholder='Enter Name'/>
                                </InputWrapper>
                                <InputWrapper labelTitle="Address">
                                    <input type="text" className='add-input' placeholder='Enter Address'/>
                                </InputWrapper>
                                <InputWrapper labelTitle="Unit Number">
                                    <input type="number" className='add-input' placeholder='Enter Unit'/>
                                </InputWrapper>
                                <InputWrapper labelTitle="City">
                                    <select name="cities" id="cities" className="add-input">
                                        <option value="select">Select City</option>
                                        <option>San Diego</option>
                                        <option>New Orleans</option>
                                        <option>Denver</option>
                                        <option>Nashvi</option>
                                        <option>Las Vegas</option>
                                        <option>Boston</option>
                                        <option>San Francisco</option>
                                        <option>San Antonio</option>
                                        <option>Colorado Sprin</option>
                                        <option>Seattle</option>
                                        <option>New York City</option>
                                        <option>Tampa</option>
                                        <option>Tamp</option>
                                        <option>Charlotte</option>
                                        <option>Miami</option>
                                        <option>Austi</option>
                                        <option>Virgi</option>
                                        <option>Phoen</option>
                                        <option>Atlan</option>
                                        <option>Dallas</option>
                                        <option>Memphis</option>
                                        <option>Long Beach</option>
                                        <option>Philadelphia</option>
                                        <option>Chicago</option>
                                        <option>Portland </option>
                                        <option>Tucson</option>
                                        <option>Houston</option>
                                        <option>Los Angele</option>
                                        <option>Jacksonvil</option>
                                        <option>Portland</option>
                                        <option>Sacramento</option>
                                        <option>Fort Worth</option>
                                    </select>
                                </InputWrapper>
                                <InputWrapper labelTitle='State'>
                                    <select name="states" id="states" className='add-input'>
                                        <option value="select" >Select State</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">District Of Columbia</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </select>
                                </InputWrapper>
                                <InputWrapper labelTitle="Room Type">
                                    <select name="room-type" id="room-type" className="add-input">
                                        <option value="">Select Room Type</option>
                                        <option>Standard Suite Room </option>
                                        <option>Junior Suites </option>
                                        <option>Presidential Suites </option>
                                        <option>Penthouse Suites </option>
                                    </select>
                                </InputWrapper>
                                <InputWrapper labelTitle="Price">
                                    <input type="number" className='add-input' placeholder='Enter Price'/>
                                </InputWrapper>
                                <InputWrapper labelTitle="Description" autoclass="sm:col-span-2 md:col-span-3">
                                    <textarea type="number" className='add-input' placeholder='Enter Description'/>
                                </InputWrapper>
                                <div className='sm:col-span-2 md:col-span-3'>
                                    <h4 className='label-style'>Upload Photos</h4>
                                    <label htmlFor="file-upload" className='block py-9 border border-dashed border-orange rounded-[10px] bg-[rgba(244,81,30,0.01)]'>
                                        <p className='font-poppin font-medium text-black text-center'>Drag your images here, or <span className='text-orange'>browse</span></p>
                                        <span className='block text-center text-black/[0.5] text-xs mt-1.5'>Supported:  JPG, JPEG, PNG</span>
                                    </label>
                                    <input type="file" id='file-upload' name='file-upload' className='hidden' multiple/>
                                </div>
                            </div>
                            <button type='button' className='bg-orange py-5 text-white rounded-[10px] w-full sm:w-[60%] mx-auto block mt-12 md:mt-[80px]'>Add New Property</button>
                        </form>
                    </div>
                </div>
            </section>

            <VideoSection />

            <footer className='pt-[50px] pb-6 md:py-[50px]'>
                <div className="container mx-auto px-4 border-t-2 border-orange pt-10 md:pt-[90px] text-sm">
                    <div className='flex flex-col md:flex-row justify-between item-center mb-16 md:mb-[105px]'>
                        <div className='h-fit mx-auto w-fit bg-orange p-4 rounded-lg mb-4 md:mb-0'>
                            <img src={logo} alt="" className=''/>
                        </div>
                        <article className='md:w-1/2 leading-[18px] grid grid-cols-2 gap-4 mx-auto md:mx-0'>
                            <p className='flex item-center gap-5 col-span-2'>
                                <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M0 7C0 3.13 3.13 0 7 0C10.87 0 14 3.13 14 7C14 11.17 9.58 16.92 7.77 19.11C7.37 19.59 6.64 19.59 6.24 19.11C4.42 16.92 0 11.17 0 7ZM4.5 7C4.5 8.38 5.62 9.5 7 9.5C8.38 9.5 9.5 8.38 9.5 7C9.5 5.62 8.38 4.5 7 4.5C5.62 4.5 4.5 5.62 4.5 7Z" fill="#F4511E"/>
                                </svg>
                                345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
                            </p>
                            <p className='flex item-center gap-5'>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.23 12.26L13.69 11.97C13.08 11.9 12.48 12.11 12.05 12.54L10.21 14.38C7.38 12.94 5.06 10.63 3.62 7.79001L5.47 5.94001C5.9 5.51001 6.11 4.91001 6.04 4.30001L5.75 1.78001C5.63 0.77001 4.78 0.0100098 3.76 0.0100098H2.03C0.9 0.0100098 -0.0400003 0.95001 0.0299997 2.08001C0.56 10.62 7.39 17.44 15.92 17.97C17.05 18.04 17.99 17.1 17.99 15.97V14.24C18 13.23 17.24 12.38 16.23 12.26Z" fill="#F4511E"/>
                                </svg>
                                (123) 456-7890
                            </p>
                            <p className="flex item-center gap-5">
                                <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5 0H15C15.55 0 16 0.45 16 1V3C16 3.55 15.55 4 15 4H5C4.45 4 4 3.55 4 3V1C4 0.45 4.45 0 5 0ZM3 5H17C18.66 5 20 6.34 20 8V12C20 13.1 19.1 14 18 14H16V16C16 17.1 15.1 18 14 18H6C4.9 18 4 17.1 4 16V14H2C0.9 14 0 13.1 0 12V8C0 6.34 1.34 5 3 5ZM7 16H13C13.55 16 14 15.55 14 15V11H6V15C6 15.55 6.45 16 7 16ZM17 9C16.45 9 16 8.55 16 8C16 7.45 16.45 7 17 7C17.55 7 18 7.45 18 8C18 8.55 17.55 9 17 9Z" fill="#F4511E"/>
                                </svg>
                                (123) 456-7890
                            </p>
                            <div className='flex items-center gap-2 md:gap-6 flex-nowrap col-span-2 mt-4 md:mt-10'>
                                <span className='opacity-50'>Social Media</span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.6144 21H3.99346C3.44463 21 3 20.5551 3 20.0065V3.99345C3 3.44469 3.4447 3 3.99346 3H20.0066C20.5552 3 21 3.44469 21 3.99345V20.0065C21 20.5552 20.5552 21 20.0066 21H15.4197V14.0294H17.7594L18.1098 11.3128H15.4197V9.57849C15.4197 8.79198 15.6381 8.256 16.766 8.256L18.2045 8.25537V5.82566C17.9557 5.79255 17.1018 5.71859 16.1083 5.71859C14.0343 5.71859 12.6144 6.98457 12.6144 9.30945V11.3128H10.2687V14.0294H12.6144V21Z" fill="#F4511E"/>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 6.77573C20.3386 7.07692 19.6265 7.28061 18.8796 7.37161C19.6424 6.90358 20.2277 6.16143 20.5034 5.27736C19.7892 5.71073 19 6.026 18.1569 6.19502C17.4849 5.45937 16.5246 5 15.4617 5C13.4237 5 11.7702 6.69556 11.7702 8.78657C11.7702 9.08342 11.8019 9.37161 11.8653 9.64897C8.79609 9.49079 6.07554 7.98483 4.25304 5.69122C3.93502 6.25244 3.7533 6.90358 3.7533 7.59697C3.7533 8.91008 4.40518 10.0693 5.3962 10.7486C4.79186 10.7302 4.22134 10.558 3.72266 10.2763V10.3229C3.72266 12.1582 4.99577 13.6891 6.68621 14.0358C6.37665 14.1246 6.05018 14.169 5.71315 14.169C5.47544 14.169 5.243 14.1463 5.01796 14.1018C5.48811 15.6056 6.85103 16.701 8.46751 16.7302C7.20391 17.7465 5.61067 18.3521 3.88114 18.3521C3.5832 18.3521 3.28843 18.3348 3 18.3001C4.63444 19.3727 6.57633 20 8.66086 20C15.4543 20 19.168 14.2308 19.168 9.22644C19.168 9.06176 19.1648 8.89707 19.1585 8.73564C19.8801 8.20152 20.5066 7.53521 21 6.77573Z" fill="#F4511E"/>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.11877 7.77127H5.09337C3.82338 7.77127 3 6.94039 3 5.88717C3 4.81347 3.84772 4 5.14311 4C6.43744 4 7.2333 4.81142 7.2587 5.8841C7.2587 6.93731 6.43744 7.77127 5.11877 7.77127ZM21 20H17.0218V14.3754C17.0218 12.9031 16.3995 11.8981 15.031 11.8981C13.9844 11.8981 13.4023 12.5763 13.1313 13.2299C13.0419 13.4365 13.0435 13.7146 13.0452 14.0012V14.0012C13.0454 14.0401 13.0456 14.0791 13.0456 14.1182V20H9.10442C9.10442 20 9.15522 10.0365 9.10442 9.13082H13.0456V10.8367C13.2785 10.0908 14.5379 9.02632 16.5476 9.02632C19.041 9.02632 21 10.5897 21 13.9563V20ZM6.96237 9.13082H3.45402V20H6.96237V9.13082Z" fill="#F4511E"/>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.1045 6.96979C20.6439 7.53063 20.82 8.80424 20.82 8.80424C20.82 8.80424 21 10.3002 21 11.7956V13.198C21 14.694 20.82 16.1894 20.82 16.1894C20.82 16.1894 20.6439 17.463 20.1045 18.0239C19.4878 18.6873 18.8039 18.7559 18.4174 18.7946C18.3749 18.7989 18.336 18.8028 18.3011 18.8071C15.7822 18.9942 12 19 12 19C12 19 7.32 18.9561 5.88 18.814C5.81177 18.8009 5.72907 18.7907 5.63541 18.7792C5.17928 18.723 4.46335 18.6348 3.89494 18.0239C3.3555 17.463 3.18 16.1894 3.18 16.1894C3.18 16.1894 3 14.694 3 13.198V11.7956C3 10.3002 3.18 8.80424 3.18 8.80424C3.18 8.80424 3.3555 7.53063 3.89494 6.96979C4.51305 6.30538 5.19754 6.23757 5.58411 6.19928C5.62602 6.19513 5.66443 6.19132 5.69887 6.18714C8.21775 6 11.9961 6 11.9961 6H12.0039C12.0039 6 15.7822 6 18.3011 6.18714C18.3356 6.19133 18.374 6.19514 18.4159 6.1993C18.8022 6.2376 19.487 6.30549 20.1045 6.96979ZM10.1409 9.70414L10.1415 14.8973L15.0043 12.3097L10.1409 9.70414Z" fill="#F4511E"/>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12 3C9.55575 3 9.24926 3.01036 8.28931 3.05416C7.33137 3.09785 6.67712 3.25001 6.10466 3.47251C5.51283 3.70247 5.01092 4.01021 4.51055 4.51055C4.01021 5.01092 3.70247 5.51283 3.47251 6.10466C3.25001 6.67712 3.09785 7.33137 3.05416 8.28931C3.01036 9.24926 3 9.55575 3 12C3 14.4443 3.01036 14.7507 3.05416 15.7107C3.09785 16.6686 3.25001 17.3229 3.47251 17.8953C3.70247 18.4872 4.01021 18.9891 4.51055 19.4895C5.01092 19.9898 5.51283 20.2975 6.10466 20.5275C6.67712 20.75 7.33137 20.9021 8.28931 20.9458C9.24926 20.9896 9.55575 21 12 21C14.4443 21 14.7507 20.9896 15.7107 20.9458C16.6686 20.9021 17.3229 20.75 17.8953 20.5275C18.4872 20.2975 18.9891 19.9898 19.4895 19.4895C19.9898 18.9891 20.2975 18.4872 20.5275 17.8953C20.75 17.3229 20.9021 16.6686 20.9458 15.7107C20.9896 14.7507 21 14.4443 21 12C21 9.55575 20.9896 9.24926 20.9458 8.28931C20.9021 7.33137 20.75 6.67712 20.5275 6.10466C20.2975 5.51283 19.9898 5.01092 19.4895 4.51055C18.9891 4.01021 18.4872 3.70247 17.8953 3.47251C17.3229 3.25001 16.6686 3.09785 15.7107 3.05416C14.7507 3.01036 14.4443 3 12 3ZM12 4.62162C14.4031 4.62162 14.6878 4.6308 15.6368 4.6741C16.5143 4.71411 16.9908 4.86073 17.3079 4.98398C17.728 5.14725 18.0278 5.34227 18.3428 5.65723C18.6577 5.97215 18.8528 6.27196 19.016 6.69206C19.1393 7.00919 19.2859 7.48574 19.3259 8.36323C19.3692 9.31224 19.3784 9.5969 19.3784 12C19.3784 14.4031 19.3692 14.6878 19.3259 15.6368C19.2859 16.5143 19.1393 16.9908 19.016 17.3079C18.8528 17.728 18.6577 18.0278 18.3428 18.3428C18.0278 18.6577 17.728 18.8528 17.3079 19.016C16.9908 19.1393 16.5143 19.2859 15.6368 19.3259C14.6879 19.3692 14.4033 19.3784 12 19.3784C9.59672 19.3784 9.31213 19.3692 8.36323 19.3259C7.48574 19.2859 7.00919 19.1393 6.69206 19.016C6.27196 18.8528 5.97215 18.6577 5.65723 18.3428C5.34231 18.0278 5.14725 17.728 4.98398 17.3079C4.86073 16.9908 4.71411 16.5143 4.6741 15.6368C4.6308 14.6878 4.62162 14.4031 4.62162 12C4.62162 9.5969 4.6308 9.31224 4.6741 8.36323C4.71411 7.48574 4.86073 7.00919 4.98398 6.69206C5.14725 6.27196 5.34227 5.97215 5.65723 5.65723C5.97215 5.34227 6.27196 5.14725 6.69206 4.98398C7.00919 4.86073 7.48574 4.71411 8.36323 4.6741C9.31224 4.6308 9.5969 4.62162 12 4.62162ZM7.37838 12C7.37838 9.44753 9.44753 7.37838 12 7.37838C14.5525 7.37838 16.6216 9.44753 16.6216 12C16.6216 14.5525 14.5525 16.6216 12 16.6216C9.44753 16.6216 7.37838 14.5525 7.37838 12ZM12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15ZM16.8042 8.27577C17.4007 8.27577 17.8842 7.79226 17.8842 7.19579C17.8842 6.59931 17.4007 6.11577 16.8042 6.11577C16.2078 6.11577 15.7242 6.59931 15.7242 7.19579C15.7242 7.79226 16.2078 8.27577 16.8042 8.27577Z" fill="#F4511E"/>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.8078 13.5863C10.9134 13.5863 8.71698 13.5891 8.71698 13.5891V11.4109H14.2075C14.59 14.0465 13.4364 18 8.71698 18C5.55957 18 3 15.5375 3 12.5C3 9.46242 5.55957 7 8.71698 7C10.1985 7 11.5484 7.54216 12.5641 8.43152C11.777 9.14656 11.5247 9.41914 11.3103 9.65073C11.1988 9.77121 11.0976 9.88059 10.9366 10.0354C10.3492 9.56801 9.70868 9.23267 8.71698 9.23267C6.8413 9.23267 5.37736 10.6955 5.37736 12.5C5.37736 14.3045 6.8413 15.7673 8.71698 15.7673C10.5704 15.7673 11.3235 14.9984 11.8078 13.5863ZM19.0189 9.61386V11.5198H21V12.8812H19.0189V14.8416H17.6038V12.8812H15.566V11.5198H17.6038V9.61386H19.0189Z" fill="#F4511E"/>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.0005 3C7.03034 3 3 7.02928 3 12.0005C3 15.6848 5.21626 18.8515 8.38825 20.2433C8.36285 19.6156 8.38402 18.8599 8.54384 18.1762C8.71741 17.4459 9.70171 13.2727 9.70171 13.2727C9.70171 13.2727 9.41489 12.698 9.41489 11.8481C9.41489 10.5146 10.1886 9.51861 11.1506 9.51861C11.9688 9.51861 12.3646 10.1335 12.3646 10.8702C12.3646 11.6925 11.8397 12.9234 11.5698 14.0633C11.3443 15.0191 12.0482 15.797 12.9901 15.797C14.6952 15.797 15.8435 13.6072 15.8435 11.012C15.8435 9.04022 14.5153 7.56377 12.099 7.56377C9.36938 7.56377 7.66855 9.59905 7.66855 11.8725C7.66855 12.6578 7.89928 13.2103 8.26125 13.6379C8.42847 13.8358 8.4507 13.9141 8.39037 14.1406C8.34803 14.3046 8.24854 14.7047 8.20727 14.8624C8.14694 15.09 7.96278 15.1725 7.75745 15.0878C6.49903 14.5745 5.91374 13.1976 5.91374 11.6491C5.91374 9.09314 8.06968 6.02593 12.3456 6.02593C15.7821 6.02593 18.0439 8.5142 18.0439 11.1824C18.0439 14.7132 16.0817 17.3507 13.187 17.3507C12.2164 17.3507 11.302 16.8257 10.9887 16.2298C10.9887 16.2298 10.4659 18.3032 10.3558 18.7033C10.1653 19.3965 9.79167 20.0908 9.44981 20.6306C10.2595 20.8698 11.1147 21 12.0005 21C16.9707 21 21 16.9707 21 12.0005C21 7.02928 16.9707 3 12.0005 3Z" fill="#F4511E"/>
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M21 21H17.5717C17.5717 12.9649 11.0352 6.42836 3.00019 6.42836V3C12.9252 3 21 11.0749 21 21ZM3.00019 18.4286C3.00019 17.0085 4.15154 15.8571 5.57159 15.8571C6.99165 15.8571 8.14299 17.0085 8.14299 18.4286C8.14299 19.8486 6.99165 21 5.57159 21C4.15154 21 3.00019 19.8486 3.00019 18.4286ZM11.5718 21H15.0001C15.0001 14.3831 9.61686 8.99979 3 8.99979V12.4288C7.72623 12.4288 11.5718 16.2737 11.5718 21Z" fill="#F4511E"/>
                                </svg>
                            </div>
                        </article>
                    </div>
                    <div className='flex flex-col md:flex-row justify-around text-center  gap-4'>
                        <ul className='flex gap-3 lg:gap-5 mx-auto'>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Help</li>
                            <li>Privacy Policy</li>
                            <li>Disclaimer</li>
                        </ul>
                        <p className='opacity-50 mix-blend-normal'>Copyright © 2020 Minimumlivingcost. All rights reserved</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home
