import { useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classnames.bind(styles);
function Header() {
    // eslint-disable-next-line no-unused-vars
    const [currentUser, setCurrentUser] = useState('');

    return (
        <header className={cx('header')}>
            <div className={cx('container', 'h-100')}>
                <div className="row h-100">
                    <div className={cx('col', 'header-container', 'px-0')}>
                        <div className={cx('header-logo')}>
                            <h2>
                                <Link to='/' className={cx('header-logo-title', 'text-primary')}>
                                    Vaccination Campaign
                                </Link>
                            </h2>
                        </div>
                        <div className={cx('header-action')}>
                            {!currentUser &&
                                <div className={cx('header-actions-unlogin')}>
                                    <button className={cx('login-btn', 'header-actions-btn', 'btn-primary', 'btn')}>
                                        Login
                                    </button>
                                </div>
                            }
                            {currentUser &&
                                <div className={cx('header-actions-user')}>
                                    <h4 className={cx('header-user-name')}>{currentUser}</h4>
                                    <button className={cx('logout-btn', 'header-user-btn', 'btn', 'btn-primary')}>
                                        Log out
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;