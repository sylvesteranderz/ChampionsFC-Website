import { useState } from 'react'

interface GalleryItem {
  id: number
  src: string
  alt: string
}

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const galleryItems: GalleryItem[] = [
    { id: 1, src: 'Player-images/Players46.jpg', alt: 'Nana Kofi Bermah' },
    { id: 2, src: 'Player-images/Players45.jpg', alt: 'Jane Smith' },
    { id: 3, src: 'Player-images/Players44.jpg', alt: 'Saviola' },
    { id: 4, src: 'Player-images/Players43.jpg', alt: 'Kweku Victor Adjei' },
    { id: 5, src: 'Player-images/Players42.jpg', alt: 'Philip Siame' },
    { id: 6, src: 'Player-images/Players41.jpg', alt: 'Berma' },
  ]

  const moveSlide = (direction: number) => {
    setCurrentIndex((prev) => {
      if (direction === 1) {
        return (prev + 1) % galleryItems.length
      } else {
        return prev === 0 ? galleryItems.length - 1 : prev - 1
      }
    })
  }

  return (
    <section id="gallery" className="gallery">
      <h2>Player Gallery</h2>
      <div className="slider-container">
        <button className="slider-btn prev" onClick={() => moveSlide(-1)}>
          &#10094;
        </button>
        <div className="gallery-slider">
          <div className="gallery-item">
            <img src={galleryItems[currentIndex].src} alt={galleryItems[currentIndex].alt} />
          </div>
        </div>
        <button className="slider-btn next" onClick={() => moveSlide(1)}>
          &#10095;
        </button>
      </div>
    </section>
  )
}

export default Gallery

