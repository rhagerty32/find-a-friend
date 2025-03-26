import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  HiUserGroup,
  HiOutlineUserGroup,
  HiBell,
  HiOutlineBell,
  HiChatBubbleLeft,
  HiOutlineChatBubbleLeft,
  HiUser,
  HiOutlineUser
} from 'react-icons/hi2';

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const Button = ({ route, title, icons }) => {
    const isActive =
      currentPath === route || (route !== '/' && currentPath.includes(route));

    return (
      <Link
        to={route}
        className="flex flex-col items-center justify-center"
        key={route}
      >
        {isActive ? icons.iconSelected : icons.iconUnselected}
        <p className="text-nowrap text-sm">{title}</p>
      </Link>
    );
  };

  const routes = {
    feed: {
      route: '/feed',
      title: 'Discover',
      iconSelected: <HiUserGroup size={30} />,
      iconUnselected: <HiOutlineUserGroup size={30} />
    },
    requests: {
      route: '/friendRequests',
      title: 'Requests',
      iconSelected: <HiBell size={30} />,
      iconUnselected: <HiOutlineBell size={30} />
    },
    messages: {
      route: '/messages',
      title: 'Messages',
      iconSelected: <HiChatBubbleLeft size={30} />,
      iconUnselected: <HiOutlineChatBubbleLeft size={30} />
    },
    profile: {
      route: '/profile',
      title: 'Profile',
      iconSelected: <HiUser size={30} />,
      iconUnselected: <HiOutlineUser size={30} />
    }
  };

  return (
    <div className="fixed z-50 bottom-0 h-20 inset-x-0 bg-white border-t flex justify-around items-center">
      {Object.keys(routes).map((routeKey) => {
        const route = routes[routeKey];
        return (
          <Button
            key={routeKey}
            route={route.route}
            title={route.title}
            icons={{
              iconSelected: route.iconSelected,
              iconUnselected: route.iconUnselected
            }}
          />
        );
      })}
    </div>
  );
};

export default NavBar;
