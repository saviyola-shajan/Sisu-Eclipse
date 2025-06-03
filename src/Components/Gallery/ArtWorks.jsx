import React from "react";
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

function ArtWorks() {
  return (
    <div className=" px-32 py-20 bg-gradient-to-b from-[#0f172a] via-[#1c1423] to-[#7b2c18]">
      <h2 className="text-7xl font-bold text-[#F69005] mb-10">ART WORKS</h2>

      <div className="space-y-8">
        {artworks.map(([left, right], i) => {
          const isEvenRow = i % 2 === 0;

          return (
            <div key={i} className="flex gap-6">
              {/* First image in row */}
              <div
                className={`${
                  isEvenRow ? "w-[35%]" : "w-[65%]"
                } h-[480px] overflow-hidden rounded-xl`}
              >
                <img
                  src={left}
                  alt="artwork"
                  className="w-full h-full object-cover rounded-xl"
                />
                <p className="text-sm text-[#F69005] font-medium mt-1 ml-1">© Ajith Kumar</p>
              </div>

              {/* Second image in row */}
              <div
                className={`${
                  isEvenRow ? "w-[65%]" : "w-[35%]"
                } h-[480px] overflow-hidden rounded-xl`}
              >
                <img
                  src={right}
                  alt="artwork"
                  className="w-full h-full object-cover rounded-xl"
                />
                <p className="text-sm text-[#F69005] font-medium mt-1 ml-1">© Ajith Kumar</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArtWorks;
