
import styles from './Filter.module.scss';
import filters from './Filter.json';
import classNames from 'classnames';

type IOption = typeof filters[0]

interface Props {
    filter: number |  null;
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filter({filter, setFilter}: Props) {
    
    function selectFilter(option: IOption){
        if(filter === option.id) return setFilter(null);
        return setFilter(option.id);
    }

    return( 
        <div className={styles.filters}>
            {filters.map((option) => (
                <button 
                    className={classNames({
                        [styles.filters__filter]: true,
                        [styles['filters__filter--active']]: filter === option.id
                    })}
                    key={option.id} 
                    onClick={() => selectFilter(option)}>
                    {option.label}
                </button>
            ))}
        </div>);
}