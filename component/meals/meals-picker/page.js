//Button => function handleClick => trigger useRef const => input triggers


'use client'
import { useRef, useState } from 'react'
// Because we use onClick
import styles from './meals-picker.module.css'
import Image from 'next/image';

export default function ImagePicker ({label, name}){
    // trigger
    const imageInput = useRef();
    const [pickedImage, setPickedImage] = useState();

    function handleClick (){
        imageInput.current.click();
    }

    function handleImageChange(event){
        // One file that can be access
        const file = event.target.files[0];

        if(!file){
            setPickedImage(null);
            return;
        }

        // To preview / read our file 
        const fileReader = new FileReader();

        // generated url
        fileReader.onload = () => {
           setPickedImage(fileReader.result);
        };

        // pass that data in that method
        fileReader.readAsDataURL(file);
    }

  return (
    <div className={styles.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={styles.controls}>
            <div className={styles.preview}>
                {!pickedImage && <p>No Image picked yet</p>}
                {pickedImage && (<Image src={pickedImage} alt="Image selected by user" fill/>)}
            </div>
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
            onChange={handleImageChange}
            // so file cannot be submitted without Image
            required
            />

            {/* We want to use input button */}
            <button className={styles.button} type="button" onClick={handleClick}>
                Pick an Image button
            </button>
        </div>
    </div>
  )
}
