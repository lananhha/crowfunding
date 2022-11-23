import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowTrendUp, faChevronDown} from '@fortawesome/free-solid-svg-icons'

function DashboardFund() {
    return ( 
        <div className="flex gap-x-2 items-center cursor-pointer">
            <FontAwesomeIcon icon={faArrowTrendUp} className='text-icon-color' />
            <p className="text-base w-[112px] text-text2 font-semibold leading-[26px]">Fundrising for</p>
            <FontAwesomeIcon icon={faChevronDown} className='text-icon-color' />
        </div>
     );
}

export default DashboardFund;