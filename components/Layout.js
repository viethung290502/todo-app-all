import React from 'react'
import Todolist from './Todolist'
import styles from '../styles/Home.module.css'
const Layout = () => {
    return (
        <div className={styles.layout}>
            <Todolist />
        </div>
    )
}

export default Layout
