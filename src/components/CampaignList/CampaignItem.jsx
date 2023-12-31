import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';
import styles from './CampaignList.module.scss';

const cx = classnames.bind(styles);

function CampaignItem({ name, organizer, startDate, to }) {
    return (
        <div className={cx('campaign-item')}>
            <Link to={to} className={cx('campaign-link')}>
                <h3 className={cx('campaign-name')}>{name}</h3>
                <div className={cx('campaign-group')}>
                    <span className={cx('campaign-organizer')}>{organizer}</span>
                    <span className={cx('campaign-startdate')}>{startDate}</span>
                </div>
            </Link>
        </div>
    );
}

export default CampaignItem;