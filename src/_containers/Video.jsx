import React, { useState, useRef } from "react";

import { images, meal } from "../constants";

const Intro = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const vidRef = useRef();

    return (
        <div className="video">
            <div className="video__wrap">
                <video ref={vidRef} src={meal} type="video/mp4" loop controls={false} muted />
            </div>
            <div
                className={`video__overlay ${playVideo ? "_view" : ""}`}
                onClick={() => {
                    setPlayVideo(!playVideo);
                    if (playVideo) {
                        vidRef.current.pause();
                    } else {
                        vidRef.current.play();
                    }
                }}>
                <div className="video__bg-ibg">
                    <img src={images.defaultImages.video} alt="Video Background" />
                </div>
                <div className="video__circle">
                    <img src={images.defaultImages.play} alt="Play button" />
                </div>
            </div>
        </div>
    );
};

export default Intro;
