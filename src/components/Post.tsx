import { format, formatDistanceToNow } from 'date-fns'
import { ChangeEvent, FormEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css'

interface Author {
  name: string,
  role: string,
  avatarUrl: string
}

interface PostContent {
  id: number,
  type: 'paragraph' | 'link' | 'inlinelink',
  content: string | PostContent[],
  url: string
}

interface IComment {
  author: string,
  publishedAt: Date,
  content: string,
  likes: 0
}

export interface PostType {
  id: number,
  author: Author,
  content: PostContent[],
  publishedAt: Date,
  comments: IComment[]
}

interface PostProps {
  post: PostType
}

export function Post({ post }: PostProps) {
  const [postComments, setPostComments] = useState(post.comments ?? []);
  const [newCommnetText, setNewCommnetText] = useState('');
  
  const publishedDateFormatted = format(post.publishedAt, "LLLL dd 'at' KK:mm aa");
  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    addSuffix: true
  }) 

  const formatContent = function(content: PostContent[]) {
    return content.map((line) => {
      if(line.type === 'paragraph') {
        return (
          <p key={line.id}>
            {typeof line.content === 'object' ? formatContent(line.content) : line.content}
          </p>
        )
      } else if (line.type === 'link' && typeof line.content === 'string') {
        return <p key={line.id}><a href={line.url ?? '#'}>{line.content}</a></p>
      } else if (line.type === 'inlinelink' && typeof line.content === 'string') {
        return <a key={line.id} href={line.url ?? '#'}>{line.content}</a> 
      }
    })
  }

  function generateNewComment(commentContent: string): IComment {
    return {
      author: "Henrique Tomé",
      publishedAt: new Date(),
      content: commentContent,
      likes: 0
    }
  }

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    
      setPostComments([...postComments, generateNewComment(newCommnetText)])
      setNewCommnetText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommnetText(event.target.value)
  }

  function handleNewCommentInvalid(event: ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('This field is required!')
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = postComments.filter(comment => {
                                        return comment.content !== commentToDelete
                                      });
    setPostComments(commentsWithoutDeletedOne);
  }

  const isNewCommentTextEmpty = newCommnetText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
           src={post.author.avatarUrl}
           bordered 
          />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>        
        </div>
        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {formatContent(post.content)}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave your commnent</strong>
        <textarea
          value={newCommnetText}
          onChange={handleNewCommentChange} 
          onInvalid={handleNewCommentInvalid}
          placeholder="Leave a comment"
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentTextEmpty}>Commnent</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {postComments?.map(comment => {
          return (
            <Comment 
              key={comment.content} 
              author={comment.author}
              publishedAt={comment.publishedAt}
              content={comment.content}
              likes={comment.likes}
              onDeleteComment={deleteComment}
            />
          )
        })} 
      </div>
    </article>
  );
}