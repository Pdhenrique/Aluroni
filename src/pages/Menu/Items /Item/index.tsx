
import DishesTags from 'components/DishesTags'
import styles from './Item.module.scss'

import { dishesProps } from 'types/Dishe'
import { useNavigate } from 'react-router-dom'
import { memo } from 'react'


function Item(props: dishesProps) {

    const {id, title, description, photo } = props
    const navigate = useNavigate()


    return (
        <div className={styles.item} onClick={() => navigate(`/dishes/${id}`)}>
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

export default memo(Item)