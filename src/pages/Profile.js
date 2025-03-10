import React from 'react';

export const Profile = () => {
    return (
        <div className='p-10'>
            <h1 className='text-4xl font-semibold'>Profile</h1>
            <div>
                <div className="w-[324px] h-[805px] inline-flex flex-col justify-start items-start gap-[11px]">
                    <div className="inline-flex justify-start items-center gap-[27px]">
                        <img className="w-[113px] h-[113px] rounded-[100px]" src="https://placehold.co/113x113" />
                        <div className="justify-start text-black text-xl font-normal font-['Montserrat']">Johnathan</div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-3.5">
                        <div className="self-stretch h-[27px] justify-start text-black text-[25px] font-bold font-['Averia_Serif_Libre']">Info:</div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-[38px]">
                            <div className="self-stretch flex flex-col justify-start items-start gap-[11px]">
                                <div className="w-[94px] h-[33px] relative">
                                    <div className="w-[94px] h-[33px] left-0 top-0 absolute justify-start text-black text-[25px] font-medium font-['Montserrat']">Calling</div>
                                </div>
                                <div className="w-80 h-[53px] relative">
                                    <div className="w-80 h-[53px] left-0 top-0 absolute bg-white rounded-[13px] outline-[1.50px] outline-offset-[-0.75px] outline-[#d9d9d9]" />
                                    <div className="w-[182px] h-4 left-[19px] top-[18px] absolute justify-start text-black text-sm font-normal font-['Montserrat']">Sunday School Teacher</div>
                                </div>
                            </div>
                            <div className="w-[293px] flex flex-col justify-start items-start gap-[11px]">
                                <div className="w-[153px] h-[33px] relative">
                                    <div className="w-[153px] h-[33px] left-0 top-0 absolute justify-start text-black text-[25px] font-medium font-['Montserrat']">Availability</div>
                                </div>
                                <div className="self-stretch flex flex-col justify-start items-start gap-[29px]">
                                    <div className="self-stretch flex flex-col justify-start items-start gap-[11px]">
                                        <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
                                            <div className="inline-flex justify-start items-center gap-[9px]">
                                                <div className="px-3.5 py-2.5 bg-white rounded-[13px] outline-[1.50px] outline-offset-[-0.75px] outline-[#d9d9d9] flex justify-center items-center gap-2.5">
                                                    <div className="text-center justify-start text-black text-sm font-normal font-['Montserrat']">Mon</div>
                                                </div>
                                                <div className="px-3.5 py-2.5 bg-white rounded-[13px] outline-[1.50px] outline-offset-[-0.75px] outline-[#f3764a] flex justify-center items-center gap-2.5">
                                                    <div className="text-center justify-start text-black text-sm font-normal font-['Montserrat']">Tues</div>
                                                </div>
                                                <div className="px-3.5 py-2.5 bg-white rounded-[13px] outline-[1.50px] outline-offset-[-0.75px] outline-[#d9d9d9] flex justify-center items-center gap-2.5">
                                                    <div className="text-center justify-start text-black text-sm font-normal font-['Montserrat']">Wed</div>
                                                </div>
                                                <div className="px-3.5 py-2.5 bg-white rounded-[13px] outline-[1.50px] outline-offset-[-0.75px] outline-[#d9d9d9] flex justify-center items-center gap-2.5">
                                                    <div className="text-center justify-start text-black text-sm font-normal font-['Montserrat']">Thurs</div>
                                                </div>
                                            </div>
                                            <div className="self-stretch inline-flex justify-start items-center gap-[9px]">
                                                <div className="px-3.5 py-2.5 bg-white rounded-[13px] outline-[1.50px] outline-offset-[-0.75px] outline-[#d9d9d9] flex justify-center items-center gap-2.5">
                                                    <div className="text-center justify-start text-black text-sm font-normal font-['Montserrat']">Fri</div>
                                                </div>
                                                <div className="px-3.5 py-2.5 bg-white rounded-[13px] outline-[1.50px] outline-offset-[-0.75px] outline-[#d9d9d9] flex justify-center items-center gap-2.5">
                                                    <div className="text-center justify-start text-black text-sm font-normal font-['Montserrat']">Sat</div>
                                                </div>
                                                <div className="px-3.5 py-2.5 bg-white rounded-[13px] outline-[1.50px] outline-offset-[-0.75px] outline-[#f3764a] flex justify-center items-center gap-2.5">
                                                    <div className="text-center justify-start text-black text-sm font-normal font-['Montserrat']">Sun</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col justify-start items-start gap-[11px]">
                                <div className="w-[123px] h-[33px] relative">
                                    <div className="w-[123px] h-[33px] left-0 top-0 absolute justify-start text-black text-[25px] font-medium font-['Montserrat']">Birthday</div>
                                </div>
                                <div className="w-80 h-[53px] relative">
                                    <div className="w-80 h-[53px] left-0 top-0 absolute bg-white rounded-[13px] outline-[1.50px] outline-offset-[-0.75px] outline-[#d9d9d9]" />
                                    <div className="w-[182px] h-4 left-[19px] top-[18px] absolute justify-start text-black text-sm font-normal font-['Montserrat']">May 25, 2001</div>
                                </div>
                                <div className="w-80 h-[53px] relative">
                                    <div className="w-80 h-[53px] left-0 top-0 absolute">
                                        <div className="w-80 h-[53px] left-0 top-0 absolute bg-white rounded-[13px] outline-[1.50px] outline-offset-[-0.75px] outline-[#d9d9d9]" />
                                        <div className="w-28 h-4 left-[19px] top-[18px] absolute justify-start text-black text-sm font-normal font-['Montserrat']">Show on profile</div>
                                    </div>
                                    <div className="w-[51px] h-[31px] left-[252px] top-[11px] absolute">
                                        <div data-state="On" className="w-[51px] h-[31px] left-0 top-0 absolute bg-[#34c759] rounded-[100px] overflow-hidden">
                                            <div className="w-[27px] h-[27px] left-[22px] top-[2px] absolute bg-white rounded-[100px] shadow-[0px_3px_1px_0px_rgba(0,0,0,0.06)] shadow-[0px_3px_8px_0px_rgba(0,0,0,0.15)] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04)]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}