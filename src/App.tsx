import { useState } from 'react'

import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post, PostType } from './components/Post'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      name: 'Henrique Tomé',
      role: 'Full-Stack Developer',
      avatarUrl: 'https://github.com/htdamasio.png'
    },
    content: [
      {
        id: 1,
        type: 'paragraph',
        content: 'Hey guys, whatsup 👋',
        url:''
      },
      {
        id: 2,
        type: 'paragraph',
        content: 'Just deploy a new project for my portifolio. This one I made with plain React at Rocketseat Ignite course. The project name is Social feed 🚀',
        url:''
      },
      {
        id: 3,
        type: 'link',
        content: 'jane.design/doctorcare',
        url: ''
      },
      {
        id: 4,
        type: 'paragraph',
        url: '',
        content: [
          {
            id: 5,
            type: 'inlinelink',
            content: '#newproject',
            url: ''
          },
          {
            id: 6,
            type: 'inlinelink',
            content: '#reactisamazing',
            url: ''
          },
          {
            id: 7,
            type: 'inlinelink',
            content: '#fullstackistheway',
            url: ''
          },
        ]
      }
    ],
    publishedAt: new Date('2023-02-21 11:30:00')
  },
  {
    id: 2,
    author: {
      name: 'Vinicius Tomé',
      role: 'Personal Trainer',
      avatarUrl: 'https://github.com/htdamasio.png'
    },
    content: [
      {
        id: 1,
        type: 'paragraph',
        content: 'Hey guys, whatsup 👋',
        url:''
      },
      {
        id: 2,
        type: 'paragraph',
        content: 'Just deploy a new project for my portifolio. This one I made with plain React at Rocketseat Ignite course. The project name is Social feed 🚀',
        url:''
      },
      {
        id: 3,
        type: 'link',
        content: 'jane.design/doctorcare',
        url: ''
      },
      {
        id: 4,
        type: 'paragraph',
        url: '',
        content: [
          {
            id: 5,
            type: 'inlinelink',
            content: '#newproject',
            url: ''
          },
          {
            id: 6,
            type: 'inlinelink',
            content: '#reactisamazing',
            url: ''
          },
          {
            id: 7,
            type: 'inlinelink',
            content: '#fullstackistheway',
            url: ''
          },
        ]
      }
    ],
    publishedAt: new Date('2023-02-15 14:30:00')
  }
]

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}