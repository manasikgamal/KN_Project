import React from 'react'
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: 'https://th.bing.com/th/id/R.95f0a889089823bf0927ce8fb686c223?rik=2oHqNqE32yn42Q&pid=ImgRaw&r=0',
  },
  {
    original: 'https://www.process-evolution.fr/wp-content/uploads/2015/05/kuehne_nagel_01.jpg',
  },
  {
    original: 'https://madein-cdn-prod.s3.amazonaws.com/uploads/legacy/antwerpen/2020/09/Kuehne-Nagel.png',
  },
];


export default function Gallary() {
  return (
    <div className='mt-20'>
        <ImageGallery showThumbnails={false} 
        autoPlay={true} items={images} showPlayButton={false} showFullscreenButton={false}
        showNav={false} showBullets={true} />
     </div>
  )
}
