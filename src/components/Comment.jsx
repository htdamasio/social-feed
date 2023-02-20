import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css'

export function Commnent() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/htdamasio.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Henrique Tomé</strong>
              <time
                title="February 20 at 01:58 PM"
                dateTime="2023-02-20 01:58:15 PM"
              >
                About 1 hour ago!
              </time>
            </div>
            <button title="Delete comment">
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp size={20}/>
            Applause <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}