import { useEffect, useState } from 'react';
import style from './BigCards.module.css';

export default function BigCards({temp}) {
    const [title, setTitle] = useState(document.title);

    useEffect(() => {
        document.title = `${title}`;
    })

    return(
        <div className={style.cardGroups}>
            <div className={style.cardBody} onClick={() => setTitle({title} = {temp})}>
                <h1>Temporada {temp}</h1>
            </div>
        </div>
    )
}