import classnames from 'classnames/bind';
import styles from './CampaignList.module.scss';
import { useSelector } from 'react-redux';
import { campaignListSelector } from './CampaignListSelector';
import CampaignItem from './CampaignItem';
const cx = classnames.bind(styles);

function CampaignList() {

    const campaignList = useSelector(campaignListSelector);
    return (
        <div className={cx('campaign-list')}>
            {campaignList?.map((campaigItem) => {
                return (
                    <CampaignItem key={campaigItem.id}
                        name={campaigItem?.name}
                        organizer={campaigItem?.organizer}
                        startDate={campaigItem?.startDate}
                        to={`/campaign/${campaigItem?.id}`}
                    />
                );
            })}
        </div>
    );
}

export default CampaignList;