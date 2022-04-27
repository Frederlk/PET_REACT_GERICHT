import React from "react";
import { images } from "../constants";
import { HeadingContent, ImageBr } from "../_components";

const Believe = () => {
    const { chef, quotes, sign, bg } = images.defaultImages;

    return (
        <section className="believe">
            <div className="believe__container">
                <ImageBr dataDa=".believe__content, 767.98, 2" className="believe__image-wrap" src={chef} alt="Kevin Luo" />
                <div className="believe__content">
                    <HeadingContent className="believe__heading" subtitle="Chef’s Word" title="What we believe in" />
                    <div className="believe__text">
                        <img src={quotes} alt="Quotes" />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit . auctor sit iaculis in arcu. Vulputate
                        nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus
                        eu. Congue iaculis integer curabitur semper sit nunc.
                    </div>
                    <div className="believe__sign sign-believe">
                        <div className="sign-believe__name">Kevin Luo</div>
                        <div className="sign-believe__position">Chef & Founder</div>
                        <div className="sign-believe__image">
                            <img src={sign} alt="Kevin Luo Sign" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="believe__bg-ibg">
                <img src={bg} alt="Background" />
            </div>
        </section>
    );
};

export default Believe;
