import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img1.png";
import img6 from "../assets/images/img2.png";
import img7 from "../assets/images/img3.png";
import img8 from "../assets/images/img4.png";

function ExclusiveArts({
  cardDimensions = { width: 999, height: 500 },
  cardsData = [],
}) {
  const [cards] = useState(
    cardsData.length
      ? cardsData
      : [
          { id: 1, img: img1 },
          { id: 2, img: img2 },
          { id: 3, img: img3 },
          { id: 4, img: img4 },
          { id: 5, img: img5 },
          { id: 6, img: img6 },
          { id: 7, img: img7 },
          { id: 8, img: img8 },
        ]
  );

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Calculate individual card progress
  const cardProgress = (index) => {
    const start = index / cards.length;
    const end = (index + 1) / cards.length;
    return useTransform(scrollYProgress, [start, end], [0, 1]);
  };

  return (
    <div
    ref={containerRef}
    className="relative h-[300vh] bg-gradient-to-b from-[#002b5c] to-[#0f172a]  px-24 py-20"
    style={{
      width: "100%",
      perspective: 600,
    }}
    >
        <h1 className="text-[#F69005] font-normal text-8xl">Exclusive Arts</h1>
        <p className="max-w-4xl text-[#ffffff] text-xl font-medium mb-4">Art is the purest form of human expression, a medium that transcends boundaries, cultures, and languages. From delicate brushstrokes on canvas to the raw textures of sculpture</p>
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div
          className="relative"
          style={{ width: cardDimensions.width, height: cardDimensions.height }}
        >
          {cards.map((card, index) => {
            const progress = cardProgress(index);
            const scale = useTransform(progress, [0, 1], [0.8, 1]);
            const opacity = useTransform(progress, [0, 0.5, 1], [0, 1, 1]);
            const rotateZ = useTransform(progress, [0, 1], [10, 0]);
            const y = useTransform(progress, [0, 1], [50, 0]);

            return (
              <motion.div
                key={card.id}
                className="absolute rounded-2xl overflow-hidden h-full w-full"
                style={{
                  width: cardDimensions.width,
                  height: cardDimensions.height,
                  scale,
                  opacity,
                  rotateZ,
                  y,
                  zIndex: index,
                }}
              >
                <img
                  src={card.img}
                  alt={`card-${card.id}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ExclusiveArts;
