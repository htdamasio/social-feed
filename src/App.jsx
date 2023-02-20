import { useState } from 'react'
import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import './global.css'
import styles from './App.module.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
          author="Henrique Tomé"
          content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim exercitationem in ratione, molestiae atque amet vel, dolor laborum eum iure quisquam dicta architecto. Voluptatibus maxime architecto aut, ut accusamus minus"  
          />
          <Post 
            author="Vinicius Tomé"
            content="A new post here!"
          />
        </main>
      </div>
    </>
  )
}