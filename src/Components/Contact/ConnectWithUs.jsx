import React from 'react';
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

function ConnectWithUs() {
  return (
    <section className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#0e1631] to-[#7B2C18] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-semibold text-[#F69005] mb-8 sm:mb-10 md:mb-12">
          Connect With Us For<br className="hidden md:block" /> More Details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Location */}
          <div className="bg-white/10 backdrop-blur-sm p-4 mx-4 rounded-lg shadow-md flex flex-col items-center">
            <MdLocationOn className="text-[#F69005] text-3xl mb-2" />
            <h3 className="text-lg font-semibold text-[#F69005] mb-2">Location</h3>
            <p className="text-base text-center text-white/80 font-Dm-sans">
              9 Limerick Lane, Limerick<br />
              City/County Limerick, Ireland
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white/10 backdrop-blur-sm p-6 mx-4 rounded-lg shadow-md flex flex-col items-center">
            <MdPhone className="text-[#F69005] text-2xl sm:text-3xl mb-2" />
            <h3 className="text-lg font-semibold text-[#F69005] mb-2">Phone</h3>
            <p className="text-base text-white/80 font-Dm-sans">+353 83 874 2273</p>
          </div>

          {/* Email */}
          <div className="bg-white/10 backdrop-blur-sm p-6 mx-4 rounded-lg shadow-md flex flex-col items-center">
            <MdEmail className="text-[#F69005] text-2xl sm:text-3xl mb-2" />
            <h3 className="text-lg font-semibold text-[#F69005] mb-2">Email</h3>
            <p className="text-base text-white/80 font-Dm-sans">shane@sisueclipse.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConnectWithUs;
