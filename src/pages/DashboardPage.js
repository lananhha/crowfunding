import Heading from "../components/Heading";
import YourCampaignItem from "../modules/campaign/YourCampaignItem";
import CampaignItem from "../modules/campaign/CampaignItem";

function DashboardPage() {
    return ( 
        <div>
            <Heading>
                Your Campaign
                <span className="text-secondary">(4)</span>
            </Heading>
            <YourCampaignItem />
            <Heading>
                Popular Campaign
            </Heading>
            <div className="grid grid-cols-4 gap-4 mb-10">
                <CampaignItem />
                <CampaignItem />
                <CampaignItem />
                <CampaignItem />
            </div>
            <Heading>
                Recent Campaign
            </Heading>
            <div className="grid grid-cols-4 gap-4 mb-10">
                <CampaignItem />
                <CampaignItem />
                <CampaignItem />
                <CampaignItem />
            </div>
        </div>
     );
}

export default DashboardPage;