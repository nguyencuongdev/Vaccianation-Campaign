import { useState, useEffect } from 'react';
import classnames from 'classnames/bind';
import styles from './CampaignAgendaPage.module.scss';
import { CampaignSevice } from '~/services';
const cx = classnames.bind(styles);


function CampaignAgeda() {
    const [campaignState, setCompaignState] = useState(null);
    const areaList = campaignState?.area;
    let pathName = window.location.pathname.split('/');
    if (pathName[pathName.length - 1] === '') pathName.pop();
    let campaignId = pathName[pathName.length - 1];

    useEffect(() => {
        const getCampaignAgendaInfor = async (id) => {
            const data = await CampaignSevice.getCampaignAgendaInforService('/campaignList/' + id);
            console.log(data);
            setCompaignState(data);
        }
        getCampaignAgendaInfor(campaignId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [campaignId]);

    return (
        <div className={cx('campaign-agenda', 'row')}>
            <div className={cx('col', 'px-0')}>
                <div className={cx('campaign-agenda-title')}>
                    <h2 className={cx('campaign-agenda-name')}>{campaignState?.name}</h2>
                    <button className={cx('campaign-agenda-btn', 'campaign-agenda-btn-register')}>
                        Register for this Campaign
                    </button>
                </div>
                <div className={cx('campaign-agenda-infor')}>
                    {areaList?.length > 0 &&
                        areaList?.map((area) => {
                            return (<div className={cx("campaign-agenda-infor-item")} key={area?.id}>
                                <div className={cx('campaign-agenda-infor-title')}>
                                    <h4 className={cx('campaign-agenda-title-item')}>Area</h4>
                                    <h4 className={cx('campaign-agenda-title-item')}>Place</h4>
                                    <h4 className={cx('campaign-agenda-title-item')}>Session</h4>
                                </div>
                                <div className={cx('campaign-agenda-detail-list')}>
                                    <div className={cx('campaign-agenda-detail-item')}>
                                        <h4 className={cx('campaign-agenda-area')}>{area?.name}</h4>
                                        <div className={cx('campaign-agenda-places')}>
                                            {area?.place.length > 0 &&
                                                area?.place.map((item) =>
                                                    <div className={cx("campaign-agenda-place-item")}
                                                        key={item?.id}
                                                    >
                                                        <h4 className={cx('campaign-agenda-place')}>
                                                            {item.name}
                                                        </h4>
                                                        <div className={cx('campaign-agenda-times')}>
                                                            {item?.session.length > 0 &&
                                                                item?.session.map((time, index) =>
                                                                    <span key={index}
                                                                        className={cx('campaign-agenda-times-item', 'active')}
                                                                    >
                                                                        {time}
                                                                    </span>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                </div>
            </div>
        </div>
    );
}

export default CampaignAgeda;