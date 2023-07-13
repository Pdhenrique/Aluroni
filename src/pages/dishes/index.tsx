import classNames from 'classnames'
import styles from './dishes.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import menu from 'data/Menu.json'

export default function Dishes(){
 
    const {id} = useParams()

    const navigate = useNavigate()

    const dishes = menu.find(item => item.id === Number(id))

    if(!dishes){
        return ''
    }

    return(
        <>
            <button className={styles.goBack} onClick={() => navigate(-1) }>
                {'< Voltar'}
            </button>
            <section className={styles.container}>
                <h1 className={styles.title}>
                    {dishes.title}
                </h1>
                <div className={styles.image}>
                    <img src={dishes.photo} alt={dishes.title}/>
                </div>
                <div className={styles.content}>
                    <p className={styles.content__description}>
                        {dishes.description}
                    </p>
                    <div className={styles.tags}>
                        <div className={classNames({
                            [styles.text__type]: true,                        })}>
                            [styles[`tags__type__${dishes.category.label.toLowerCase()}`]]: true
                        </div>
                        <div className={styles.tas__portion}>
                            {dishes.size}g
                        </div>
                        <div className={styles.tags__amtPeople}>
                            {dishes.serving} people{dishes.serving === 1 ? '' : 's'}
                        </div>
                        <div className={styles.value}>
                            R$ {dishes.price.toFixed(2)}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}