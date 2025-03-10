import React from "react";

export const FriendRequests = () => {
    const Card = ({ name, imgSrc, url }) => {
        return (
            <div className="w-[155px] h-[178px] relative shadow-md rounded-xl overflow-hidden">
                <div className="w-[155px] h-[178px] left-0 top-0 absolute">
                    <img className="w-[155px] h-[178px] left-0 top-0 absolute rounded-[13px]" src={imgSrc} />
                    <div className="w-[155px] h-14 left-0 top-[122px] absolute">
                        <div className="w-[155px] h-14 left-0 top-0 absolute bg-gradient-to-t from-[#555] to-transparent rounded-bl-[13px] rounded-br-[13px]" />
                        <div className="w-[141px] left-[14px] top-[19px] absolute justify-start text-white text-xl font-bold font-['Averia_Serif_Libre'] [text-shadow:_0px_4px_9px_rgb(0_0_0_/_0.25)]">{name}</div>
                    </div>
                </div>
            </div>
        );
    }

    const people = [
        {
            name: 'Alice',
            imgSrc: 'https://placehold.co/155x178',
            url: '/profile/alice'
        },
        {
            name: 'Bob',
            imgSrc: 'https://placehold.co/155x178',
            url: '/profile/bob'
        },
        {
            name: 'Charlie',
            imgSrc: 'https://placehold.co/155x178',
            url: '/profile/charlie'
        },
        {
            name: 'David',
            imgSrc: 'https://placehold.co/155x178',
            url: '/profile/david'
        },
        {
            name: 'Eve',
            imgSrc: 'https://placehold.co/155x178',
            url: '/profile/eve'
        },
        {
            name: 'Frank',
            imgSrc: 'https://placehold.co/155x178',
            url: '/profile/frank'
        },
        {
            name: 'Grace',
            imgSrc: 'https://placehold.co/155x178',
            url: '/profile/grace'
        },
        {
            name: 'Hank',
            imgSrc: 'https://placehold.co/155x178',
            url: '/profile/hank'
        },
        {
            name: 'Ivy',
            imgSrc: 'https://placehold.co/155x178',
            url: '/profile/ivy'
        },
        {
            name: 'Jack',
            imgSrc: 'https://placehold.co/155x178',
            url: '/profile/jack'
        },
        {
            name: 'Kathy',
            imgSrc: 'https://placehold.co/155x178',
            url: '/profile/kathy'
        }
    ]


    return (
        <div>
            <h1 className='text-4xl font-semibold w-full text-left mt-10 px-10'>Discover</h1>
            <div className="grid grid-cols-2 gap-4 p-10 pb-32">
                {people.map((person, index) => (
                    <Card
                        key={index}
                        name={person.name}
                        imgSrc={person.imgSrc}
                        url={person.url}
                    />
                ))}
            </div>
        </div>
    )
}