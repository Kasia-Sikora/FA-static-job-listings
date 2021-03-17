import React from 'react';
import styles from './Badge.module.scss'

const Badge = ({ type }) => {
    return (
        <div className={[styles.badge, ((type.name === "new") ? styles.new : styles.featured)].join(' ')}>
            {type.value}
        </div>
    )
}

export default Badge
