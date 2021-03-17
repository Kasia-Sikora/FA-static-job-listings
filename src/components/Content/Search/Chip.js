import React from 'react'
import styles from './Search.module.scss';
import { IoClose } from "react-icons/io5";

const Chip = ({ value, removeCategoriesHandler }) => {
    return (
        <button className={styles.chip} onClick={() => removeCategoriesHandler(value)}>
            {value}
            <IoClose className={styles.close} />
        </button>
    )
}

export default Chip;