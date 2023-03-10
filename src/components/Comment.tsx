import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css'

interface CommentProps {
  author: string,
  content: string,
  publishedAt: Date,
  onDeleteComment: (comment: string) => void;
}

export function Comment({author, content, onDeleteComment}: CommentProps) {
  const [likes, setLikes] = useState(0);
  
  function handleDeleteComment() {
    onDeleteComment(content)
  }
  
  function handleApplauseComment() {
    setLikes((state) => {
      return state + 1;
    });  
  }

  return (
    <div className={styles.comment}>
      <Avatar src="https://github.com/htdamasio.png"/>
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author}</strong>
              <time
                title="February 20 at 01:58 PM"
                dateTime="2023-02-20 01:58:15 PM"
              >
                About 1 hour ago!
              </time>
            </div>
            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={24}/>
            </button>
          </header>
          {/* <p>Muito bom Devon, parabéns!! 👏👏</p> */}
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleApplauseComment}>
            <ThumbsUp size={20}/>
            Applause <span>{likes}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}