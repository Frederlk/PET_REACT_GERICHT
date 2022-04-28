import React from "react";
import { images, data } from "../constants";
import { HeadingContent } from "../_components";

const Laurels = () => {
    const laurelsItems = data.laurels.map(({ imgUrl, title, subtitle }, i) => (
        <div key={title + i} className="body-laurels__item">
            <div className="body-laurels__image">
                <img src={imgUrl} alt={title} />
            </div>
            <div className="body-laurels__body">
                <h4 className="body-laurels__title">{title}</h4>
                <div className="body-laurels__subtitle">{subtitle}</div>
            </div>
        </div>
    ));

    return (
        <section className="laurels">
            <div className="laurels__container">
                <div className="laurels__bite">
                    <img src={images.awardsImages.bite} alt="Delight In Every Bite" />
                </div>
                <div className="laurels__content">
                    <HeadingContent className="laurels__heading" subtitle="Awards & recognition" title="Our Laurels" />
                    <div className="laurels__body body-laurels">{laurelsItems}</div>
                </div>
                <div data-da=".laurels__content, 991.98, 1" className="laurels__image-wrap">
                    <span className="laurels__g">
                        <img src={images.defaultImages.g_2} alt="G" />
                    </span>
                    <div className="laurels__img-ibg">
                        <img src={images.awardsImages.contentImage} alt="Pork" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Laurels;
