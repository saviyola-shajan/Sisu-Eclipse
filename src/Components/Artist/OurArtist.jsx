import React from "react";
import img1 from "../../assets/images/artist2.png";
import img2 from "../../assets/images/artist3.png";
import img3 from "../../assets/images/artist4.png";

import { MdLocationOn } from "react-icons/md";
const artists = [
  {
    name: "Liora Skye",
    location: "Galway, Ireland",
    about:
      "A traditional oil painter mixing classical European techniques with modern emotional themes.",
    medium: "Oil Painting",
    works: "Solitude, Still Flame",
    quote:
      "I want viewers to feel the weight of silence in my portraits — what’s unsaid is often loudest.",
    image: img1, // Replace with actual path
  },
  {
    name: "Liora Skye",
    location: "Galway, Ireland",
    about:
      "A traditional oil painter mixing classical European techniques with modern emotional themes.",
    medium: "Oil Painting",
    works: "Solitude, Still Flame",
    quote:
      "I want viewers to feel the weight of silence in my portraits — what’s unsaid is often loudest.",
    image: img2,
  },
  {
    name: "Liora Skye",
    location: "Galway, Ireland",
    about:
      "A traditional oil painter mixing classical European techniques with modern emotional themes.",
    medium: "Oil Painting",
    works: "Solitude, Still Flame",
    quote:
      "I want viewers to feel the weight of silence in my portraits — what’s unsaid is often loudest.",
    image: img3,
  },
];

function OurArtist() {
  return (
    <div className="min-h-screen sm:px-10 md:px-16 lg:px-20 py-20 bg-gradient-to-b from-[#AF351D] via-[#1c1c39] to-[#010f20] text-white flex flex-col">
      <div className="w-full mx-auto text-center mb-12 px-4 sm:px-8 md:px-12">
        <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-[#F69005] mb-6 text-center md:text-left">
          Our Artist
        </h2>
        <p className="text-base sm:text-xl text-[#ffffff] font-normal md:text-left max-w-5xl font-Dm-sans tracking-wide text-justify">
          “They’re gathered here on this site, but each one stands entirely on
          their own—an individual voice, a distinct rhythm. You might sense a
          connection between them, or maybe not. Some of them you’ll feel like
          you almost know; others will remain a quiet mystery.<br/><br/> Their work may
          offer clues—or not. Maybe it’s not about them at all. Maybe it’s about
          you. Or a time. Or a place. What matters is what stirs in you as you
          move through their art. Let curiosity guide you. The rest will unfold
          as it should”
        </p>
      </div>
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
        {artists.map((artist, i) => (
          <div
            key={i}
            className="bg-[#1C1122] rounded-2xl overflow-hidden shadow-md transition duration-300 hover:shadow-[0_0_25px_#5561C7] hover:scale-[1.02]"
          >
            <div className="p-4">
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#F69005] mb-1">
                {artist.name}
              </h3>
              <p className="text-sm text-white mb-2 flex items-center gap-1">
                <span className="text-lg">
                  <MdLocationOn />
                </span>{" "}
                {artist.location}
              </p>
              <p className="text-sm text-white mb-1">
                <span className="text-[#F69005] font-medium">About :</span>{" "}
                {artist.about}
              </p>
              <p className="text-sm text-white mb-1">
                <span className="text-[#F69005] font-medium">Medium :</span>{" "}
                {artist.medium}
              </p>
              <p className="text-sm text-white mb-4">
                <span className="text-[#F69005] font-medium">
                  Available Work :
                </span>{" "}
                {artist.works}
              </p>
              <p className="italic text-white text-sm">“{artist.quote}”</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurArtist;
