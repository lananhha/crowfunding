import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleUser} from '@fortawesome/free-regular-svg-icons'

import DashboardSearch from "./DashboardSearch";
import DashboardFund from "./DashboardFund";
import Button from "../../../components/Button";
import logo from '../../../assets/images/Logo.png'
function DashboardTopBar() {
    return ( 
        <div className="w-full flex items-center justify-between">
            <div className="flex items-center">
                <Link className="ml-2.5" to='/'>
                    <img src={logo} alt='logo' />
                </Link>
                <DashboardSearch />
            </div>
            <div className="flex items-center">
                <DashboardFund />
                <Button className='mr-10 ml-12 font-semibold py-[13px] px-5 bg-secondary text-white text-base rounded-lg loading-[26px] '>Start a campaign</Button>
                <FontAwesomeIcon icon={faCircleUser} className='text-4xl text-icon-color' />
            </div>
        </div>
     );
}

export default React.memo(DashboardTopBar);