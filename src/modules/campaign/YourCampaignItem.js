import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFolder} from '@fortawesome/free-regular-svg-icons'

import yourCampaignImg from '../../assets/images/your_campaign.jpg'
function YourCampaignItem() {
    return ( 
        <div className='flex mb-10'>
            <img className='w-[583px] object-cover h-[266px] mr-[30px] cursor-pointer ' src={yourCampaignImg} alt='Your Campaign' />
            <div className='w-[435px] h-full py-[17px]'>
                <div className='text-text3 mb-[15px] cursor-pointer'>
                    <FontAwesomeIcon icon={faFolder} />
                    <span className='ml-2.5 text-sm leading-[22px] font-medium '>Architecture</span>
                </div>
                <h2 className='text-text1 text-xl font-bold leading-[30px] mb-[15px] cursor-pointer'>Remake - We Make architecture exhibition</h2>
                <p className='text-sm leading-[22px] text-text3 font-normal mb-[22px]'>Remake - We Make: an exhibition about architecture's social agency in the face of urbanisation</p>
                <div className='w-full h-[5px] bg-[#EFEFEF] rounded-md mb-[22px]'>
                    <div className='w-[275px] h-full bg-primary rounded-md'></div>
                </div>
                <div className='flex justify-between'>
                    <div className='flex flex-col'>
                        <p className='text-text2 text-xl font-bold leading-[30px]'>$2,000</p>
                        <p className='text-base text-text4  font-normal leading-[26px]'>Raised of $2,500</p>
                    </div>
                    <div>
                        <p className='text-text2 text-xl font-bold leading-[30px]'>173</p>
                        <p className='text-base text-text4  font-normal leading-[26px]'>Total backers</p>
                    </div>
                    <div>
                        <p className='text-text2 text-xl font-bold leading-[30px]'>30</p>
                        <p className='text-base text-text4  font-normal leading-[26px]'>Days left</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default YourCampaignItem;