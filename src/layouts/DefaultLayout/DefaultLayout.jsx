import styles from './DefaultLayout.module.scss';
import classnames from 'classnames/bind';
import { Header } from '~/components';

const cx = classnames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <main className={cx('content', 'container')}>
                {children}
            </main>
        </div>
    )
}

export default DefaultLayout