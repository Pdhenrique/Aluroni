import styles from './Computer.module.scss'
import options from './options.json'

export default function Computer() {

    return(
        <button className={styles.computer}>
            <span>Computer by</span>
            <div className={styles.computer__options}>
                {options.map(option => (
                    <div className={styles.computer__option} key={option.value}>
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    
    )
}