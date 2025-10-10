import Image from 'next/image';
import styles from "./gallery.module.css"
import { imageUrls } from './data';
const Gallery = () => {

  return (
    <div>
    <>
      <div className={styles.maindiv}>
        <div className={styles.h}>
          <h1 className={styles.text}>E-Summit Gallery</h1>
        </div>
        <div className={styles.container}>
          {imageUrls.map((imageUrl, index) => (
            <div className={styles.img} key={index}>
              <Image
unoptimized src={imageUrl.url} alt={`Image-${index}`} width={100} height={100} />
            </div>
          ))}
        </div>
      </div>
      
    </>
    </div>
  );
};

export default Gallery;
