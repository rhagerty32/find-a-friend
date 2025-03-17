import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMiniUserGroup } from "react-icons/hi2";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { GoPerson } from "react-icons/go";
import { GoPersonFill } from "react-icons/go";
import { FaRegBell } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const NavBar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const Button = ({ route, title, icons }) => {
        const isActive = currentPath === route || (route !== "/" && currentPath.includes(route));

        return (
            <Link
                className='flex flex-col items-center justify-center'
                key={route}
                to={route}
            >
                {isActive ? icons.iconSelected : icons.iconUnselected}
                <p className='text-nowrap'>{title}</p>
            </Link>
        )
    }

    const routes = {
        feed: {
            route: '/feed',
            title: 'Feed',
            iconSelected: <HiMiniUserGroup size={30} />,
            iconUnselected: <HiOutlineUserGroup size={30} />
        },
        friendRequests: {
            route: '/friendRequests',
            title: 'Requests',
            iconSelected: <FaBell size={30} />,
            iconUnselected: <FaRegBell size={30} />
        },
        profile: {
            route: '/profile',
            title: 'Profile',
            iconSelected: <GoPersonFill size={30} />,
            iconUnselected: <GoPerson size={30} />
        }
    };

    return (
        <div className='fixed z-50 bottom-0 h-20 w-screen bg-white border-t flex flex-row justify-center px-10 gap-20'>
            {Object.keys(routes).map((route, index) => (
                <Button
                    route={routes[route].route}
                    title={routes[route].title}
                    icons={{
                        iconSelected: routes[route].iconSelected,
                        iconUnselected: routes[route].iconUnselected
                    }}
                />
            ))}
        </div>
    );
};

export default NavBar;