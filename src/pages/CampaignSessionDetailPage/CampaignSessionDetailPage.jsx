import classnames from 'classnames/bind';
// import { IconHome } from '~/components/Icon';

import styles from './CampaignSessionDetailPage.module.scss';
const cx = classnames.bind(styles);

function CampaginSessionDetailPage() {
    return (
        <div className={cx('session-detail ')}>
            Campaign Session detail page
        </div>
    )
}

export default CampaginSessionDetailPage;