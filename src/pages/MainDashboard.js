import React from 'react'
import planeImage from '../assets/Plane.png';
import shinagawaImage from '../assets/sinagawa.png'
import mercureImage from '../assets/mercure.png'
import sensoJiTemple from '../assets/senso-ji-temple.png'
import tokyoSkyTree from '../assets/tokyo Sky tree.png'
import kimonoWearing from '../assets/Kimono wearing.png'

const MainDashboard = () => {
  return (
    <div className='bg-[#FDFBF7] dark:bg-[#0B0809] w-screen h-auto '>
      <div className='text-[#FFFFFF] w-[356px] sm:w-[600px] lg:w-[800px] mx-auto '>
        {/* Intro */}
        <div className='pt-[40px] pb-[30px] flex justify-between items-center'>
          <div className='flex flex-col'>
            <h2 className='font-[Mont] font-[800] text-[24px] leading-[32px] text-[#333333] dark:text-[#FFFFFF]'>Hello Chhavi!</h2>
            <p className='font-[Montserrat] font-[500] text-[16px] leading-[22px] text-[#333333] dark:text-[#FFFFFF]'>Ready for the trip?</p>
          </div>
          <div className='w-[38px] h-[38px] font-[Mont] font-[200] text-[20px] leading-[16px] text-[#FFFFFF] flex justify-center items-center rounded-full bg-[#FF7339]'>
            C
          </div>
        </div>
        <p className='font-[Mont] pb-[10px] font-[600] text-[18px] leading-[24px] text-[#333333] dark:text-[#FFFFFF]'>Your Upcoming Trip</p>
        {/* Tokyo */}
        <div className='flex justify-center sm:py-[40px]'>
          <div className='h-[360px] sm:h-[400px] w-[400px] rounded-2xl overflow-hidden'>
            <div className='bg-gradient-overlay h-[330px] sm:h-[400px] w-[353px] sm:w-[400px]'>
              <div className='p-[20px] flex flex-col justify-between h-full'>
                <div className='flex justify-between'>
                  <div className='flex flex-col gap-2'>
                    <h2 className='font-[MODERNIZ] font-[900] text-[40px] leading-[24px]'>TOKYO</h2>
                    <p className='font-[Montserrat] font-[600] text-[12px] leading-[16px]'>27.01.2025-02.02.2025</p>
                  </div>
                  <div>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.24265 12.5563L12.5564 1.24264M12.5564 1.24264V9.72792M12.5564 1.24264H4.07108" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className='flex justify-between'>
                  <div className='flex gap-[2px] items-center'>
                    <div className='bg-[#292929] w-[28px] h-[28px] rounded-full flex justify-center items-center'>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0ZM8 1.6C6.30261 1.6 4.67475 2.27428 3.47452 3.47452C2.27428 4.67475 1.6 6.30261 1.6 8C1.6 9.69739 2.27428 11.3253 3.47452 12.5255C4.67475 13.7257 6.30261 14.4 8 14.4C9.69739 14.4 11.3253 13.7257 12.5255 12.5255C13.7257 11.3253 14.4 9.69739 14.4 8C14.4 6.30261 13.7257 4.67475 12.5255 3.47452C11.3253 2.27428 9.69739 1.6 8 1.6ZM8 3.2C8.19595 3.20003 8.38507 3.27196 8.5315 3.40217C8.67793 3.53238 8.77147 3.7118 8.7944 3.9064L8.8 4V7.6688L10.9656 9.8344C11.1091 9.97837 11.1924 10.1715 11.1986 10.3747C11.2048 10.5779 11.1334 10.7758 10.999 10.9282C10.8646 11.0807 10.6772 11.1762 10.4748 11.1955C10.2725 11.2148 10.0704 11.1563 9.9096 11.032L9.8344 10.9656L7.4344 8.5656C7.31006 8.44116 7.23021 8.2792 7.2072 8.1048L7.2 8V4C7.2 3.78783 7.28429 3.58434 7.43431 3.43431C7.58434 3.28429 7.78783 3.2 8 3.2Z" fill="#D1F462" />
                      </svg>
                    </div>
                    <div>
                      <p className='font-[Monotserrat] font-[600] leading-[12px] text-[12px]'>8 Days</p>
                      <p className='font-[Monotserrat] font-[400] leading-[10px] text-[10px]'>Duration</p>
                    </div>
                  </div>
                  <div className='flex gap-[2px] items-center'>
                    <div className='bg-[#292929] w-[28px] h-[28px] rounded-full flex justify-center items-center'>
                      <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.900391 12.2793C1.05273 11.1367 1.63672 10.1211 2.5 9.41016C3.28711 8.75 4.30273 8.34375 5.39453 8.34375H6.5625H7.70508C8.82227 8.34375 9.8125 8.75 10.5996 9.41016C11.4629 10.1211 12.0469 11.1367 12.1992 12.2793C12.2246 12.4824 12.2246 12.6855 12.2246 12.8887C12.2246 13.2949 11.8945 13.625 11.4883 13.625H10.9805H2.11914H1.61133C1.20508 13.625 0.875 13.2949 0.875 12.8887C0.875 12.6855 0.875 12.4824 0.900391 12.2793ZM3.3125 3.875C3.3125 2.73242 3.92188 1.66602 4.9375 1.08203C5.92773 0.498047 7.17188 0.498047 8.1875 1.08203C9.17773 1.66602 9.8125 2.73242 9.8125 3.875C9.8125 5.04297 9.17773 6.10938 8.1875 6.69336C7.17188 7.27734 5.92773 7.27734 4.9375 6.69336C3.92188 6.10938 3.3125 5.04297 3.3125 3.875ZM8.59375 3.875C8.59375 3.16406 8.1875 2.50391 7.57812 2.12305C6.94336 1.76758 6.15625 1.76758 5.54688 2.12305C4.91211 2.50391 4.53125 3.16406 4.53125 3.875C4.53125 4.61133 4.91211 5.27148 5.54688 5.65234C6.15625 6.00781 6.94336 6.00781 7.57812 5.65234C8.1875 5.27148 8.59375 4.61133 8.59375 3.875ZM5.39453 9.5625C4.17578 9.5625 3.10938 10.2227 2.55078 11.1875C2.32227 11.5684 2.16992 11.9746 2.11914 12.4062H3.36328H9.76172H10.9805C10.9805 12.3555 10.9805 12.2793 10.9551 12.2031C10.8789 11.8477 10.752 11.5176 10.5488 11.1875C9.99023 10.2227 8.92383 9.5625 7.70508 9.5625H5.39453ZM16.3379 13.625H12.8594C12.9863 13.4219 13.0625 13.168 13.0625 12.8887C13.0625 11.2383 12.3008 9.76562 11.1328 8.77539C11.2344 8.77539 11.3359 8.75 11.4629 8.75H13.0117C15.2715 8.75 17.125 10.6035 17.125 12.8633C17.125 13.2949 16.7695 13.625 16.3379 13.625ZM11.8438 7.125C11.0566 7.125 10.3457 6.82031 9.8125 6.3125C10.3203 5.62695 10.625 4.78906 10.625 3.875C10.625 3.21484 10.4473 2.55469 10.1426 1.99609C10.625 1.66602 11.209 1.4375 11.8438 1.4375C13.3926 1.4375 14.6875 2.73242 14.6875 4.28125C14.6875 5.85547 13.3926 7.125 11.8438 7.125Z" fill="#D1F462" />
                      </svg>
                    </div>
                    <div>
                      <p className='font-[Monotserrat] font-[600] leading-[12px] text-[12px]'>4 (2M,2F)</p>
                      <p className='font-[Monotserrat] font-[400] leading-[10px] text-[10px]'>Group Size</p>
                    </div>
                  </div>
                  <div className='flex gap-[2px] items-center'>
                    <div className='bg-[#292929] w-[28px] h-[28px] rounded-full flex justify-center items-center'>
                      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.75 2V6.5L9.25 5L7.75 6.5V2H4.75V14H12.25V2H10.75ZM0.25 4.25V2.75H1.75V2C1.75 1.60218 1.90804 1.22064 2.18934 0.93934C2.47064 0.658035 2.85218 0.5 3.25 0.5H12.25C13.0375 0.5 13.75 1.2125 13.75 2V14C13.75 14.7875 13.0375 15.5 12.25 15.5H3.25C2.4625 15.5 1.75 14.7875 1.75 14V13.25H0.25V11.75H1.75V8.75H0.25V7.25H1.75V4.25H0.25ZM1.75 2.75V4.25H3.25V2.75H1.75ZM1.75 13.25H3.25V11.75H1.75V13.25ZM1.75 8.75H3.25V7.25H1.75V8.75Z" fill="#D1F462" />
                      </svg>
                    </div>
                    <div>
                      <p className='font-[Monotserrat] font-[600] leading-[12px] text-[12px]'>14</p>
                      <p className='font-[Monotserrat] font-[400] leading-[10px] text-[10px]'>Activities</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Flight Details */}
        <div className='flex justify-center  sm:py-[40px]'>
          <div className='w-[500px] h-[200px] bg-[#3643FB] rounded-2xl relative overflow-hidden'>
            <div className=' m-2 bg-[#313DDF] h-[180px] p-[8px] rounded-2xl'>
              <div className='h-full flex flex-col justify-between'>
                <div className='flex justify-between'>
                  <div className='flex flex-col'>
                    <p className='font-[Mont] font-[700] text-[16px] leading-[24px]'>Flight Details</p>
                    <p className='font-[Montserrat] font-[400] text-[14px] leading-[20px]'>26.01.2025, 10:50 am</p>
                  </div>
                  <p className=' font-[Mont] font-[800] text-[10px] leading-[16px] underline text-[#D1F462]'>See all</p>
                </div>
                <div className='flex gap-[6px]'>
                  <div>
                    <h3 className='font-[Mont] font-[700] text-[16px] leading-[16px]'>DEL</h3>
                    <p className='font-[Montserrat] font-[400] text-[12px] leading-[16px]'>Delhi, India</p>
                  </div>
                  <div>
                    <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M18.372 6.47003C18.5148 6.61066 18.5951 6.80128 18.5951 7.00003C18.5951 7.19878 18.5148 7.38941 18.372 7.53003L12.2682 13.53C12.1984 13.6037 12.1141 13.6628 12.0205 13.7038C11.927 13.7448 11.8259 13.7668 11.7235 13.7686C11.621 13.7704 11.5193 13.7519 11.4243 13.7142C11.3293 13.6764 11.243 13.6203 11.1705 13.5491C11.0981 13.4779 11.041 13.393 11.0026 13.2996C10.9642 13.2062 10.9454 13.1062 10.9472 13.0055C10.949 12.9048 10.9714 12.8055 11.0131 12.7135C11.0548 12.6215 11.1149 12.5387 11.1899 12.47L15.9915 7.75003H1.55614C1.35379 7.75003 1.15972 7.67101 1.01664 7.53036C0.873554 7.38971 0.793171 7.19894 0.793171 7.00003C0.793171 6.80112 0.873554 6.61035 1.01664 6.4697C1.15972 6.32905 1.35379 6.25003 1.55614 6.25003H15.9915L11.1899 1.53003C11.1149 1.46137 11.0548 1.37857 11.0131 1.28657C10.9714 1.19457 10.949 1.09526 10.9472 0.994554C10.9454 0.893851 10.9642 0.793822 11.0026 0.700434C11.041 0.607045 11.0981 0.522212 11.1705 0.450993C11.243 0.379774 11.3293 0.32363 11.4243 0.285909C11.5193 0.248188 11.621 0.229663 11.7235 0.23144C11.8259 0.233217 11.927 0.255258 12.0205 0.29625C12.1141 0.337242 12.1984 0.396344 12.2682 0.470031L18.372 6.47003Z" fill="white" />
                    </svg>
                  </div>
                  <div>
                    <h3 className='font-[Mont] font-[700] text-[16px] leading-[16px]'>NRT</h3>
                    <p className='font-[Montserrat] font-[400] text-[12px] leading-[16px]'>Narita, Tokyo</p>
                  </div>
                </div>
              </div>


            </div>
            <div className='absolute bottom-0 right-0'>
              <img src={planeImage} />
            </div>
          </div>
        </div>


        {/* Accomodation */}
        <div className=''>
          <div className='flex justify-between items-center py-[30px] sm:py-[20px]'>
            <h3 className='font-[Mont] font-[700] text-[18px] leading-[24px] text-[#333333] dark:text-[#FFFFFF]'>Accomodation</h3>
            <p className='font-[Mont] font-[800] text-[10px] leading-[16px] text-[#3643FB] dark:text-[#D1F462] underline'>See all</p>
          </div>
          <div className='flex justify-center gap-8 flex-wrap items-center'>
            {/* Accomodation1 */}
            <div className='flex flex-col  h-[239px] w-[198px] sm:h-[300px] sm:w-[300px] rounded-2xl overflow-hidden border-[1px] border-[#BFBFBF] dark:border-[#4D4D4D] bg-[#FDFBF7] dark:bg-[#4D4D4D]'>
              <div className='relative'>
                <img width={300} src={shinagawaImage} alt='shinagawa Image' />
                {/* Rating */}
                <div className='absolute bottom-[5px] left-[10px] bg-[#3643FB]'>
                  <div className='flex gap-[2px] items-center py-[2px] px-[2px]'>
                    <div>
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.71676 8.55402L2.4551 5.39047L0.00012207 3.26358L3.23393 2.98372L4.50042 0L5.76691 2.98313L9.00012 3.26298L6.54514 5.38988L7.28408 8.55342L4.50042 6.8743L1.71676 8.55402Z" fill="white" />
                      </svg>
                    </div>
                    <p className='font-[Mont] font-[700] text-[8px] leading-[16px]'>4.0 Very Good</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-around h-full p-2'>
                <div className='text-[#333333] dark:text-[#FFFFFF]'>
                  <h3 className='font-[Mont] font-[700] text-[14px] leading-[15px]'>Shinagawa Prince Hotel</h3>
                  <p className='font-[Montserrat] text-[12px] leading-[16px] font-[400]'><span className='font-[Mont] text-[12px] leading-[16px] font-[700]'>Check in: </span>26.01.2025,11:15pm</p>
                  <p className='font-[Montserrat] text-[12px] leading-[16px] font-[400]'><span className='font-[Mont] text-[12px] leading-[16px] font-[700]'>Check out: </span>28.01.2025,11:15am</p>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='font-[Mont] text-[12px] leading-[16px] font-[700] text-[#333333] dark:text-[#FFFFFF]'>2 Nights</p>
                  <div className='flex gap-[4px] items-center'>
                    <div>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 9.5C2.5 5.63444 5.63444 2.5 9.5 2.5C13.3656 2.5 16.5 5.63444 16.5 9.5C16.5 13.3656 13.3656 16.5 9.5 16.5C5.63444 16.5 2.5 13.3656 2.5 9.5Z" stroke="#90EB61" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.38892 9.49995L8.72225 11.8333L12.6111 7.9444" stroke="#90EB61" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>

                    </div>
                    <p className='font-[Mont] text-[12px] leading-[16px] font-[700] text-[#90EB61]'>Confirmed</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Accomodation2 */}
            <div className='flex flex-col h-[239px] w-[198px] sm:h-[300px] sm:w-[300px] rounded-2xl overflow-hidden border-[1px] border-[#BFBFBF] dark:border-[#4D4D4D] bg-[#FDFBF7] dark:bg-[#4D4D4D]'>
              <div className='h-[510px] overflow-hidden relative'>
                <img width={300} src={mercureImage} alt='shinagawa Image' />
                {/* Rating */}
                <div className='absolute bottom-[5px] left-[10px] bg-[#3643FB]'>
                  <div className='flex gap-[2px] items-center py-[2px] px-[2px]'>
                    <div>
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.71676 8.55402L2.4551 5.39047L0.00012207 3.26358L3.23393 2.98372L4.50042 0L5.76691 2.98313L9.00012 3.26298L6.54514 5.38988L7.28408 8.55342L4.50042 6.8743L1.71676 8.55402Z" fill="white" />
                      </svg>
                    </div>
                    <p className='font-[Mont] font-[700] text-[8px] leading-[16px]'>4.1 Very Good</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-around h-full p-2'>
                <div className='text-[#333333] dark:text-[#FFFFFF]'>
                  <h3 className='font-[Mont] font-[700] text-[14px] leading-[15px]'>Mercure Tokyo Hotel</h3>
                  <p className='font-[Montserrat] text-[12px] leading-[16px] font-[400]'><span className='font-[Mont] text-[12px] leading-[16px] font-[700]'>Check in: </span>28.01.2025, 6:00pm</p>
                  <p className='font-[Montserrat] text-[12px] leading-[16px] font-[400]'><span className='font-[Mont] text-[12px] leading-[16px] font-[700]'>Check out: </span>30.01.2025, 11:15am</p>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='font-[Mont] text-[12px] leading-[16px] font-[700] text-[#333333] dark:text-[#FFFFFF]'>2 Nights</p>
                  <div className='flex gap-[4px] items-center'>
                    <div>
                      <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.52381 3.80952H8.38095V7.61905L11.6419 9.55429L12.1905 8.63238L9.52381 7.04762V3.80952ZM9.14286 0C7.32423 0 5.58009 0.722447 4.29413 2.00841C3.00816 3.29437 2.28571 5.03852 2.28571 6.85714H0L3.01714 9.92762L6.09524 6.85714H3.80952C3.80952 5.44266 4.37143 4.0861 5.37162 3.08591C6.37182 2.08571 7.72837 1.52381 9.14286 1.52381C10.5573 1.52381 11.9139 2.08571 12.9141 3.08591C13.9143 4.0861 14.4762 5.44266 14.4762 6.85714C14.4762 8.27163 13.9143 9.62819 12.9141 10.6284C11.9139 11.6286 10.5573 12.1905 9.14286 12.1905C7.67238 12.1905 6.33905 11.5886 5.37905 10.621L4.29714 11.7029C4.93075 12.3432 5.68559 12.8509 6.51758 13.1962C7.34958 13.5416 8.24204 13.7177 9.14286 13.7143C10.9615 13.7143 12.7056 12.9918 13.9916 11.7059C15.2776 10.4199 16 8.67577 16 6.85714C16 5.03852 15.2776 3.29437 13.9916 2.00841C12.7056 0.722447 10.9615 0 9.14286 0Z" fill="#FF6525" />
                      </svg>

                    </div>
                    <p className='font-[Mont] text-[12px] leading-[16px] font-[700] text-[#FF6525]'>Pending</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Accomodation3 */}
            <div className='flex flex-col h-[239px] w-[198px] sm:h-[300px] sm:w-[300px] rounded-2xl overflow-hidden border-[1px] border-[#BFBFBF] dark:border-[#4D4D4D] bg-[#FDFBF7] dark:bg-[#4D4D4D]'>
              <div className='h-[510px] overflow-hidden relative'>
                <img width={300} src={mercureImage} alt='shinagawa Image' />
                {/* Rating */}
                <div className='absolute bottom-[5px] left-[10px] bg-[#3643FB]'>
                  <div className='flex gap-[2px] items-center py-[2px] px-[2px]'>
                    <div>
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.71676 8.55402L2.4551 5.39047L0.00012207 3.26358L3.23393 2.98372L4.50042 0L5.76691 2.98313L9.00012 3.26298L6.54514 5.38988L7.28408 8.55342L4.50042 6.8743L1.71676 8.55402Z" fill="white" />
                      </svg>
                    </div>
                    <p className='font-[Mont] font-[700] text-[8px] leading-[16px]'>4.1 Very Good</p>
                  </div>
                </div>
              </div>
              <div className='flex flex-col justify-around h-full p-2'>
                <div className='text-[#333333] dark:text-[#FFFFFF]'>
                  <h3 className='font-[Mont] font-[700] text-[14px] leading-[15px]'>Mercure Tokyo Hotel</h3>
                  <p className='font-[Montserrat] text-[12px] leading-[16px] font-[400]'><span className='font-[Mont] text-[12px] leading-[16px] font-[700]'>Check in: </span>28.01.2025, 6:00pm</p>
                  <p className='font-[Montserrat] text-[12px] leading-[16px] font-[400]'><span className='font-[Mont] text-[12px] leading-[16px] font-[700]'>Check out: </span>30.01.2025, 11:15am</p>
                </div>
                <div className='flex justify-between items-center'>
                  <p className='font-[Mont] text-[12px] leading-[16px] font-[700] text-[#333333] dark:text-[#FFFFFF]'>2 Nights</p>
                  <div className='flex gap-[4px] items-center'>
                    <div>
                      <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.52381 3.80952H8.38095V7.61905L11.6419 9.55429L12.1905 8.63238L9.52381 7.04762V3.80952ZM9.14286 0C7.32423 0 5.58009 0.722447 4.29413 2.00841C3.00816 3.29437 2.28571 5.03852 2.28571 6.85714H0L3.01714 9.92762L6.09524 6.85714H3.80952C3.80952 5.44266 4.37143 4.0861 5.37162 3.08591C6.37182 2.08571 7.72837 1.52381 9.14286 1.52381C10.5573 1.52381 11.9139 2.08571 12.9141 3.08591C13.9143 4.0861 14.4762 5.44266 14.4762 6.85714C14.4762 8.27163 13.9143 9.62819 12.9141 10.6284C11.9139 11.6286 10.5573 12.1905 9.14286 12.1905C7.67238 12.1905 6.33905 11.5886 5.37905 10.621L4.29714 11.7029C4.93075 12.3432 5.68559 12.8509 6.51758 13.1962C7.34958 13.5416 8.24204 13.7177 9.14286 13.7143C10.9615 13.7143 12.7056 12.9918 13.9916 11.7059C15.2776 10.4199 16 8.67577 16 6.85714C16 5.03852 15.2776 3.29437 13.9916 2.00841C12.7056 0.722447 10.9615 0 9.14286 0Z" fill="#FF6525" />
                      </svg>

                    </div>
                    <p className='font-[Mont] text-[12px] leading-[16px] font-[700] text-[#FF6525]'>Pending</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Activites */}
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between items-center py-[10px] sm:py-[30px]'>
            <h3 className='font-[Mont] font-[700] text-[18px] leading-[24px] text-[#333333] dark:text-[#FFFFFF]'>Activites</h3>
            <p className='font-[Mont] font-[800] text-[10px] leading-[16px] text-[#3643FB] dark:text-[#D1F462] underline '>See all</p>
          </div>
          <div className='border-[1px] border-[#A6A6A6] dark:border-[#333333] bg-[#FDFBF7] dark:bg-[#333333] h-[120px] rounded-xl'>
            <div className='p-[6px] flex flex-col justify-around h-full '>
              <div className='flex gap-[8px]'>
                <button className='rounded-lg py-[6px] px-[6px] bg-[#313DDF] dark:bg-[#D3F462] text-[12px] leading-[12px] text-[#FDFBF7] dark:text-[#333333] font-[Montserrat] font-[600]'>Day Plan</button>
                <button className='rounded-lg py-[6px] px-[6px] bg-[#FDFBF7] dark:bg-[#292929] text-[12px] leading-[12px] text-[#313DDF] dark:text-[#D3F462] font-[Montserrat] font-[600] border-[0.5px] border-[#313DDF] dark:border-[#D3F462]'>14 Activities</button>
              </div>
              <div className='flex gap-[10px]'>
                {/* Mon */}
                <div className='flex w-[80px] h-[40px] border-[1px] border-[#313DDF] dark:border-[#D3F462] rounded-lg overflow-hidden'>
                  <div className='flex items-center justify-center w-[35px] bg-[#313DDF] dark:bg-[#D3F462]'>
                    <p className='-rotate-90 transform font-[Montserrat] font-[600] text-[12px] leading-[12px] text-[#F5F5F5] dark:text-[#0B0809]'>JAN</p>
                  </div>

                  <div className='bg-[#FDFBF7] dark:bg-[#292929] flex flex-col justify-evenly items-center w-[45px]'>
                    <p className='font-[Montserrat] font-[500] text-[12px] leading-[12px] text-[#333333] dark:text-[#F5F5F5]'>MON</p>
                    <p className='font-[Montserrat] font-[500] text-[14px] leading-[12px] text-[#333333] dark:text-[#F5F5F5]'>27</p>
                  </div>
                </div>
                {/* TUE */}
                <div className='bg-[#E5E5E5] dark:bg-[#292929] flex flex-col justify-evenly items-center w-[45px] h-[40px] rounded-lg'>
                  <p className='font-[Montserrat] font-[500] text-[12px] leading-[12px] text-[#808080] dark:text-[#808080]'>TUE</p>
                  <p className='font-[Montserrat] font-[500] text-[14px] leading-[12px] text-[#808080] dark:text-[#808080]'>28</p>
                </div>
                {/* WED */}
                <div className='bg-[#E5E5E5] dark:bg-[#292929] flex flex-col justify-evenly items-center w-[45px] h-[40px] rounded-lg'>
                  <p className='font-[Montserrat] font-[500] text-[12px] leading-[12px] text-[#808080] dark:text-[#808080]'>WED</p>
                  <p className='font-[Montserrat] font-[500] text-[14px] leading-[12px] text-[#808080] dark:text-[#808080]'>29</p>
                </div>
                {/* THU */}
                <div className='bg-[#E5E5E5] dark:bg-[#292929] flex flex-col justify-evenly items-center w-[45px] h-[40px] rounded-lg'>
                  <p className='font-[Montserrat] font-[500] text-[12px] leading-[12px] text-[#808080] dark:text-[#808080]'>THU</p>
                  <p className='font-[Montserrat] font-[500] text-[14px] leading-[12px] text-[#808080] dark:text-[#808080]'>30</p>
                </div>
                {/* FRI */}
                <div className='bg-[#E5E5E5] dark:bg-[#292929] flex flex-col justify-evenly items-center w-[45px] h-[40px] rounded-lg'>
                  <p className='font-[Montserrat] font-[500] text-[12px] leading-[12px] text-[#808080] dark:text-[#808080]'>FRI</p>
                  <p className='font-[Montserrat] font-[500] text-[14px] leading-[12px] text-[#808080] dark:text-[#808080]'>31</p>
                </div>
                {/* SAT */}
                <div className='flex w-[80px] h-[40px]  rounded-lg overflow-hidden'>
                  <div className='flex items-center justify-center w-[35px] bg-[#808080] dark:bg-[#808080]'>
                    <p className='-rotate-90 transform font-[Montserrat] font-[600] text-[12px] leading-[12px] text-[#F5F5F5] dark:text-[#0B0809]'>FEB</p>
                  </div>

                  <div className='bg-[#E5E5E5] dark:bg-[#292929] flex flex-col justify-evenly items-center w-[45px]'>
                    <p className='font-[Montserrat] font-[500] text-[12px] leading-[12px] text-[#808080]'>SAT</p>
                    <p className='font-[Montserrat] font-[500] text-[14px] leading-[12px] text-[#808080]'>1</p>
                  </div>
                </div>
                {/* SUN */}
                <div className='bg-[#E5E5E5] dark:bg-[#292929] flex flex-col justify-evenly items-center w-[45px] h-[40px] rounded-lg'>
                  <p className='font-[Montserrat] font-[500] text-[12px] leading-[12px] text-[#808080] dark:text-[#808080]'>SUN</p>
                  <p className='font-[Montserrat] font-[500] text-[14px] leading-[12px] text-[#808080] dark:text-[#808080]'>2</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Day 1 Activities List */}
        <div className='pb-[100px] sm:py-[100px]'>
          <div className='flex gap-5 items-center py-[20px] sm:py-[50px]'>
            <button className='bg-[#3643FB] dark:bg-[#D3F462] rounded-lg py-[5px] px-[6px] text-[#F5F5F5] dark:text-[#0B0809] font-[Montserrat] font-[600] text-[12px] leading-[12px]'>Day 1 27.01.2025</button>
            <div className='flex gap-[2px] text-[#3643FB] dark:text-[#D3F462]'>
              <div>
                <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.2187 0.75C3.81308 0.751613 3.42454 0.913458 3.13772 1.20027C2.85091 1.48709 2.68906 1.87563 2.68745 2.28125C2.68745 3.12212 3.37782 3.8125 4.2187 3.8125C5.05957 3.8125 5.74995 3.12212 5.74995 2.28125C5.74995 1.44037 5.05957 0.75 4.2187 0.75ZM4.2187 1.625C4.5862 1.625 4.87495 1.91375 4.87495 2.28125C4.87495 2.64875 4.5862 2.9375 4.2187 2.9375C3.8512 2.9375 3.56245 2.64875 3.56245 2.28125C3.56245 1.91375 3.8512 1.625 4.2187 1.625ZM1.85357 3.59375C1.73952 3.58619 1.62498 3.59074 1.51189 3.60731C1.27426 3.64772 1.05202 3.75173 0.868761 3.90831C0.486386 4.23294 0.264136 4.74919 0.103136 5.50781C0.0523862 5.75238 0.0676988 6.00525 0.185386 6.20519C0.303511 6.40513 0.488136 6.52631 0.650449 6.60156C0.976824 6.75206 1.2962 6.78094 1.47076 6.82031L1.67595 5.97244C1.41257 5.91294 1.1422 5.86481 1.0197 5.80881C0.958011 5.7795 0.949699 5.76244 0.951011 5.76769C0.944477 5.74066 0.944477 5.71246 0.951011 5.68544C1.09101 5.02262 1.29445 4.70281 1.4432 4.57812C1.59195 4.45344 1.71489 4.43288 1.99007 4.49588L2.1817 3.63487C2.07374 3.61156 1.96394 3.5978 1.85357 3.59375ZM2.6192 3.73069L1.97651 6.65625C1.90476 6.98438 2.03995 7.34006 2.30464 7.54481L3.84945 8.74794L4.23226 11.25H5.12126L4.71089 8.61144C4.67756 8.38929 4.56008 8.18847 4.38276 8.05056L2.83795 6.84744L3.28901 4.81044L3.74007 4.93338L4.51926 5.68587C4.77257 5.93 5.15364 5.98775 5.47651 5.8495L6.18745 5.54938V11.25H7.06245V3.8125H6.18745V4.60569L5.13482 5.05631L4.3552 4.30469C4.24836 4.20029 4.11657 4.12498 3.97239 4.08594L2.6192 3.73069ZM2.04476 8.02344L1.67551 9.13075L0.582199 11.25H1.56657L2.45557 9.54113C2.47745 9.49825 2.4967 9.44881 2.51026 9.40419L2.7837 8.59787L2.04476 8.02344Z" fill="currentColor" />
                </svg>
              </div>
              <p className='font-[Montserrat] font-[600] text-[12px] leading-[12px] '>3 Activities</p>
            </div>
          </div>
          {/* Cards */}
          <div className='flex my- flex-col gap-[10px] items-center border-[1px] p-2 border-[#FDFBF7] dark:border-[#D3F462] rounded-lg  lg:w-[800px]'>
            {/* Card 1 */}
            <div className='flex border-[1px] border-[#BFBFBF] dark:border-[#4D4D4D] bg-[#FDFBF7] dark:bg-[#4D4D4D] sm:w-[500px] lg:w-full rounded-lg overflow-hidden'>
              <div>
                <img width={200} alt='' src={sensoJiTemple} />
              </div>
              <div className='py-[20px] px-[15px] flex flex-col justify-around'>
                <p className='font-[Mont] font-[700] text-[14px] leading-[15px] text-[#333333] dark:text-[#F5F5F5]'>Senso-ji Temple & Nakamise Shopping Street Senso-ji</p>
                <div>text-[#F5F5F5] dark:
                  <p className='font-[Montserrat] font-[400] text-[12px] leading-[16px] text-[#333333] dark:text-[#F5F5F5]'><span className='font-[Mont] font-[700] text-[12px] leading-[16px]'>Timing: </span>8:15 am Morning</p>
                  <p className='font-[Montserrat] font-[400] text-[12px] leading-[16px] text-[#333333] dark:text-[#F5F5F5]'><span className='font-[Mont] font-[700] text-[12px] leading-[16px]'>Duration: </span>3 hours</p>
                  <p className='font-[Montserrat] font-[400] text-[12px] leading-[16px] text-[#333333] dark:text-[#F5F5F5]'><span className='font-[Mont] font-[700] text-[12px] leading-[16px]'>Pick up: </span>From Hotel</p>
                </div>
              </div>

            </div>
            {/* Card 2 */}
            <div className='flex border-[1px] border-[#BFBFBF] dark:border-[#4D4D4D] bg-[#FDFBF7] dark:bg-[#4D4D4D] sm:w-[500px] lg:w-full rounded-lg overflow-hidden'>
              <div>
                <img width={200} alt='' src={tokyoSkyTree} />
              </div>
              <div className='py-[20px] px-[15px] flex flex-col justify-around'>
                <p className='font-[Mont] font-[700] text-[14px] leading-[15px] text-[#333333] dark:text-[#F5F5F5]'>Tokyo Sky Tree</p>
                <div>
                  <p className='font-[Montserrat] font-[400] text-[12px] leading-[16px] text-[#333333] dark:text-[#F5F5F5]'><span className='font-[Mont] font-[700] text-[12px] leading-[16px]'>Timing: </span>1:00 pm Afteroon</p>
                  <p className='font-[Montserrat] font-[400] text-[12px] leading-[16px] text-[#333333] dark:text-[#F5F5F5]'><span className='font-[Mont] font-[700] text-[12px] leading-[16px]'>Duration: </span>7 hours</p>
                  <p className='font-[Montserrat] font-[400] text-[12px] leading-[16px] text-[#333333] dark:text-[#F5F5F5]'><span className='font-[Mont] font-[700] text-[12px] leading-[16px]'>Pick up: </span>From Nakamise Street</p>
                </div>
              </div>

            </div>
            {/* Card 3 */}
            <div className='flex border-[1px] border-[#BFBFBF] dark:border-[#4D4D4D] bg-[#FDFBF7] dark:bg-[#4D4D4D] sm:w-[500px] lg:w-full rounded-lg overflow-hidden'>
              <div>
                <img width={200} alt='' src={kimonoWearing} />
              </div>
              <div className='py-[20px] px-[15px] flex flex-col justify-around'>
                <p className='font-[Mont] font-[700] text-[14px] leading-[15px] text-[#333333] dark:text-[#F5F5F5]'>Kimono Wearing</p>
                <div>
                  <p className='font-[Montserrat] font-[400] text-[12px] leading-[16px] text-[#333333] dark:text-[#F5F5F5]'><span className='font-[Mont] font-[700] text-[12px] leading-[16px]'>Timing: </span>Anytime before 8:00pm</p>
                  <p className='font-[Montserrat] font-[400] text-[12px] leading-[16px] text-[#333333] dark:text-[#F5F5F5]'><span className='font-[Mont] font-[700] text-[12px] leading-[16px]'>Duration: </span>1-2 hours</p>
                  <p className='font-[Montserrat] font-[400] text-[12px] leading-[16px] text-[#333333] dark:text-[#F5F5F5]'><span className='font-[Mont] font-[700] text-[12px] leading-[16px]'>Pick up: </span>From Hotel</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className='fixed bottom-0 w-full bg-[#FDFBF7] dark:bg-[#0B0809] left-[50%] -translate-x-[50%]' >
          <div className='py-[10px] sm:py-[20px] flex gap-8 xl:gap-10 items-center justify-center'>
            <div className='h-[48px] w-[48px] rounded-full text-[#3643FB]  dark:text-[#D1F462] bg-[#3643fb49] dark:bg-[#d2f4622c] flex justify-center items-center'>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.2861 1.21065C12.6472 0.929784 13.1529 0.929784 13.514 1.21065L22.514 8.21065C22.7576 8.4001 22.9 8.69141 22.9 9V20C22.9 20.7957 22.584 21.5587 22.0213 22.1213C21.4587 22.6839 20.6957 23 19.9 23H5.90002C5.10437 23 4.34131 22.6839 3.7787 22.1213C3.21609 21.5587 2.90002 20.7957 2.90002 20V9C2.90002 8.69141 3.0425 8.4001 3.28608 8.21065L12.2861 1.21065ZM4.90002 9.48908V20C4.90002 20.2652 5.00538 20.5196 5.19292 20.7071C5.38045 20.8946 5.63481 21 5.90002 21H19.9C20.1652 21 20.4196 20.8946 20.6071 20.7071C20.7947 20.5196 20.9 20.2652 20.9 20V9.48908L12.9 3.26686L4.90002 9.48908Z" fill="currentColor" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.90002 12C8.90002 11.4477 9.34774 11 9.90002 11H15.9C16.4523 11 16.9 11.4477 16.9 12V22C16.9 22.5523 16.4523 23 15.9 23C15.3477 23 14.9 22.5523 14.9 22V13H10.9V22C10.9 22.5523 10.4523 23 9.90002 23C9.34774 23 8.90002 22.5523 8.90002 22V12Z" fill="currentColor" />
              </svg>
            </div>
            <div className='text-[#4D4D4D] dark:text-[#E5E5E5]'>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7001 4C7.83408 4 4.70007 7.13401 4.70007 11C4.70007 14.866 7.83408 18 11.7001 18C15.5661 18 18.7001 14.866 18.7001 11C18.7001 7.13401 15.5661 4 11.7001 4ZM2.70007 11C2.70007 6.02944 6.72951 2 11.7001 2C16.6706 2 20.7001 6.02944 20.7001 11C20.7001 15.9706 16.6706 20 11.7001 20C6.72951 20 2.70007 15.9706 2.70007 11Z" fill="currentColor" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.643 15.9429C17.0335 15.5524 17.6667 15.5524 18.0572 15.9429L22.4072 20.2929C22.7977 20.6834 22.7977 21.3166 22.4072 21.7071C22.0167 22.0977 21.3835 22.0977 20.993 21.7071L16.643 17.3571C16.2525 16.9666 16.2525 16.3334 16.643 15.9429Z" fill="currentColor" />
              </svg>
            </div>
            <div className='text-[#3643FB]  dark:text-[#D1F462] '>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_196_4906)">
                  <g clip-path="url(#clip1_196_4906)">
                    <path d="M20.9286 12.5714H13.0714V20.4285C13.0714 20.8453 12.9059 21.245 12.6112 21.5397C12.3165 21.8344 11.9168 21.9999 11.5 21.9999C11.0832 21.9999 10.6835 21.8344 10.3888 21.5397C10.0941 21.245 9.92857 20.8453 9.92857 20.4285V12.5714H2.07143C1.65466 12.5714 1.25496 12.4058 0.960261 12.1111C0.665561 11.8164 0.5 11.4167 0.5 10.9999C0.5 10.5832 0.665561 10.1835 0.960261 9.88877C1.25496 9.59407 1.65466 9.42851 2.07143 9.42851H9.92857V1.57137C9.92857 1.1546 10.0941 0.754899 10.3888 0.460199C10.6835 0.165499 11.0832 -6.10352e-05 11.5 -6.10352e-05C11.9168 -6.10352e-05 12.3165 0.165499 12.6112 0.460199C12.9059 0.754899 13.0714 1.1546 13.0714 1.57137V9.42851H20.9286C21.3453 9.42851 21.745 9.59407 22.0397 9.88877C22.3344 10.1835 22.5 10.5832 22.5 10.9999C22.5 11.4167 22.3344 11.8164 22.0397 12.1111C21.745 12.4058 21.3453 12.5714 20.9286 12.5714Z" fill="currentColor" />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_196_4906">
                    <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                  </clipPath>
                  <clipPath id="clip1_196_4906">
                    <rect width="24" height="24" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className='text-[#4D4D4D] dark:text-[#E5E5E5]'>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.05005 3.5C5.42705 3.5 3.30005 5.76 3.30005 8.547C3.30005 14.125 12.3 20.5 12.3 20.5C12.3 20.5 21.3 14.125 21.3 8.547C21.3 5.094 19.173 3.5 16.55 3.5C14.69 3.5 13.08 4.636 12.3 6.29C11.52 4.636 9.91005 3.5 8.05005 3.5Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </div>
            <div className='text-[#4D4D4D] dark:text-[#E5E5E5]'>
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.56444 15.4645C5.50212 14.5268 6.77389 14 8.09998 14H16.1C17.4261 14 18.6978 14.5268 19.6355 15.4645C20.5732 16.4021 21.1 17.6739 21.1 19V21C21.1 21.5523 20.6523 22 20.1 22C19.5477 22 19.1 21.5523 19.1 21V19C19.1 18.2044 18.7839 17.4413 18.2213 16.8787C17.6587 16.3161 16.8956 16 16.1 16H8.09998C7.30433 16 6.54126 16.3161 5.97866 16.8787C5.41605 17.4413 5.09998 18.2044 5.09998 19V21C5.09998 21.5523 4.65226 22 4.09998 22C3.54769 22 3.09998 21.5523 3.09998 21V19C3.09998 17.6739 3.62676 16.4021 4.56444 15.4645Z" fill="#676D75" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1 4C10.4431 4 9.09998 5.34315 9.09998 7C9.09998 8.65685 10.4431 10 12.1 10C13.7568 10 15.1 8.65685 15.1 7C15.1 5.34315 13.7568 4 12.1 4ZM7.09998 7C7.09998 4.23858 9.33855 2 12.1 2C14.8614 2 17.1 4.23858 17.1 7C17.1 9.76142 14.8614 12 12.1 12C9.33855 12 7.09998 9.76142 7.09998 7Z" fill="currentColor" />
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default MainDashboard