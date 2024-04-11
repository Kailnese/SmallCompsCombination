import React, { useState } from 'react'
import styles from './ProgressStyle/Progress.module.css'

interface ProgressComponentProps {
  items: {[key: string]: number};
  colors: string[];
  className?: string;
}

export const ProgressComponent = ({items, colors, className}: ProgressComponentProps) => {

  const [parentElement, setParentElement] = useState<HTMLDivElement | null>(null);

  const totalNumber = Object.keys(items).reduce((acc, cur) => {
    return acc + items[cur];
  }, 0);

  return (
    <div className={`${styles.container} ${className}`} ref={el => setParentElement(el)}>
      {Object.keys(items).map((item, index) => {
        if(!parentElement) {
          return <></>
        }
        const parentWidth = parentElement.clientWidth;
        const width = `${parentWidth * (items[item] / totalNumber)}px`
        let radius = '';
        if(index === 0){
          radius = '100px 0 0 100px'
        }
        if(index === colors.length - 1){
          radius = '0 100px 100px 0'
        }
        return <div className={styles.items} style={{backgroundColor: colors[index], width: width, borderRadius: radius}} />
      })}
    </div>
  )
}