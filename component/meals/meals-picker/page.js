//Button => function handleClick => trigger useRef const => input triggers


'use client'
import { useRef } from 'react'
// Because we use onClick
import styles from './meals-picker.module.css'

export default function ImagePicker ({label, name}){
    // trigger
    const imageInput = useRef();

    function handleClick (){
        imageInput.current.click();
    }

  return (
    <div className={styles.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={styles.controls}>
            {/* We want to trigger this when click which ref can do */}
             {/* specified file accepted */}
            <input 
            // hides it
            className={styles.input}
            type="file" 
            id={name} 
            accept="image/png, image/jpeg" 
            name={name}
            ref={imageInput}
            />

            {/* We want to use input button */}
            <button className={styles.button} type="button" onClick={handleClick}>
                Pick an Image button
            </button>
        </div>
    </div>
  )
}
