import { CampaignList } from '~/components';
import classnames from 'classnames/bind';
import { IconHome } from '~/components/Icon';

import styles from './HomePage.module.scss';
const cx = classnames.bind(styles);

function HomePage() {
    return (
        <div className={cx('wrrapper')}>
            <div className={cx('row')}>
                <div className={cx('col', 'px-0')}>
                    <h2 className={cx('title')}>
                        <IconHome className={cx('title-icon')} />
                        Campaigns
                    </h2>
                    <CampaignList />
                </div>
            </div>
        </div>
    );
}

export default HomePage;