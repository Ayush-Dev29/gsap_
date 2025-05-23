import React from "react";
import { hightlightsSlides } from "../constants";

const VideoCarousel = () => {
  return (
    <div className="flex items-center">
      {hightlightsSlides.map((list, i) => (
        <div key={list.id} className="sm:pr-20 pr-10">
          <div className="video-carousel_container">
            <div className="w-full h-full flex items-center justify-center rounded-3xl overflow-hidden bg-black">
              <video
                src={list.video}
                type="video/mp4"
                playsInline
                preload="auto"
                muted
              />
            </div>
            <div className="absolute top-12 left-[5%] z-10">
              {list.textLists.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoCarousel;
