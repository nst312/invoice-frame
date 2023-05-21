import React from 'react';
import headerImage from '../../assets/bg_grey_26.png';
import profile from '../../assets/profile.png'

const Header = () => {
  const numContainer = 'flex items-center px-14 py-3.5 gap-6 absolute w-576 h-20 left-80 top-9 bg-white shadow-md opacity-25 rounded-lg';
  const dicStyle = 'flex flex-row items-start p-0 gap-1 w-[429px] h-14 flex-none order-1 grow-0';
  const div1 = "flex flex-col items-start p-2.5 w-24 h-14 bg-green-500 rounded flex-none order-0"
  const containerStyles = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '13px',
    gap: '23px',
    position: 'absolute',
    width: '576px',
    height: '80px',
    left: '338.64px',
    top: '35.39px',
    background: '#FFFFFF',
    boxShadow: '0px 4px 18px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
  };


  return (
    <header
      className="bg-cover bg-center relative h-155 w-1532  left-0 top-0 rounded-none"
      style={{
        backgroundImage: `url(${headerImage})`,
      }}
    >
      <div className="container mx-auto p-4">
        <div style={containerStyles}>
          <div className="w-24 h-5 font-dm-sans font-normal text-xs leading-3 text-black flex-none order-0">
            Last 30 Days:
          </div>
          <div className={dicStyle}>
            <div className={div1}>
              <div className="w-5 h-3 font-dm-sans font-normal text-xs uppercase flex-none order-0 grow-0 text-[#F9F9FB] ">
                PAID
              </div>
              <div className="w-16 h-5 font-dm-sans font-normal text-base leading-8 text-white flex-none order-1 flex-grow-0">
                &#8364;24.000
              </div>
            </div>
            <div class="flex flex-col items-start p-2.5 w-32 h-14 bg-gray-400 rounded-md flex-none order-1">
              <div className="w-5 h-3 font-dm-sans font-normal text-xs uppercase flex-none order-0 grow-0 text-[#F9F9FB] ">
                PENDING
              </div>
              <div className="w-16 h-5 font-dm-sans font-normal text-base leading-8 text-white flex-none order-1 flex-grow-0">
                &#8364;41.000
              </div>
            </div>
            <div className="flex flex-col items-start p-2.5 w-48 h-14 bg-[#EC615B] rounded-lg order-2 flex-none">
              <div className="w-5 h-3 font-dm-sans font-normal text-xs uppercase flex-none order-0 grow-0 text-[#F9F9FB] ">
                OVERDUE
              </div>
              <div className="w-16 h-5 font-dm-sans font-normal text-base leading-8 text-white flex-none order-1 flex-grow-0">
                &#8364;65.600
              </div>
            </div>

          </div>


        </div>
        <div className="flex flex-row justify-center items-center p-4 gap-4 absolute w-[303.42px] h-[80.42px] left-[1159px] top-[35.39px] bg-white shadow-md rounded-lg">
          <img src={profile} className="w-[50.42px] h-[50.42px] bg-[#D9D9D9]  flex-none order-0 flex-grow-0 rounded-full" alt="" />
          <h3 className="font-dm-sans font-bold text-20 leading-26 text-black w-[198px] h-[26px] flex-none order-1 flex-grow-0">Jort kkkkkkkkkkkk</h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
