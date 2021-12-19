import Head from 'next/head'
import Image from 'next/image'
import Todolist from '../components/Todolist'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>Todo App All</h1>
      <Todolist />
    </div>
  )
}
