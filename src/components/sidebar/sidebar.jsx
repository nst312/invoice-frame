import React from 'react';
import 'tailwindcss/tailwind.css';
import Logo from "../../assets/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faFileInvoice, faUsersRectangle, faBox, faRepeat, faPercent } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
  const maincontainer = 'flex flex-row items-start p-8 gap-8 absolute w-72 h-895 left-8 top-4 bg-white shadow-xl rounded-lg';
  const sub1container = 'flex flex-col items-start p-0 gap-32 w-56 h-698 flex-none order-none grow-0';
  const sub2container = 'flex flex-col items-center p-0 gap-32 isolate w-56 h-698 flex-none order-none grow-0';
  const sub3container = 'flex flex-col items-center p-0 gap-16 w-56 h-516 flex-none order-none grow-0 z-0';
  const logo = ' w-24 h-9 flex-none order-none grow-0';
  const list = 'flex flex-col items-start p-0 gap-2.5 w-56 h-416 flex-none order-1 grow-0';
  const item = 'flex flex-col items-start p-5 gap-2.5 w-56 h-16 rounded-md flex-none order-1 grow-0';
  const data = 'flex flex-row items-center p-0 gap-2.5 w-20 h-5 flex-none order-none grow-0';
  const icon = 'w-4 h-4 flex-none order-none grow-0';
  const text = 'w-12 h-5 p-5 font-sans not-italic font-bold leading-3 text-[#202553] flex-none order-1 grow-0';

  const icons = [
    {
      icon: faHouse,
      name: 'Home'
    },
    {
      icon: faFileInvoice,
      name: 'Invoices'
    },
    {
      icon: faUsersRectangle,
      name: 'Customers'
    },
    {
      icon: faBox,
      name: 'Products'
    },
    {
      icon: faRepeat,
      name: 'Recuuring'
    },
    {
      icon: faPercent,
      name: 'Discount'
    },
  ];

  return (
    <div className={maincontainer}>
      <div className={sub1container}>
        <div className={sub2container}>
          <div className={sub3container}>
            <div className={logo}>
              <img src={Logo} alt="" />
            </div>
            <div className={list}>
              {icons.map((e, index) => {
                console.log(e.name);
                return (
                  <div className={`${item} ${e.name === 'Products' ? 'bg-[#EEF0FF]' : ''}`} key={index}>
                    <div className={data}>
                      <div className={icon}>
                        <div className=' absolute left-0 right-0 top-0 bottom-0'></div>
                        <FontAwesomeIcon icon={e.icon} />
                      </div>
                      <div className={text}>
                        {e.name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
