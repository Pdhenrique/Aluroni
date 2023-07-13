import styles from './notFound.module.scss'
import {ReactComponent as NotFoundImg} from 'assets/not_found.svg'
import classNames from 'classnames'
import stylesTheme from 'styles/theme.module.scss'
import {useNavigate} from 'react-router-dom'

export default function NotFound(){
 
    const navigate = useNavigate()

    return(
        <div className={classNames({
            [styles.container]: true,
            [stylesTheme.container]: true,
        })}>
            <div className={styles.goBack}>
                <button onClick={() => navigate(-1)}>
                    {'< Voltar'}
                </button>
            </div>
            <NotFoundImg/>
        </div>
    )
}