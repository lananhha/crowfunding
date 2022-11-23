import CreateCampaign from "../modules/campaign/CreateCampaign";
import Heading from "../components/Heading";
import YourCampaignItem from "../modules/campaign/YourCampaignItem";
import Button from "../components/Button";

function CampaignPage() {
    return (  
        <div>
            <CreateCampaign />
            <Heading>
                Your Campaign {' '}
                <span className="text-secondary">(4)</span>
            </Heading>
            <div className="mt-2.5">
                <YourCampaignItem />
                <YourCampaignItem />
                <YourCampaignItem />
                <div className="flex justify-center">
                    <Button className='text-secondary px-14 bg-[#EEEAFD] w-fit' >See more+</Button>
                </div>
            </div>
        </div>
    );
}

export default CampaignPage;