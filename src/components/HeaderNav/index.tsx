import { ReactComponent as Logo } from 'assets/logo.svg'
import styles from './HeaderNav.module.scss'
import {Link} from 'react-router-dom'

export default function HeaderNav(){

    const route = [{
        label: 'Home',
        to: '/'   
    }, {
        label: 'Menu',
        to: '/Menu'
    }, {
        label: 'About',
        to: '/About'
    }
    ]

    return(
        <nav className={styles.headerNav}>
            <Logo />
            <ul className={styles.headerNav__list}>
                {route.map((route, index) =>(
                    <li key={index} className={styles.headerNav__link}>
                        <Link to={route.to}>
                            {route.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav> 
    )
}