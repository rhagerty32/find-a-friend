import React from "react";
import { Link } from "react-router-dom";
import { people } from "../components/userData";

export const FriendRequests = () => {
    const Card = ({ name, imgSrc }) => {
        return (
            <Link to="" className="block rounded-xl overflow-hidden">
                <div className="relative w-[190px] h-[220px]">
                    <img className="w-full h-full object-cover rounded-[16px]" src={imgSrc} />
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
          {/* Matching header style */}
          <div className="px-7 pt-20 pb-1">
            <h1 className="text-[42px] leading-[1.2] font-bold font-['Averia_Serif_Libre']">
              Requests
            </h1>
          </div>
      
          <div className="grid grid-cols-2 gap-5 p-5 pb-28 no-scrollbar">
            {people.map((person, index) => (
              <Card
                key={index}
                name={person.name}
                imgSrc={person.imageSrc}
              />
            ))}
          </div>
        </div>
      );
}