import {/*useState,*/ useEffect } from 'react';
import classnames from 'classnames/bind';
import styles from './DetailSessionCampaignPage.module.scss';

const cx = classnames.bind(styles);

function DetailSessionCampaignPage() {
    // const [session, setSession] = useState(null);

    let pathName = window.location.pathname.split('/');
    let campaignId = pathName[2];
    let placeId = pathName[3];
    let sessionId = pathName[4];

    useEffect(() => {
        //call api lên sever để lấy thông tin chi tiết của session theo id session, id place, id campaign
    }, [campaignId, placeId, sessionId]);

    return (
        <div className={cx('wrapper', 'row')}>
            <div className={cx('col', 'px-0')}>
                <div className={cx('detail-session')}>
                    <div className={cx('detail-session-title')}>
                        <h2 className={cx('detail-session--title-text')}>Session Detail</h2>
                        <span className={cx('detail-session-type')}>Normal</span>
                    </div>
                </div>
                <div className={cx('detail-session')}>
                    <p className={cx('detail-session-des')}>
                        In our fast-changing world traditional forms of education are becoming outdated. We need to redesign our edcucation systems. What are approaches to learning work in this new world?
                    </p>
                    <p className={cx('detail-session-vaccinator')}>Pavel Luksha</p>
                    <p className={cx('detail-session-timeStart')}>Start: 2021-01-01</p>
                    <p className={cx('detail-session-timeEnd')}>End: 2021-01-01</p>
                    <p className={cx('detail-session-const')}>Const: 30</p>
                </div>
            </div>
        </div>
    );
}

export default DetailSessionCampaignPage;