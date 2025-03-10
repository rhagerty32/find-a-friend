import React, { useState } from 'react';

export const Feed = () => {
    const dummyData = [
        { name: 'Alice', age: 25, bio: 'Loves hiking and outdoor adventures.' },
        { name: 'Bob', age: 30, bio: 'Enjoys cooking and trying new recipes.' },
        { name: 'Charlie', age: 28, bio: 'Avid reader and coffee enthusiast.' },
    ];
    const [currentIndex, setCurrentIndex] = useState(dummyData.length - 1);

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete);
        setCurrentIndex(currentIndex - 1);
    };

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!');
    };

    return (
        <div className="h-screen mb-20 flex flex-col items-center justify-center font-bold font-['Averia_Serif_Libre'] gap-10">
            <h1 className='text-4xl font-semibold w-full text-left mt-10 px-10'>Discover</h1>
            <div className="w-[90%] h-[85%] mb-32 relative rounded-xl overflow-hidden shadow-xl">
                <img className="w-full h-full bg-red-200 left-0 top-0 bottom-0 absolute object-cover rounded-xl" src="https://placehold.co/320x588" />
                <div className="w-[243px] left-[27px] top-[351px] absolute inline-flex flex-col justify-start items-start gap-[5px]">
                    <div data-size="48" className="w-12 h-12 overflow-hidden">
                        <div className="w-7 h-7 left-[10px] top-[10px] absolute outline-4 outline-offset-[-2px] outline-[#1e1e1e]" />
                    </div>
                    <div className="self-stretch h-[88px] justify-start text-black text-4xl font-bold">Swipe right to add friend</div>
                </div>
                <div className="left-[27px] top-[523px] absolute text-center justify-start text-[#202020] text-[32px]">Jordan</div>
            </div>
        </div>
    );
};