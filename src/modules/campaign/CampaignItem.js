import campaignItemImg from '../../assets/images/Campaign_item.jpg'
import avatar from '../../assets/images/Avater.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFolder} from '@fortawesome/free-regular-svg-icons'

function CampaignItem() {
    return ( 
        <div>
            <img src={campaignItemImg}/>
            <div className='flex flex-col mt-[15px]'>
                <div className='text-text3 mb-[15px] cursor-pointer'>
                    <FontAwesomeIcon icon={faFolder} />
                    <span className='ml-2.5 text-sm leading-[22px] font-medium '>Education</span>
                </div>
                <h3 className='text-base font-semibold text-text1 leading-[26px] mb-1'>Powered Kits Learning Boxes</h3>
                <p className='text-xs leading-[18px] font-normal text-text3 mb-[15px]'>Fun, durable and reusable boxes with eco-friendly options.</p>
                <div className='flex justify-between mb-5'>
                    <div className='flex flex-col'>
                        <p className='text-text2 text-sm font-semibold leading-[22px]'>$2,000</p>
                        <p className='text-xs text-text4  font-normal leading-[18px]'>Raised of $1,900</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-text2 text-sm font-semibold leading-[22px]'>$2,000</p>
                        <p className='text-xs text-text4  font-normal leading-[18px]'>Raised of $1,900</p>
                    </div>
                </div>
                <div className='flex'>
                    <img src={avatar} className='w-[30px] h-[30px] ' />
                    <p className='py-[6px] text-text2 font-semibold text-xs leading-[18px] ml-2.5'>
                        <span className='text-text3 text-xs leading-[18px] font-normal mr-1 '>by</span>
                        Mahfuzul Nabil
                    </p>
                </div>
            </div>
        </div>
     );
}

export default CampaignItem;