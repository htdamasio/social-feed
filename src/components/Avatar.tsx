import { ImgHTMLAttributes } from 'react'
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  bordered?: true
}

export function Avatar({bordered, ...props}: AvatarProps) {
  return (
    <img 
      className={bordered ? styles.borderedAvatar : styles.avatar} 
      {...props}
    />
  );
}