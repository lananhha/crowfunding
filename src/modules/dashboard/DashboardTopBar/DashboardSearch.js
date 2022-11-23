import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

function DashboardSearch() {
    return ( 
        <div className="flex items-center bg-white w-[458px] ml-[53px] rounded-full pr-[7px] shadow-primaryShadow">
            <input type='text' className="flex-1 outline-none py-[15px] px-[25px] bg-transparent text-sm text-text1 " placeholder="Do fundrise now" />
            <button className="text-sm w-[72px] h-10 bg-primary text-white rounded-[20px] flex items-center justify-center ">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
     );
}

export default DashboardSearch;