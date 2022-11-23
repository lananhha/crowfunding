import {Outlet} from 'react-router-dom'

import DashboardTopBar from "../modules/dashboard/DashboardTopBar/DashboardTopBar";
import DashboardSidebar from '../modules/dashboard/DashboardSidebar/DashboardSidebar';

function LayoutDashboard() {
    return ( 
        <div className='w-full flex flex-col p-5 bg-lite'>
            <DashboardTopBar />
            <div className='flex flex-row mt-[30px]'>
                <DashboardSidebar />
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
     );
}

export default LayoutDashboard;