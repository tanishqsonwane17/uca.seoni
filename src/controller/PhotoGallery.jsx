import React, { useState } from 'react';
import Modal from 'react-modal';
import './gallery.css';

// ✅ Import your images
import img1 from '../assets/clg1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/clg2.jpg';
import img6 from '../assets/clg-class.jpg';
import img7 from '../assets/clg4.jpg';
import img8 from '../assets/clg5.jpg';
import img9 from '../assets/clg7.jpg';
import img10 from '../assets/5.jpg';
import img11 from '../assets/6.jpg';
import img12 from '../assets/7.jpg';
import img13 from '../assets/8.jpg';
import img14 from '../assets/9.jpg';
import img15  from '../assets/10.jpg';
import img16 from '../assets/11.jpg';
import img17 from '../assets/12.jpg';
import img18 from '../assets/13.jpg';
import img19 from '../assets/14.jpg';
import img20 from '../assets/15.jpg';

Modal.setAppElement('#root');

const images = [img1, img2, img3, img4,img5, img6, img7, img8,img9, img10, img11, img12,img13, img14, img15, img16, img17,img18, img19, img20];

export default function GridGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (

    <div className="gallery-container">
          <h1 className='text-center text-5xl font-bold  '>Gallray</h1>
      <div className="grid-gallery mt-5">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index}`}
            className="gallery-image"
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      <Modal
        isOpen={!!selectedImage}
        onRequestClose={() => setSelectedImage(null)}
        className="modal"
        overlayClassName="overlay"
      >
        <button className="close-btn" onClick={() => setSelectedImage(null)}>✕</button>
        <img src={selectedImage} alt="Large view" className="modal-image" />
      </Modal>
    </div>
  );
}
