import React, {useState, useEffect} from 'react'
import styles from  './BannerChange.module.css'

export default function BannerChange() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Você assistiu a ${count} ep!`;
      });

  return (
    <div className={styles.counter}>
      <h2>Você assistiu a {count} ep!</h2>
      <h4>Clique 1x para cada EP que você já viu!</h4>
      <button onClick={() => setCount(count + 1)}>
        +1 EP
      </button>
    </div>
  )
}
