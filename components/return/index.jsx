import styles from './styles.module.scss'
import Link from 'next/link'
import ArrowLeft from 'public/icons/arrow_left'
const Return = () => {
    return (<Link href="/#projects"><div className={styles.block}><ArrowLeft /></div></Link>)
}

export default Return;