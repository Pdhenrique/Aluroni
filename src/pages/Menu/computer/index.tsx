import { useState } from 'react'
import styles from './Computer.module.scss'
import options from './options.json'
import classNames from 'classnames'

import {MdKeyboardArrowUp, MdKeyboardArrowDown} from 'react-icons/md'

interface Props {
    computer: string,
    setComputer: React.Dispatch<React.SetStateAction<string>>;
}

export default function Computer({computer, setComputer}: Props) {

    const [open, setOpen] = useState(false)

    const computerName = computer && options.find(option => option.value === computer)?.name

    return(
        <button 
            className={classNames({
                [styles.computer]: true,
                [styles["computer--active"]]: computer !== "",
            })} 
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(false)}
        >
            <span>{computerName || "Computer by"}</span>
            {open ? (
            <MdKeyboardArrowUp size={20}/>
            ): (
            <MdKeyboardArrowDown size={20}/>
            )}
            <div className={classNames({
                [styles.computer__options]: true,
                [styles["computer__options--active"]]: open
            })}>
                {options.map(option => (
                    <div 
                    className={styles.computer__option}
                    key={option.value} onClick={() => 
                    setComputer(option.value)}
                    >
                        {option.name}
                    </div>
                ))}
            </div>
        </button>
    
    )
}