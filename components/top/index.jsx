import styles from './styles.module.scss'
import ArrowLeft from 'public/icons/arrow_left'
import { useEffect, useState } from 'react';
const Top = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', listenToScroll, true);
            return () => {
                window.removeEventListener('scroll', listenToScroll);
            };
        }
    }, []);

    const listenToScroll = () => {
        setScrollPosition(window.pageYOffset);
    };

    return (<div onClick={scrollToTop} className={[scrollPosition < 50 ? null : styles.revealed, styles.block].join(' ')}><ArrowLeft /></div>)
}

export default Top;