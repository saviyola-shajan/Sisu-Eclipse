import React, { useState } from "react";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";

const artworks = [
  [img3, img1],
  [img6, img4],
  [img5, img2],
];

const allImages = [
  { img: img1, desc: "Description for Image 1" },
  { img: img3, desc: "Description for Image 2" },
  { img: img4, desc: "Description for Image 3" },
  { img: img6, desc: "Description for Image 4" },
  { img: img2, desc: "Description for Image 5" },
  { img: img5, desc: "Description for Image 6" },
];

function ArtWorks() {
  const [popup, setPopup] = useState({ show: false, img: null, desc: "" });

  const openPopup = (img, desc) => {
    setPopup({ show: true, img, desc });
  };

  const closePopup = () => {
    setPopup({ show: false, img: null, desc: "" });
  };

  return (
    <div className="bg-gradient-to-b from-[#0f172a] via-[#281838] to-[#7b2c18] py-20 px-4 sm:px-10 md:px-32">
      <h2 className="text-5xl md:text-7xl font-bold text-[#F69005] mb-10 text-center md:text-left">
        ART WORKS
      </h2>

      {/* Desktop View */}
      <div className="hidden md:block space-y-8">
        {artworks.map(([left, right], i) => {
          const isEvenRow = i % 2 === 0;
          return (
            <div key={i} className="flex gap-10">
              {[left, right].map((imgSrc, idx) => (
                <div
                  key={idx}
                  className={`${
                    (isEvenRow && idx === 0) || (!isEvenRow && idx === 1)
                      ? "w-[35%]"
                      : "w-[65%]"
                  } h-[480px] overflow-hidden rounded-xl cursor-pointer transform transition duration-300 hover:scale-105`}
                  onClick={() =>
                    openPopup(
                      imgSrc,
                      `Description for image ${i * 2 + idx + 1}`
                    )
                  }
                >
                  <img
                    src={imgSrc}
                    alt="artwork"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  {/* <p className="text-sm text-[#F69005] font-medium mt-1 ml-1">
                    © Ajith Kumar
                  </p> */}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Mobile View */}
      <div className="block md:hidden space-y-6">
        {allImages.map((art, i) => (
          <div
            key={i}
            className={`w-full ${
              i % 2 === 1 ? "h-[80vh]" : "h-44"
            } overflow-hidden rounded-xl cursor-pointer`}
            onClick={() => openPopup(art.img, art.desc)}
          >
            <img
              src={art.img}
              alt={`artwork-${i}`}
              className="w-full h-full object-cover rounded-xl "
            />
            {/* <p className="text-sm text-[#F69005] font-medium mt-1 ml-1">
              © Ajith Kumar
            </p> */}
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {popup.show && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-80 flex items-center justify-center z-50 px-4"
          onClick={closePopup}
        >
          <div
            className="max-w-4xl w-full p-2 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={popup.img}
                alt="popup"
                className="w-full max-h-[70vh] object-contain rounded"
              />

              {/* Button Over Image at Bottom Center */}
              <button
                onClick={closePopup}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#ffffff] text-[#121212] px-6 py-1 rounded-full font-extralight  transition"
              >
                Close
              </button>
            </div>

            <p className="mt-4 text-[#ffffff] text-lg text-center">
              {popup.desc}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ArtWorks;
