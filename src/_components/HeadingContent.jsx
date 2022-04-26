import React from "react";
import images from "../constants/images";

const HeadingContent = ({ className = "", subtitle, title, text, button, buttonLink, h1, reverseSpoon, gap }) => {
    const { spoon } = images.defaultImages;

    return (
        <div className={`${className} ${gap ? "gap" : ""} heading-content`}>
            {subtitle ? <div className="heading-content__subtitle">{subtitle}</div> : null}
            <div className={`heading-content__spoon ${reverseSpoon ? "heading-content__spoon_reverse" : ""}`}>
                <img src={spoon} alt="spoon icon" />
            </div>
            {h1 ? <h1 className="heading-content__title">{title}</h1> : <h2 className="heading-content__title">{title}</h2>}
            {text ? <div className="heading-content__text">{text}</div> : null}
            {button ? (
                <a href={buttonLink} className="heading-content__button button">
                    Explore Menu
                </a>
            ) : null}
        </div>
    );
};

export default HeadingContent;
