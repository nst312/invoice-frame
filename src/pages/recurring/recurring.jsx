import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faSearch, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import rect from '../../assets/rect.png'

const Recurring = () => {
    const data = [
        {
            interval: '3/months'
        },
        {
            interval: '4/months'
        },
        {
            interval: '1/months'
        },
        {
            interval: '3/year'
        },
        {
            interval: '1/year'
        },
        {
            interval: '2/month'
        },
    ]
    return (
        <>
            <div className="absolute w-[426px] h-12 left-[338.64px] top-[230.88px] font-dm-sans font-bold text-4xl leading-[101.2%] text-black">
                Recurring Invoices
            </div>
            <div className="flex items-center px-[41px] py-[21px] gap-4 absolute w-[262px] h-[63px] left-[1127.03px] top-[229.88px] bg-black rounded-2xl">
                <div className="w-[158px] h-[21px] font-dm-sans font-normal text-base leading-[21px] text-white">
                    Add recurring invoice
                </div>
                <div className="w-3 h-3 flex-none order-1 flex-grow-0 ">
                    <FontAwesomeIcon icon={faPlus} className="text-white absolute" />
                </div>
            </div>
            <div class="flex flex-row items-start p-0 gap-8 absolute w-[1050px] h-[168px] left-[339px] top-[335px] ">
                <div class="flex flex-col items-center py-[33px] py-[22px] gap-10  rounded-lg w-[328px] h-[168px] bg-[#F9F9FB] ">
                    <p className="font-dm-sans font-bold text-xs leading-[18px] uppercase text-[#979797] flex-none order-0 flex-grow-0">
                        # RCURRING INVOICE
                    </p>
                    <h2 className="font-dm-sans font-bold text-2xl leading-[42px] text-black flex-none order-1 flex-grow-0">
                        215
                    </h2>
                </div>
                <div className="flex flex-col items-center p-8 gap-10 w-[328px] h-[168px] bg-[#F9F9FB] rounded-2xl flex-none order-1 flex-grow-1">
                    <p className="font-dm-sans font-bold text-xs leading-[18px] uppercase text-[#979797] flex-none order-0 flex-grow-0">
                        RCURRING REVENUE
                    </p>
                    <h2 className="font-dm-sans font-bold text-2xl leading-[42px] text-black flex-none order-1 flex-grow-0">
                        €2500/<span className='text-sm'>month</span>
                    </h2>
                </div>
                <div className="flex flex-col items-center p-8 gap-10 w-[328px] h-[168px]  rounded-2xl flex-none order-2 flex-grow-1 bg-[#F9F9FB]">
                    <p className="font-dm-sans font-bold text-xs leading-[18px] uppercase text-[#979797] flex-none order-0 flex-grow-0">
                        RCURRING OVERDUE
                    </p>
                    <h2 className="font-dm-sans font-bold text-2xl leading-[42px] text-black flex-none order-1 flex-grow-0">
                        22
                    </h2>
                </div>
            </div>
            <div className="flex flex-col items-start gap-6 absolute w-[1049px] h-[641px] left-[341px] top-[546.17px] ">
                <div className="w-[557px] h-[42px] text-start font-dm-sans font-bold text-[30px] leading-[42px] text-black flex-none order-0 flex-grow-0 ">
                    Per client
                </div>
                <div className="flex flex-row items-start p-0 gap-[8px] w-[437px] h-[53px]">
                    <div className="flex flex-col items-start p-0 gap-[6px] w-[274px] h-[53px]">
                        <div className="flex flex-row items-center p-[16px] [20px] gap-[52px] w-[274px] h-[53px] bg-gray-300 rounded-[5px]">
                            <span className="w-[96px] h-[21px] font-dm-sans font-normal text-[14px] leading-[21px] text-gray-600 flex-none order-0 flex-grow-0">
                                Search Client
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center py-[16px] px-[41px] gap-[10px] w-[155px] h-[53px] bg-black rounded-[5px] flex-none order-0 flex-grow-0">
                        <span className="flex w-[51px] h-[21px] font-dm-sans font-normal text-[16px] leading-[21px] text-white flex-none order-0 flex-grow-0">
                            Search
                            <div className="w-[10px] h-[12px] flex-none order-1 flex-grow-0">
                                <FontAwesomeIcon className="absolute left-6.64 right-6.64 top-6.64 bottom-6.64" icon={faSearch} />
                            </div>
                        </span>
                    </div>
                </div>
                <div class="flex flex-col items-start p-0 gap-4 w-[1049px] h-[496px] ">
                    <div className="w-[969.09px] h-[18px] flex order-0 flex-grow-0  ">
                        <div className="w-[273px] h-[21px] text-start rounded-5 flex-none order-0 flex-grow-0 text-sm leading-5 text-gray-400 uppercase">
                            client
                        </div>
                        <div className="w-[176.48px] h-[21px] text-center font-medium text-base leading-5 text-black flex-none order-1 flex-grow-0 text-sm leading-5 text-gray-400 uppercase">
                            #send
                        </div>
                        <div className="w-[130px] h-[21px] text-center font-medium text-base leading-5 text-black flex-none order-2 flex-grow-0 text-sm leading-5 text-gray-400 uppercase">
                          end date
                        </div>
                        <div className="w-[221.62px] h-[21px] text-center font-medium text-base leading-5 text-black flex-none order-3 flex-grow-0 text-sm leading-5 text-gray-400 uppercase">
                            interval
                        </div>
                        <div className="w-[74.45px] h-[21px] text-center font-medium text-base leading-5 text-black flex-none order-4 flex-grow-0 text-sm leading-5 text-gray-400 uppercase">
                            amount
                        </div>
                        <div className="w-[177.45px] h-[21px] font-medium text-center text-base leading-5 text-black flex-none order-5    flex-grow-0 text-sm leading-5 text-gray-400 uppercase">
                            edit
                        </div>
                        

                    </div>
                    <div class="flex flex-col items-end p-0 gap-3 isolate w-[1049px] h-[462px] pb-[30px]">

                        {data.map((e, index) => (
                            <React.Fragment key={index}>
                                <div className="w-[1047.38px] h-0 border border-gray-300 flex-none order-0 flex-grow-0 z-0" />
                                <div className="flex flex-row items-center p-0 gap-11 w-[1049px] h-[55px]">
                                    <div className="flex flex-row items-center p-0 gap-[90px] w-[283px] h-[55px]" key={index}>
                                    <div class="flex items-center">
                                        <img src={rect} className="w-[55px] h-[55px] rounded-5 flex-none order-0 flex-grow-0" alt="" />
                                        <div class="w-[103px] h-[21px] font-medium text-base leading-5 text-black flex-none order-1 flex-grow-0">
                                            MadeByMack
                                        </div>
                                        </div>
                                        <div class="w-[176.48px] h-[21px] font-medium text-end text-base leading-5 text-black flex-none order-1 flex-grow-0">
                                            25
                                        </div>
                                        <div class="w-[110.62px] h-[21px]  font-medium text-base leading-5 text-black flex-none order-2 flex-grow-0">
                                            24-20-2024
                                        </div>
                                        <div class="w-[63.45px] h-[21px] font-medium text-base leading-5 text-black flex-none order-3 flex-grow-0">
                                            {e.interval}
                                        </div>
                                        <div class="w-[42   .5px] h-21 font-medium text-base leading-5 text-black flex-none order-4 flex-grow-0">
                                            €3000
                                        </div>
                                        <div class="box-border flex flex-row justify-center items-center px-[15px] py-[26px] gap-[10px] w-[104px] h-[51px] border-2 border-black rounded-lg flex-none order-5 flex-grow-0">
                                            <div class="w-[30px] h-[21px] font-normal text-base leading-5 text-black flex-none order-0 flex-grow-0">
                                                Edit
                                            </div>
                                            <FontAwesomeIcon className="w-[12px] h-[12px] flex-none order-1 flex-grow-0" icon={faChevronRight} />
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                        <div className="flex flex-col items-start px-[23px] py-[24px] gap-[10px] absolute w-[160px] h-[191px] ml-[889px] mt-[154px] bg-white shadow-lg rounded-lg flex-none order-12 grow-0 z-10">
                            <div className="flex-none order-0 flex-grow-0 w-[47px] h-[21px] font-bold text-black text-base leading-5 font-dm-sans">
                                Paus
                            </div>
                            <div className="flex-none order-0 flex-grow-0 w-[75px] h-[21px] font-bold text-black text-base leading-5 font-dm-sans">
                                Duplicate
                            </div>
                            <div className="flex-none order-0 flex-grow-0 w-[32px] h-[21px] font-bold text-black text-base leading-5 font-dm-sans">
                                Edit
                            </div>
                            <div className="flex-none order-0 flex-grow-0 w-[45px] h-[21px] font-bold text-black text-base leading-5 font-dm-sans">
                                Terninate
                            </div>
                            <div className="flex-none order-0 flex-grow-0 w-[110px] h-[21px] font-bold text-black text-base leading-5 font-dm-sans">
                                Skip next date
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </>
    );
};

export default Recurring;
