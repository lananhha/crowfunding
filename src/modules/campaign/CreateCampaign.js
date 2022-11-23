import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlus} from '@fortawesome/free-solid-svg-icons'

import Button from '../../components/Button'

function CreateCampaign() {
    return ( 
        <div className="w-full px-10 py-[31px] mb-10">
            <div className="flex items-center relative">
                <button className="flex justify-center items-center w-[54px] h-[54px] bg-[#A992FE] rounded-full text-white absolute top-0 left-0">
                    <FontAwesomeIcon icon={faPlus} />
                </button>
                <div className="flex-1 ml-20">
                    <h3 className="text-text1 font-semibold text-[22px] leading-8 mb-2">Create Your Campaign</h3>
                    <p className="font-normal text-xs text-text3 leading-[22px] mb-2">Jump right into our editor and create your first Virtue campaign!</p>
                    <p className="font-normal text-xs text-primary leading-[22px] mb-2 cursor-pointer">Need any help? Learn More...</p>
                </div>
                <Button className='px-[30px] text-secondary bg-[#EEEAFD] w-fit h-fit ' >Create campaign</Button>
            </div>
        </div>
     );
}

export default CreateCampaign;