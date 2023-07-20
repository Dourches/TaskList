import Head from 'next/head'
import TaskList from '@/components/taskList'

import styles from '@/pages/index.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TaskList />
      </main>

    </div>
  )
}
