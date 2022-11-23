import React from "react";
import {NavLink} from 'react-router-dom'

import {HomeIcon, NotifyIcon, WithDrawIcon, PaymentIcon, ProfileIcon, LogoutIcon, SunIcon} from '../../../components/Icon'
import SidebarItem from "./SidebarItem";

const listSidebar = [
    {path: '/', component: <HomeIcon />},
    {path: '/campaign', component: <NotifyIcon />},
    {path: '/payment', component: <PaymentIcon />},
    {path: '/withdraw', component: <WithDrawIcon />},
    {path: '/profile', component: <ProfileIcon />},
    {path: '/logout', component: <LogoutIcon />},
]
function DashboardSidebar() {
    return ( 
        <div className="flex flex-col px-[14px] py-10 bg-white shadow-primaryShadow mt-4 rounded-[20px] mr-10">
            <div>
                {listSidebar.map((item, index) => (
                    <SidebarItem to={item.path} key={index}>{item.component}</SidebarItem>
                ))}
            </div>
            <div className="p-2.5 mt-[168px] cursor-pointer text-icon-color shadow-shawDowIcon rounded-[10px]">
                <SunIcon/>
            </div>
        </div>
     );
}

export default React.memo(DashboardSidebar);