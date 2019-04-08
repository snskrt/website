import React, { useState } from 'react';
import styles from "../components/dict.module.css"

export default () => {
    const [img, setImg] = useState(0);

    const screenshots = [
        'Moniew-Williams translation of "bāhu" word',
        'Apte translation of "sāman" word',
        'Source authority highlight',
        'Dictionary abbreviation highlight'
    ];

    return <div className={styles.gallery}>
        {
            screenshots.map((label, idx) => (
                <img 
                    alt={label}
                    src={`/dict_screenshots/previews/i${idx}.png`}
                    onClick={() => setImg(idx)}
                    className={styles.preview}
                />
            ))
        }

        <img 
            className={styles.screenshot}
            alt={screenshots[img]}
            src={`/dict_screenshots/i${img}.png`}
        />
    </div>
}
