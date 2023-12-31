import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';
import styles from './CampaignAgendaPage.module.scss';
import { CampaignSevice } from '~/services';
import { VaccineRegistration } from '~/components';
const cx = classnames.bind(styles);


function CampaignAgeda() {
    const [campaignState, setCompaignState] = useState(null);
    const [checkCampaignRegisted, setCheckCampaignRegisted] = useState(false);
    const [inforCampaignIfRegisted, setInforCampaignIfRegisted] = useState(null);
    const areaList = campaignState?.areas ?? [];
    let pathName = window.location.pathname.split('/');
    if (pathName[pathName.length - 1] === '') pathName.pop();
    let campaignId = pathName[pathName.length - 1];

    useEffect(() => {
        const getCampaignAgendaInfor = async (id) => {
            const data = await CampaignSevice.getCampaignAgendaInforService('/campaignList/' + id);
            setCompaignState(data);
        }
        getCampaignAgendaInfor(campaignId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [campaignId]);

    useEffect(() => {
        const getCampaignInforIfRegisted = async (id) => {
            try {
                const data = await CampaignSevice.getCampaignUserRegistedService('/campainsUserRegisted/' + id);
                if (data) {
                    setCheckCampaignRegisted(true);
                    setInforCampaignIfRegisted(data);
                }
            }
            catch (e) { }
        }
        getCampaignInforIfRegisted(campaignId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [campaignId]);

    const campaignRegisterRef = useRef(null);
    const handleShowFormCampaignRegistration = () => campaignRegisterRef.current.showFormRegistration();

    return (
        <div className={cx('campaign-agenda', 'row')}>
            <div className={cx('col', 'px-0')}>
                <div className={cx('campaign-agenda-title')}>
                    <h2 className={cx('campaign-agenda-name')}>{campaignState?.name}</h2>
                    {!checkCampaignRegisted &&
                        <button className={cx('campaign-agenda-btn', 'campaign-agenda-btn-register')}
                            onClick={handleShowFormCampaignRegistration}
                        >
                            Register for this Campaign
                        </button>
                    }
                    {checkCampaignRegisted &&
                        <button className={cx('campaign-agenda-btn', 'campaign-agenda-btn-register')}
                        >
                            Campain registered
                        </button>
                    }
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
                                            {area?.places.length > 0 &&
                                                area?.places.map((item, index) =>
                                                    <div className={cx("campaign-agenda-place-item")}
                                                        key={index}
                                                    >
                                                        <h4 className={cx('campaign-agenda-place')}>
                                                            {item.name}
                                                        </h4>
                                                        <div className={cx('campaign-agenda-times')}>
                                                            {item?.sessions.length > 0 &&
                                                                item?.sessions.map((session, index) =>
                                                                    <span key={index}
                                                                        className={cx('campaign-agenda-times-item', {
                                                                            'active': session?.type === inforCampaignIfRegisted?.ticketType
                                                                        })}
                                                                    >
                                                                        <Link
                                                                            className={cx('campaign-agenda-session-link')}
                                                                            to={pathName.join('/') + '/' + item?.id + '/' + session?.id}
                                                                        >
                                                                            {session.time}
                                                                        </Link>
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
                {/* form registration campagin */}
                <VaccineRegistration ref={campaignRegisterRef}
                    tickets={campaignState?.tickets}
                    services={campaignState?.services}
                    name={campaignState?.name}
                    id={campaignState?.id}
                />
            </div>
        </div >
    );
}

export default CampaignAgeda;