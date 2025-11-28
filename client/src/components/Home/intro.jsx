import React from "react";

const Intro = () => {

  return (
    <div className="relative w-full h-96 md:h-[500px] overflow-hidden">
      {/* Video Background */}
      <video
        src="/video.mp4"
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      ></video>

      {/* Overlay Text at Bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-6 py-4 md:px-12 md:py-6 text-white">
        <h1 className="text-1xl md:text-2xl font-bold mb-1">
          Welcome to Mount Summit World School
        </h1>
        <p className="text-sm md:text-lg max-w-3xl">
          Quality education with modern classrooms, trained teachers, and a safe environment.
        </p>

      </div>
    </div>
  );
};

export default Intro;
