import React from 'react'
import Button from './Button'
import styles from "./Utils.module.scss";

const ButtonsGroup = ({ buttons, searchAttrHandler }) => {
    return (
        <div className={styles.buttons}>
            {buttons.map((button, index) => (
                (typeof button === "object") ?
                    (button.map((button, index) => (
                        <Button key={index + button} value={button} searchAttrHandler={searchAttrHandler} />
                    )))
                    : <Button key={index + button} value={button} searchAttrHandler={searchAttrHandler} />))}
        </div>
    )
}

export default ButtonsGroup
