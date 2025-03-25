import React from "react";
import { Link } from "react-router-dom";
import { people } from "../components/userData";

export const FriendRequests = () => {
    const Card = ({ name, imgSrc }) => {
        return (
            <Link to="/message" className="block rounded-xl overflow-hidden">
                <div className="relative w-[155px] h-[178px]">
                    <img className="w-full h-full object-cover rounded-[13px]" src={imgSrc} />
                    <div className="absolute left-0 bottom-0 w-full h-14">
                        <div className="absolute w-full h-full bg-gradient-to-t from-[#555] to-transparent rounded-bl-[13px] rounded-br-[13px]" />
                        <div className="absolute left-[14px] bottom-[10px] text-white text-xl font-bold font-['Averia_Serif_Libre'] [text-shadow:_0px_4px_9px_rgb(0_0_0_/_0.25)]">{name}</div>
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <div>
            <h1 className='text-4xl font-semibold w-full text-left mt-10 px-10'>Discover</h1>
            <div className="grid grid-cols-2 gap-4 p-10 pb-32 no-scrollbar">
                {people.map((person, index) => (
                    <Card
                        key={index}
                        name={person.name}
                        imgSrc={person.imageSrc} 
                    />
                ))}
            </div>
        </div>
    )
}