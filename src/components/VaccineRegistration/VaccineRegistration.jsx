import classnames from 'classnames/bind';
import styles from './VaccineRegistration.module.scss';

const cx = classnames.bind(styles);
function VaccnieRegistration() {
    return (
        <div className={cx('vaccnie-register')}>
            <form className={cx('form-vaccnie-resgister')}>
                <h2 className={cx('title')}>Vacciantion Campaign 2021</h2>
                <div className={cx('tickets')}>
                    <div className={cx('ticket')}>
                        <div className={cx('ticket-title')}>
                            <input type='checkbox' className={cx('ticket-choose')} />
                            <h4 className={cx('ticket-title-name')}>Normal</h4>
                        </div>
                        <span className={cx('ticket-price')}>210</span>
                    </div>
                    <div className={cx('ticket')}>
                        <div className={cx('ticket-title')}>
                            <input type='checkbox' className={cx('ticket-choose')} />
                            <h4 className={cx('ticket-title-name')}>Early Bird</h4>
                        </div>
                        <span className={cx('ticket-price')}>230</span>
                    </div>
                    <div className={cx('ticket')}>
                        <div className={cx('ticket-title')}>
                            <input type='checkbox' className={cx('ticket-choose')} />
                            <h4 className={cx('ticket-title-name')}>Hotel Package</h4>
                        </div>
                        <span className={cx('ticket-price')}>300</span>
                    </div>
                </div>
                <div className={cx('services')}>
                    <h4 className={cx('servies-title')}>
                        Select additional services you want to purchase:
                    </h4>
                    <div className={cx('services-list')}>
                        <div className={cx('services-item')}>
                            <input type='checkbox' className={cx('services-choose')} />
                            <h5 className={cx('services-item-name', 'workshop')}>Designing skill path</h5>
                        </div>
                        <div className={cx('services-item')}>
                            <input type='checkbox' className={cx('services-choose')} />
                            <h5 className={cx('services-item-name', 'workshop')}>Designing skill path</h5>
                        </div>
                        <div className={cx('services-item')}>
                            <input type='checkbox' className={cx('services-choose')} />
                            <h5 className={cx('services-item-name', 'workshop')}>Designing skill path</h5>
                        </div>
                    </div>
                </div>
                <div className={cx("total-const")}>
                    <div className={cx("total-const-container")}>
                        <div className={cx("total-group")}>
                            <h4 className={cx('total-const-title')}>Total cost:</h4>
                            <span className={cx('total-const-price')} id='event-const'>210</span>
                        </div>
                        <div className={cx("total-group")}>
                            <h4 className={cx('total-const-title')}>Additional services:</h4>
                            <span className={cx('total-const-price')} id='additional-const'>30</span>
                        </div>
                        <div className={cx("total-group")}>
                            <h4 className={cx('total-const-title')}>Total: </h4>
                            <span className={cx('total-const-price')} id="total-const">240</span>
                        </div>
                    </div>
                </div>
                <div className={cx('button-container')}>
                    <button className={cx('button-furchase')} id='purchase'>Purchase</button>
                </div>
            </form>
        </div>
    )
}

export default VaccnieRegistration;