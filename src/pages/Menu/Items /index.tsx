import styles from './Items.module.scss'
import menuItems from './Items.json'
import Item from './Item'

export default function Items(){
    return(
        <div className={styles.items}>
            {menuItems.map(item => (
                <Item 
                key={item.id}
                {...item}
                />
            )) }
        </div>
    )
}