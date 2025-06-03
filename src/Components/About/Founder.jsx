import React from "react";
import img from "../../assets/images/image37.png";

function Founder() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#7a0202] to-[#1b101b] px-4 sm:px-8 md:px-24 py-16 text-white">
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[#F69005] ml-20 text-left">
        Founder Voice
      </h2>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Left: Image + Name */}
        <div className="md:w-1/3 w-full flex flex-col items-center">
          <div className=" rounded-xl">
            <img
              src={img}
              alt="Shane Lannon"
              className="w-full object-cover"
            />
          </div>
          <h3 className=" text-lg sm:text-xl text-white font-serif">
            Shane Lannon
          </h3>
        </div>

        {/* Right: Paragraph */}
        <div className="md:w-2/3 w-full space-y-5 text-[15px] leading-relaxed font-light text-justify mt-10">
          <p>
            * I started buying art in 2023. There was no grand plan behind it—just one image that caught my eye and made me stop.
            Something about it stuck with me, so I bought it. And that was the beginning.
          </p>

          <p>
            Since then, I’ve picked up more pieces, each one adding something to my world—quietly, subtly. I didn’t know it at the time,
            but I was opening up a part of my mind I hadn’t explored before. Now, this website is simply the next step in that journey.
            I’m not chasing some big, polished vision. I’m just following what feels right, piece by piece.
          </p>

          <p>
            Art doesn’t need to be loud to matter. I’m not interested in making it appeal to everyone or selling the idea that everyone
            should own art. What I care about is the person who sees a piece and feels something—someone who recognizes the value of what
            the artist has created and wants to bring that feeling into their own space.
          </p>

          <p>That moment of connection is enough.</p>

          <p>
            This isn’t about exclusivity or being high-brow. It’s about small waves of emotion—quiet recognition, a personal spark.
            That’s what I want this space to be. A place for those moments to happen. Nothing more, nothing less.
          </p>

          <p className="font-medium">Thanks for being here.<br />Shane</p>
        </div>
      </div>
    </div>
  );
}

export default Founder;
