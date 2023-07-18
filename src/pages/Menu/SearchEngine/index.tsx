
import { useMemo } from 'react'
import styles from './SearchEngine.module.scss'
import { CgSearch } from 'react-icons/cg'
interface Props{
    search: string
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchEngine({search, setSearch}: Props){
 
    const memorizedSearchIcon = useMemo(() => {
        return <CgSearch size={20} color="#4C4D5E"/>
    }, [])

    return (
        <div className={styles.searchEngine}>
            <input 
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder='Buscar'
            />
            {memorizedSearchIcon}
        </div>
    )
}