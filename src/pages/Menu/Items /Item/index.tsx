
import DishesTags from 'components/DishesTags'
import styles from './Item.module.scss'

import { dishesProps } from 'types/Dishe'


export default function Item(props: dishesProps) {

    const { title, description, photo } = props

    return (
        <div className={styles.item}>
            <div className={styles.item__image}>
                <img src={photo} alt={title} />
            </div>
            <div className={styles.item__description}>
                <div className={styles.item__title}>
                    <h2>{title}</h2>
                    <p> {description}</p>      
                </div>
                <DishesTags {...props}/>
            </div>
        </div>
    )
}