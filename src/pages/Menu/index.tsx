import { useState } from 'react'

import SearchEngine from './SearchEngine'
import Filter from './Filter'
import Computer from './computer'
import Items from './Items '

import styles from './Menu.module.scss'
import stylesTheme from 'styles/theme.module.scss'


export default function Menu() {

    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState<number | null>(null)
    const [computer, setComputer] = useState('')

    return (
        <section className={styles.menu}>
            <h3 className={stylesTheme.title}>Menu</h3>
            <SearchEngine search={search} setSearch={setSearch} />
            <div className={styles.menu__filter}>
                <Filter filter={filter} setFilter={setFilter} />
                <Computer computer={computer} setComputer={setComputer} />
            </div>
            <Items search={search} filter={filter} computer={computer} />
        </section>   
    )
}