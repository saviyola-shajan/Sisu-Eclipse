import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";

function ExclusiveArts({
  cardDimensions = { width: 999, height: 500 },
  cardsData = [],
}) {
  const [cards] = useState(
    cardsData.length
      ? cardsData
      : [
          { id: 1, img: img1 },
          { id: 4, img: img4 },
          { id: 6, img: img6 },
          { id: 3, img: img3 },
          { id: 2, img: img2 },
          { id: 5, img: img5 },
          { id: 1, img: img1 },
          { id: 4, img: img4 },
          { id: 6, img: img6 },
          { id: 3, img: img3 },
          { id: 2, img: img2 },
          { id: 5, img: img5 },
        ]
  );

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const cardProgress = (index) => {
    const start = index / cards.length;
    const end = (index + 1) / cards.length;
    return useTransform(scrollYProgress, [start, end], [0, 1]);
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[110vh] md:h-[300vh] bg-gradient-to-b from-[#002F65] to-[#0f172a] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10 sm:py-14 md:py-16 lg:py-20"
      style={{
        width: "100%",
        perspective: 600,
      }}
    >
      <h1 className="text-[#F69005] font-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 text-center md:text-left">
        Featured Art
      </h1>
      <p className="max-w-5xl text-[#ffffff] text-base sm:text-lg md:text-xl font-normal mb-0 font-Dm-sans tracking-wide text-center md:text-left">
        The Vision Is Not to Create Art for Everyone, but to Honour the Rare and
        Meaningful Moments When One Individual Recognizes the Essence of a Piece
        and Claims It as Their Own
      </p>
      <div className="sticky top-0 h-[80vh] md:h-screen flex items-center justify-center">
        <div
          className="relative w-full max-w-[90vw] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[999px]"
          style={{ height: cardDimensions.height }}
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
                className="absolute rounded-2xl overflow-hidden h-full w-full flex items-center justify-center"
                style={{
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
                  className="max-w-full max-h-full object-contain rounded-2xl"
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
