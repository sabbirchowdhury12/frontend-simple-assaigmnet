import { useState } from "react";
import icon from "../assets/Vector.png";
import icon2 from "../assets/Frame 1000002250.png";
import arrow1 from "../assets/arrowLeft.png";
import arrow2 from "../assets/arrowRight.png";

const initialImages = [
  "https://images.unsplash.com/photo-1725492123815-576fcd133766?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",

  "https://images.unsplash.com/photo-1725492123815-576fcd133766?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
  "https://images.unsplash.com/photo-1725492123815-576fcd133766?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
];
const GalleryWidget = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [images, setImages] = useState(initialImages); // Stores image URLs

  const handleImageUpload = (event) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const newImages = Array.from(files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages([...images, ...newImages]); // Add new images to the state
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className="relative mt-20 bg-gray-700 max-w-3xl mx-auto   rounded-lg shadow-lg py-6 px-12 ">
      <div className="flex justify-between items-center px-6 py-2 rounded-full">
        <div className=" text-xl cursor-pointer bg-[#141414] text-white py-5 px-9 rounded-3xl font-semibold">
          Gallery
        </div>

        <div className="flex gap-8 items-center">
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            multiple
            onChange={handleImageUpload}
            style={{ display: "none" }} // Hide the file input
          />
          <button
            className="rounded-3xl bg-gradient-to-b from-[#28292F] shadow-lg to-[#28292F] font-semibold p-3"
            onClick={() => document.getElementById("image-upload")?.click()}
          >
            + Add Image
          </button>
          <div className="flex gap-4 ">
            <div
              className="rounded-full bg-gradient-to-b from-[#28292F] shadow-lg to-[#28292F] font-semibold p-3"
              onClick={handlePrev}
            >
              <img src={arrow1} className="h-6" alt="" />
            </div>
            <div
              className="rounded-3xl bg-gradient-to-b from-[#28292F] shadow-lg to-[#28292F] font-semibold p-3"
              onClick={handleNext}
            >
              <img src={arrow2} className="h-6" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 overflow-hidden justify-center items-center">
        {images.map((img, index) => (
          <div
            key={index}
            className={`transition-all transform ${
              index === currentIndex ? "scale-100" : "scale-95 opacity-50"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              className="h-48 w-48 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      <div className="absolute left-3 top-5">
        <img src={icon} />
      </div>
      <div className="absolute left-3 top-1/2 -translate-y-0">
        <img src={icon2} />
      </div>
    </div>
  );
};

export default GalleryWidget;
