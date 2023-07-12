
import styles from './Menu.module.scss'
import { ReactComponent as Logo } from 'assets/logo.svg'
import SearchEngine from './SearchEngine'
import { useState } from 'react'
import Filter from './Filter'
import Computer from './computer'
import Items from './Items '

export default function Menu() {

    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState<number | null>(null)
    const [computer, setComputer] = useState('')

    return (
        <main>
            <nav className={styles.logo}>
                <Logo />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    A casa do código e da massa
                </div>
            </header>
            <section className={styles.menu}>
                <h3 className={styles.menu__title}>Menu</h3>
                <SearchEngine search={search} setSearch={setSearch} />
                <div className={styles.menu__filter}>
                    <Filter filter={filter} setFilter={setFilter} />
                    <Computer computer={computer} setComputer={setComputer} />
                </div>
                <Items search={search} filter={filter} computer={computer} />
            </section>
        </main>

    )
}