import classnames from 'classnames/bind';
import { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import styles from './VaccineRegistration.module.scss';

const cx = classnames.bind(styles);
const VaccineRegistration = forwardRef(
    ({ tickets, services }, ref) => {
        const vaccnieRegisterRef = useRef(null);
        const [ticketType, setTicketType] = useState(null);
        const [serviesType, setServiesType] = useState([]);
        const [totalCostValue, setTotalCostValue] = useState(0);
        const [addServiceCostValue, setAddServiceCostValue] = useState(0);
        const [totalRootCostValue, setTotalRootCostValue] = useState(0);

        useImperativeHandle(ref, () => {
            return {
                showFormRegistration: () => vaccnieRegisterRef.current.style.display = 'flex',
                hideFormRegistration: () => vaccnieRegisterRef.current.style.display = 'none'
            }
        })

        function handleChooseTicketType(e) {
            e.stopPropagation();
            const element = e.target;
            let elementParrent = element.parentElement;
            if (!element.checked) {
                setTicketType(null);
                setTotalRootCostValue(0);
                setTotalCostValue(addServiceCostValue);
                return;
            }
            while (!elementParrent.classList.contains(cx('ticket')))
                elementParrent = elementParrent.parentElement;

            const type = elementParrent.querySelector(`.${cx('ticket-title-name')}`).innerText;
            const price = +elementParrent.querySelector(`.${cx('ticket-price')}`).innerText;
            setTicketType({ price, type });
            setTotalRootCostValue(price);
            setTotalCostValue(addServiceCostValue + price);
        }

        function handleChooseServiesAdd(e) {
            e.stopPropagation();
            const element = e.target;
            let elementParrent = element.parentElement;
            while (!elementParrent.classList.contains(cx('services-item')))
                elementParrent = elementParrent.parentElement;

            const name = elementParrent.querySelector(`.${cx('workshop')}`).innerText;
            const price = +elementParrent.getAttribute('data-price');
            setServiesType((prev) => {
                return [...prev, { name, price }]
            })
            setAddServiceCostValue((prev) => prev + price);
            setTotalCostValue(addServiceCostValue + totalRootCostValue);
        }

        return (
            <div className={cx('vaccnie-register')} ref={vaccnieRegisterRef}
            >
                <div className={cx('overlay')}
                    onClick={() => vaccnieRegisterRef.current.style.display = 'none'}
                ></div>
                <form className={cx('form-vaccnie-resgister')}>
                    <h2 className={cx('title')}>Vacciantion Campaign 2021</h2>
                    <div className={cx('tickets')}>
                        {tickets?.length > 0 &&
                            tickets.map((ticket, index) =>
                                <div className={cx('ticket')} key={index}>
                                    <div className={cx('ticket-title')}>
                                        <input type='checkbox' className={cx('ticket-choose')}
                                            checked={ticketType?.type === ticket?.type}
                                            onChange={handleChooseTicketType}
                                        />
                                        <h4 className={cx('ticket-title-name')}>{ticket?.type}</h4>
                                    </div>
                                    <span className={cx('ticket-price')}>{ticket?.price}</span>
                                </div>
                            )
                        }
                    </div>
                    <div className={cx('services')}>
                        <h4 className={cx('servies-title')}>
                            Select additional services you want to purchase:
                        </h4>
                        <div className={cx('services-list')}>
                            {services?.length > 0 &&
                                services?.map((service, index) =>
                                    <div className={cx('services-item')} key={index}
                                        data-price={service?.price}
                                    >
                                        <input type='checkbox' className={cx('services-choose')}
                                            onChange={handleChooseServiesAdd}
                                        // checked={serviesType.includes(service?.name)}
                                        />
                                        <h5 className={cx('services-item-name', 'workshop')}>
                                            {service?.name}
                                        </h5>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className={cx("total-const")}>
                        <div className={cx("total-const-container")}>
                            <div className={cx("total-group")}>
                                <h4 className={cx('total-const-title')}>Total cost:</h4>
                                <span className={cx('total-const-price')} id='event-const'>
                                    {totalRootCostValue}
                                </span>
                            </div>
                            <div className={cx("total-group")}>
                                <h4 className={cx('total-const-title')}>Additional services:</h4>
                                <span className={cx('total-const-price')} id='additional-const'>
                                    {addServiceCostValue}
                                </span>
                            </div>
                            <div className={cx("total-group")}>
                                <h4 className={cx('total-const-title')}>Total: </h4>
                                <span className={cx('total-const-price')} id="total-const">
                                    {totalCostValue}
                                </span>
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
)

export default VaccineRegistration;