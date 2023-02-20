import { Commnent } from './Comment';
import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/htdamasio.png" 
          />
          <div className={styles.authorInfo}>
            <strong>Henrique Tomé</strong>
            <span>Web Developer</span>
          </div>        
        </div>
        <time
          title="February 20 at 01:58 PM"
          dateTime="2023-02-20 01:58:15 PM"
        >
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href="">jane.design/doctorcare</a></p>

        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '} 
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your commnent</strong>
        <textarea 
          placeholder="Leave a comment"
        />
        <footer>
          <button type="submit">Commnent</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Commnent /> 
        <Commnent /> 
        <Commnent /> 
      </div>
    </article>
  );
}