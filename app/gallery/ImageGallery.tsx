'use client'
import Image from 'next/image';
import { useState } from 'react';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';


const startIndex = 1; // Starting index
const itemCount = 20; // Total number of items

const images = Array.from({ length: itemCount }, (_, index) => `/images/gallery/${startIndex + index}.jpg`);



const ImageGallery = () => {
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((img, index) => (
                    <Image
                        width={400}
                        height={400}
                        key={index}
                        src={img}
                        alt={`Gallery Image ${index + 1}`}
                        className="w-full h-64 object-cover cursor-pointer rounded-lg"
                        onClick={() => {
                            setPhotoIndex(index);
                            setIsOpen(true);
                        }}
                    />
                ))}
            </div>

            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + images.length - 1) % images.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % images.length)
                    }
                />
            )}
        </div>
    );
};

export default ImageGallery;
