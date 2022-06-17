import {useEffect, useState} from "react";
import './Image.css'

export default function UploadImages(props) {
    const [images, setImages] = useState([]);
    const [imagesURLs, setimagesURLs] = useState([]);

    useEffect(() => {
        if (images.length < 1) return;
        const newImageURLs = [];
        images.forEach(image => newImageURLs.push(URL.createObjectURL(image)));
        setimagesURLs(newImageURLs);
    }, [images]);

    function onImageChange(e) {
        setImages([...e.target.files]);
    }

    return (
        <>
            <div>
                {imagesURLs.map(imageSrc => <img src={imageSrc}/>)}
            </div>
            <input type="file" multiple accept="image/*" onChange={onImageChange}/>
        </>
    )


}

