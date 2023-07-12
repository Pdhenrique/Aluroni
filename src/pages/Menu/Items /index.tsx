
import styles from './Items.module.scss'
import menuItems from 'data/Menu.json'
import Item from './Item'
import { useEffect, useState } from 'react'

interface Props {
    search: string;
    filter: number | null;
    computer: string
}

export default function Items(props: Props) {

    const [list, setList] = useState(menuItems)
    const { search, filter, computer } = props


    function searchTest(title: string) {

        const regex = new RegExp(search, 'i')
        return regex.test(title)
    }

    function filterTest(id: number) {
        if (filter !== null) return filter === id

        return true
    }

    function order(newList: typeof menuItems){
        switch(computer){
        case 'porcao':
            return newList.sort((a, b) => a.size > b.size ? 1 : -1)
        case 'qts_pessoas':
            return newList.sort((a, b) => a.serving > b.serving ? 1 : -1)
        case 'preco':
            return newList.sort((a, b) => a.price > b.price ? 1 : -1 )
        default:
            return newList
        }
    }

    useEffect(() => {
        const newList = menuItems.filter(item => searchTest(item.title) && filterTest(item.category.id))
        setList(order(newList))
    }, [search, filter, computer])

    return (
        <div className={styles.items}>
            {list.map(item => (
                <Item
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    )
}