import React from "react";

const ImageBr = ({ dataDa, className, src, alt }) => {
    return (
        <div data-da={dataDa ? dataDa : null} className={`${className} image-wrap`}>
            <div className="image-wrap-ibg">
                <img src={src} alt={alt} />
            </div>
        </div>
    );
};

export default ImageBr;
