'use client';
import Paragraph from './component/Paragraph';
import Word from './component/Word';
import Character from './component/Character';
import styles from './page.module.css'

const paragraph = "The more pride you have in a particular aspect of your identity, the more motivated you will be to maintain the habits associated with with it." 
export default function Home() {

  const words = paragraph.split(" ")
  return (
    <main className={styles.main}>
        <div style={{height: "100vh"}}></div>
        <Paragraph paragraph={paragraph}/>
        <div style={{height: "100vh"}}></div>
        <Word paragraph={paragraph}/>
        <div style={{height: "100vh"}}></div>
        <Character paragraph={paragraph} />
        <div style={{height: "100vh"}}></div>
    </main>
  )
}