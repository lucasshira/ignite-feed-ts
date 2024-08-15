import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

// extends = herdando propriedades da interface que esta estendendo
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img 
      className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
      {...props}
    />
  )
}