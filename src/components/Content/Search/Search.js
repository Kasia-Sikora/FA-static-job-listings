import React from 'react';
import styles from './Search.module.scss';
import Chip from './Chip';

const Search = ({ searchedAttr, removeCategoriesHandler }) => {
    return (
        <div className={`${(searchedAttr.length) ? styles.seachBar : styles.none}`}>
            <div className={styles.chips}>
                {searchedAttr.map(chip => (
                        <Chip key={chip} value={chip} removeCategoriesHandler={removeCategoriesHandler} />
                ))}
            </div>
            <button onClick={() => removeCategoriesHandler()} className={styles.clear}>Clear</button>
        </div>
    )
}

export default Search
