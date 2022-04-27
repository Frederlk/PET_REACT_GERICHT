import React from "react";
import { images, data } from "../constants";
import { HeadingContent, Menu } from "../_components";

const Special = () => {
    return (
        <section className="special">
            <div className="special__container">
                <HeadingContent className="special__heading" subtitle="Menu that fits you palatte" title="Today’s Special" />
                <div className="special__body">
                    <Menu title="Wine & Beer" className="special__menu" data={data.wineBeer} />
                    <div className="special__image-ibg">
                        <img src={images.defaultImages.cocktail} alt="Cocktail Stuff" />
                    </div>
                    <Menu title={"Cocktails"} className="special__menu" data={data.cocktails} />
                </div>
                <div className="special__button-wrap">
                    <a href="#" className="special__button button">
                        View More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Special;
