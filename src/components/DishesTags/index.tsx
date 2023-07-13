import classNames from 'classnames'
import styles from './DishesTags.module.scss'
import { dishesProps } from 'types/Dishe'

export default function DishesTags({category, size, serving, price}: dishesProps) {
    return(
        <div className={styles.tags}>
            <div className={classNames({
                [styles.tags__type]: true,
                [styles[`tags__type__${category.label.toLowerCase()}`]]: true
            })}>
                {category.label}
            </div>
            <div className={styles.tags__portion}>
                {size}
            </div>
            <div className={styles.tags__amtPeople}>
                {serving} pessoa{serving === 1 ? '' : 's'}
            </div>
            <div className={styles.tags__value}>
                {price.toFixed(2)}
            </div>
        </div>
    )
}