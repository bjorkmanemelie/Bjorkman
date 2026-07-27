import "../styles/Gallery.css";
import photo1 from "../assets/_U1A0006.JPG";
import photo2 from "../assets/_U1A9918.JPG";
import photo3 from "../assets/IMG_0274.JPG";
import photo4 from "../assets/_U1A0048.JPG";

const photos = [
  { src: photo3, alt: "Photo 3" },
  { src: photo4, alt: "Photo 4", dark: true },
  { src: photo1, alt: "Photo 1" },
  { src: photo2, alt: "Photo 2" },
];

const Gallery = () => {
  return (
    <section id="gallery">
      <p className="gallery-label">Photos by me</p>
      <div className="gallery-grid">
        {photos.map((photo, i) => (
          <div key={i} className={`gallery-item ${photo.dark ? "gallery-item--dark" : ""}`}>
            <img src={photo.src} alt={photo.alt} className="gallery-img" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
